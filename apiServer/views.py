from django.http import HttpResponse
from django.shortcuts import render
from django.conf import settings
import os
import logging
from urllib.error import HTTPError

from .serializers import SocialAuthForGitihubSerializer, SocialAuthSerializer, ArticleSerializer, UserSerializer, UserSerializerWithToken, OrderSerializer, ProfileSerializer
from .models import Article, Order, Profile
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from rest_framework import viewsets, mixins, permissions, status, generics, parsers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework_jwt.settings import api_settings
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
from django.core.exceptions import ImproperlyConfigured
from social_core.backends.oauth import BaseOAuth2
from social_core.exceptions import MissingBackend, AuthTokenError, AuthForbidden
from social_django.utils import load_strategy, load_backend
#from django.contrib.auth import login
import json

from CodeIdeas.utils import parse_articles
import requests

from django.core.mail import send_mail

index_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'index.html')
signin_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'signin.html')

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

def signin(request):
    try:
        with open(signin_file_path) as f:
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
        
        msg = {"error": serializer.errors}
        return Response(data=msg)

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

class ProfileViewSet(generics.GenericAPIView):
    #permission_classes = (permissions.AllowAny,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def post(self, request):
        try:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                serializer.save()
                #email = serializer.data.get('email', None)
                #send_mail('Django mail', 'This e-mail was sent with Django.','alaymangogo@gmail.com', [email], fail_silently=False)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            msg = {"error": serializer.errors}
            return Response(data=msg)
        except ValidationError as e:
            msg = {"error": e.messages}
            print(msg)
            return Response(data=msg) 
        

profile_view = ProfileViewSet.as_view()         

class SocialGithubLoginView(generics.GenericAPIView):
    serializer_class = SocialAuthForGitihubSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        code = serializer.data.get('code', None)
        client_id = os.getenv("SOCIAL_AUTH_GITHUB_KEY")
        client_secret = os.getenv("SOCIAL_AUTH_GITHUB_SECRET")

        url = 'https://github.com/login/oauth/access_token'
        data = {'code': code,'client_id':client_id,'client_secret':client_secret}
        print(data)
        res = requests.post(url, data = data)
        if res.status_code == status.HTTP_200_OK:
            print(res.text)
            print(res.text.split('=')[1].split('&')[0])
            return Response(status=status.HTTP_200_OK, data=res.text.split('=')[1].split('&')[0])
        else:
            return Response(status=res.status_code, data=res.text)

social_auth_github = SocialGithubLoginView.as_view()    

class SocialLoginView(generics.GenericAPIView):
    serializer_class = SocialAuthSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        """Authenticate user through the provider and access_token"""
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        provider = serializer.data.get('provider', None)
        strategy = load_strategy(request)
        try:
            backend = load_backend(strategy=strategy, name=provider,
            redirect_uri=None)
 
        except MissingBackend:
            return Response({'error': 'Please provide a valid provider'},
            status=status.HTTP_400_BAD_REQUEST)
        try:
            if isinstance(backend, BaseOAuth2):
                access_token = serializer.data.get('access_token')
            user = backend.do_auth(access_token)
        except HTTPError as error:
            return Response({
                "error": {
                    "access_token": "Invalid token",
                    "details": str(error)
                }
            }, status=status.HTTP_400_BAD_REQUEST)
        except AuthTokenError as error:
            return Response({
                "error": "Invalid credentials",
                "details": str(error)
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            authenticated_user = backend.do_auth(access_token, user=user)
        
        except HTTPError as error:
            return Response({
                "error":"invalid token",
                "details": str(error)
            }, status=status.HTTP_400_BAD_REQUEST)
        
        except AuthForbidden as error:
            return Response({
                "error":"invalid token",
                "details": str(error)
            }, status=status.HTTP_400_BAD_REQUEST)

        if authenticated_user and authenticated_user.is_active:
			#generate JWT token
            #login(request, authenticated_user)
            data={
                "token": jwt_encode_handler(
                    jwt_payload_handler(user)
                )}
			#customize the response to your needs
            response = {
                "email": authenticated_user.email,
                "username": authenticated_user.username,
                "token": data.get('token')
            }
            return Response(status=status.HTTP_200_OK, data=response)

social_auth = SocialLoginView.as_view()