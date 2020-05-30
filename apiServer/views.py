from django.http import HttpResponse
from django.shortcuts import render
from django.conf import settings
import os
import logging

from .serializers import SocialAuthSerializer, ArticleSerializer, UserSerializer, UserSerializerWithToken, OrderSerializer, ProfileSerializer
from .models import Article, Order, Profile
from django.contrib.auth.models import User
from rest_framework import viewsets, mixins, permissions, status, generics, parsers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from django.core.exceptions import ImproperlyConfigured
from social_django.utils import load_strategy

from CodeIdeas.utils import parse_articles

index_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'index.html')

# Create your views here.
def index(request):
    try:
        with open(index_file_path) as f:
            return HttpResponse(f.read())
    except FileNotFoundError:
        logging.exception('Production build of app not found')
        return HttpResponse(
            """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead after
                running `yarn start` on the frontend/ directory
                """,
            status=501,
        )

def react(request):
    try:
        with open(index_file_path) as f:
            return HttpResponse(f.read())
    except FileNotFoundError:
        logging.exception('Production build of app not found')

class InsertData(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        parse_articles('devto')
        parse_articles('medium')
        return HttpResponse('OK')

@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get', 'put']

'''
class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    http_method_names = ['get']
'''

class ArticleByCategoryViewSet(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ArticleSerializer
    http_method_names = ['get']

    def get_queryset(self):
        queryset = Article.objects.all()
        category = self.request.query_params.get('category', None)
        if category is not None:
            queryset = queryset.filter(category=category)
        return queryset

class OrderViewSet(viewsets.ModelViewSet):
    """
    List all workkers, or create a new worker.
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    http_method_names = ['get', 'post', 'put']

class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class SocialAuth(APIView):
    throttle_classes = ()
    permission_classes = ()
    parser_classes = (parsers.FormParser, parsers.JSONParser,)
    renderer_classes = (JSONRenderer,)
    serializer_class = SocialAuthSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.DATA)

        if serializer.is_valid():
            backend = serializer.data['backend']
            access_token = serializer.data['access_token']
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # 讀取python-social-auth strategy
        strategy = load_strategy(request=request, backend=backend)

        try:
            kwargs = dict({(k, i) for k, i in serializer.data.items() if k != 'backend'})
            user = request.user # 如果註冊過的使用者已登入, 則連結此使用者
            kwargs['user'] = user.is_authenticated() and user or None

            # 使用者驗證
            user = strategy.backend.do_auth(**kwargs)

        except AuthAlreadyAssociated:
            data = {
                'error_code': 'social_already_associated',
                'status': 'Auth associated with another user.',
            }
            return Response(data, status=status.HTTP_403_FORBIDDEN)

        if not user:
            data = {
                'error_code': 'social_no_user',
                'status': 'No associated user.',
            }
            return Response(data, status=status.HTTP_403_FORBIDDEN)

        if not user.is_active:
            data = {
                'error_code': 'social_inactive',
                'status': 'Associated user is inactive.'
            }
            return Response(data, status=status.HTTP_403_FORBIDDEN)

        payload = jwt_payload_handler(user)
        return Response({'token': jwt_encode_handler(payload), 'username': user.username}) # 回傳JWT token及使用者帳號
