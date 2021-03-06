from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import redirect
from django.conf import settings
import os
import logging
from urllib.error import HTTPError

from .serializers import ProfileSocialSerializer, SocialAuthForGitihubSerializer, SocialAuthSerializer, ArticleSerializer, UserSerializer, UserSerializerWithToken, ProfileSerializer
from .models import Article, Profile, ProfileSocial
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
from django.shortcuts import HttpResponse
from social_core.backends.oauth import BaseOAuth2
from social_core.exceptions import MissingBackend, AuthTokenError, AuthForbidden
from social_django.utils import load_strategy, load_backend
#from django.contrib.auth import login
import json

from CodeIdeas.utils import parse_articles
import requests
from cgi import parse_qs, escape

from CodeIdeas.settings import EMAIL_HOST_USER
#from django.core.mail import send_mail
from datetime import datetime
from django.forms.models import model_to_dict

from django.contrib.syndication.views import Feed
from django.utils.feedgenerator import Rss201rev2Feed

index_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'index.html')
signin_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'signin.html')
signup_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'signup.html')
plans_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'bookmarks.html')
about_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'about.html')
prog_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'filter', 'programming.html')
days_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'filter', 'daysOfCode.html')
portfolios_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'filter', 'portfolios.html')
achievement_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'achievement.html')
downloads_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'downloads.html')
downloads_file_base = '100daysfcodeideas'
cdn_base_path = 'https://storage.googleapis.com/daily-learning/'

class RSSFeed(Feed):
    title = "Daily Learning"
    link = "https://daily-learning.herokuapp.com/feeds"
    description = "RSS feed - articles"

    def items(self):
        return Article.objects.all().order_by('-category', '-time')

    def item_title(self, item):
        return item.title

    def item_pubdate(self, item):
        return item.time

    def item_description(self, item):
        return item.subtitle

    def item_link(self, item):
        return item.url

    def item_extra_kwargs(self, item):

        item = {
            'thumbnail_url': item.image,
            'thumbnail_width': 300,
            'thumbnail_height': 150
        }
        return item

class Download(APIView):
    def get(self, request, format=None):
        type_param = self.request.query_params.get('type', None)
        type_param = escape(type_param)
        if type_param:
            with open(os.path.join(settings.REACT_APP_DIR, 'package.json')) as f:
                data = json.load(f)
                if type_param == 'dmg':
                    file_name = "%s-%s.%s" % (downloads_file_base, data['version'], type_param)
                    msg = {"url": "%s%s" % (cdn_base_path, file_name)}
                    return Response(data=msg)
                elif type_param == 'exe':
                    file_name = "%s %s.%s" % (downloads_file_base, data['version'], type_param)
                    response = HttpResponse()
                    msg = {"url": "%s%s" % (cdn_base_path, file_name)}
                    return Response(data=msg)
                else:
                    return HttpResponse(
                        """
                        You need provide the file type.
                        """,
                        status=400,
                    )
        else:
            return HttpResponse(
                """
                    You need provide the file type.
                """,
                status=400,
            )


def download_windows(request):
    with open(os.path.join(settings.REACT_APP_DIR, 'package.json')) as f:
        data = json.load(f)
        mac_file = "100daysfcodeideas-%s.exe" % data['version']
        file = open(os.path.join(settings.REACT_APP_DIR, 'dist', mac_file), 'rb')
        response = HttpResponse(file)
        response['Content-Type'] = 'application/octet-stream'
        response['Content-Disposition'] = 'attachment;filename = "%s"' % mac_file
        return response

# Create your views here.
def robot(request):
    return HttpResponse('User-agent: *\nAllow: /')

def googleValidation(request):
    return HttpResponse('google-site-verification: google1f1b6096ed030c21.html')

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

def downloads(request):
    try:
        with open(downloads_file_path) as f:
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

def signup(request):
    try:
        with open(signup_file_path) as f:
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

def plans(request):
    try:
        with open(plans_file_path) as f:
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

def about(request):
    try:
        with open(about_file_path) as f:
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

def prog(request):
    try:
        with open(prog_file_path) as f:
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

def days(request):
    try:
        with open(days_file_path) as f:
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

def portfolios(request):
    try:
        with open(portfolios_file_path) as f:
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

def achievements(request):
    try:
        with open(about_file_path) as f:
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
    # use empty authentication classes
    authentication_classes = []
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = Response(serializer.data, status=status.HTTP_201_CREATED)
            response.set_cookie('token', serializer.data['token'], httponly=True)
            return response

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

class InsertPorfolio(APIView):

    def get(self, request, format=None):
        parse_articles('porfolio')
        return HttpResponse('OK')

class InsertDataMedium(APIView):

    def get(self, request, format=None):
        parse_articles('medium')
        return HttpResponse('OK')

class InsertDataDev(APIView):

    def get(self, request, format=None):
        parse_articles('devto')
        return HttpResponse('OK')

class ArticleByCategoryViewSet(generics.ListAPIView):
    # use empty authentication classes
    authentication_classes = []
    permission_classes = (permissions.AllowAny,)
    serializer_class = ArticleSerializer
    http_method_names = ['get']

    def get_queryset(self):
        queryset = Article.objects.all().order_by('-category', '-time')
        category = self.request.query_params.get('category', None)
        if category is not None:
            queryset = queryset.filter(category=category)
        return queryset

class ProfileViewSet(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = []
    # use default authentication classes
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get(self, request):
        reader = self.request.query_params.get('reader', None)
        p = Profile.objects.filter(reader=reader).first()
        if p:
            return Response(data=model_to_dict(p), status=status.HTTP_200_OK)
        else:
            return Response(data={'error':'No reader'}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        reader_id = self.request.query_params.get('reader_id', None)
        hasSubscribed = self.request.query_params.get('hasSubscribed', None)
        bookmarks = self.request.query_params.get('bookmarks', None)
        finishedArticles = self.request.query_params.get('finishedArticles', None)
        if reader_id != None:
            if hasSubscribed != None:
                if hasSubscribed != 'True' or hasSubscribed != 'False':
                    return Response(data={'error':'hasSubscribed is invalid'}, status=status.HTTP_400_BAD_REQUEST)

                p = Profile.objects.get(reader_id = reader_id)
                p.hasSubscribed = hasSubscribed
                p.save()
                return Response(status=status.HTTP_200_OK)

            if bookmarks != None:
                bookmarkList = bookmarks.split(',')
                for bookmark in bookmarkList:
                    if bookmark != '' and bookmark.isnumeric() == False:
                        return Response(data={'error':'bookmarks is invalid'}, status=status.HTTP_400_BAD_REQUEST)

                p = Profile.objects.get(reader_id = reader_id)
                p.bookmarks = bookmarks
                p.save()
                return Response(status=status.HTTP_200_OK)

            if finishedArticles != None:
                finishedArticleList = finishedArticles.split(',')
                for finishedArticle in finishedArticleList:
                    if finishedArticle != '' and finishedArticle.isnumeric() == False:
                        return Response(data={'error':'finishedArticles is invalid'}, status=status.HTTP_400_BAD_REQUEST)

                p = Profile.objects.get(reader_id = reader_id)
                p.finishedArticles = finishedArticles
                p.save()
                return Response(status=status.HTTP_200_OK)

        return Response(status=status.HTTP_200_OK)

    def post(self, request):
        try:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                serializer.save()

                now = datetime.now()
                dt_string = now.strftime("%d/%m/%Y %H:%M:%S")

                #send_mail('[Daily Learning] Thanks for registration!',
                #'You login to Daily Learning successfully on ' + dt_string,
                #EMAIL_HOST_USER,
                #[serializer.data['email']],
                #fail_silently = False)

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

class ProfileSocialViewSet(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = []
    # use default authentication classes
    queryset = ProfileSocial.objects.all()
    serializer_class = ProfileSocialSerializer

    def get(self, request):
        provider = self.request.query_params.get('provider', None)
        email = self.request.query_params.get('email', None)
        p = ProfileSocial.objects.filter(email=email).filter(provider=provider).first()
        if p:
            return Response(data=model_to_dict(p), status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_200_OK)

    def put(self, request):
        provider = self.request.query_params.get('provider', None)
        email = self.request.query_params.get('email', None)
        hasSubscribed = self.request.query_params.get('hasSubscribed', None)
        bookmarks = self.request.query_params.get('bookmarks', None)
        finishedArticles = self.request.query_params.get('finishedArticles', None)
        if email != None and provider != None:
            if hasSubscribed != None:
                if hasSubscribed != 'True' or hasSubscribed != 'False':
                    return Response(data={'error':'hasSubscribed is invalid'}, status=status.HTTP_400_BAD_REQUEST)

                p = ProfileSocial.objects.filter(email=email).filter(provider=provider).first()
                p.hasSubscribed = hasSubscribed
                p.save()
                return Response(status=status.HTTP_200_OK)

            if bookmarks != None:
                bookmarkList = bookmarks.split(',')
                for bookmark in bookmarkList:
                    if bookmark != '' and bookmark.isnumeric() == False:
                        return Response(data={'error':'bookmarks is invalid'}, status=status.HTTP_400_BAD_REQUEST)

                print(bookmarkList)
                print(len(bookmarkList))
                p = ProfileSocial.objects.filter(email=email).filter(provider=provider).first()
                p.bookmarks = bookmarks
                p.save()
                return Response(status=status.HTTP_200_OK)

            if finishedArticles != None:
                finishedArticleList = finishedArticles.split(',')
                for finishedArticle in finishedArticleList:
                    if finishedArticle != '' and finishedArticle.isnumeric() == False:
                        return Response(data={'error':'finishedArticles is invalid'}, status=status.HTTP_400_BAD_REQUEST)

                p = ProfileSocial.objects.filter(email=email).filter(provider=provider).first()
                p.finishedArticles = finishedArticles
                p.save()
                return Response(status=status.HTTP_200_OK)

        return Response(status=status.HTTP_200_OK)

    def post(self, request):
        try:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                serializer.save()

                now = datetime.now()
                dt_string = now.strftime("%d/%m/%Y %H:%M:%S")

                #send_mail('[Daily Learning] Thanks for registration!',
                #'You login to Daily Learning successfully on ' + dt_string,
                #EMAIL_HOST_USER,
                #[serializer.data['email']],
                #fail_silently = False)

                #email = serializer.data.get('email', None)
                #send_mail('Django mail', 'This e-mail was sent with Django.','alaymangogo@gmail.com', [email], fail_silently=False)
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            msg = {"error": serializer.errors}
            return Response(data=msg)
        except ValidationError as e:
            msg = {"error": e.messages}
            print(msg)
            return Response(data=msg)


profile_socail_view = ProfileSocialViewSet.as_view()


class RefreshTokenView(generics.GenericAPIView):
    authentication_classes = []
    permission_classes = (permissions.AllowAny,)
    def get(self, request):
        token = request.COOKIES.get('token')
        data = {'token':token}
        scheme = request.is_secure() and "https" or "http"
        url = scheme + "://" + request.get_host() + '/api/refresh-token-auth/'
        res = requests.post(url, data = data)
        if res.status_code == status.HTTP_200_OK:
            response = Response(status=status.HTTP_200_OK)
            response.set_cookie('token', json.loads(res.text)["token"], httponly=True)
            return response
        else:
            return Response(status=res.status_code)

renew_token= RefreshTokenView.as_view()

class SocialGithubLoginView(generics.GenericAPIView):
    serializer_class = SocialAuthForGitihubSerializer
    # use empty authentication classes
    authentication_classes = []
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        code = serializer.data.get('code', None)
        client_id = os.getenv("SOCIAL_AUTH_GITHUB_KEY")
        client_secret = os.getenv("SOCIAL_AUTH_GITHUB_SECRET")

        url = 'https://github.com/login/oauth/access_token'
        data = {'code': code,'client_id':client_id,'client_secret':client_secret}
        res = requests.post(url, data = data)
        if res.status_code == status.HTTP_200_OK:
            return Response(status=status.HTTP_200_OK, data=res.text.split('=')[1].split('&')[0])
        else:
            return Response(status=res.status_code, data=res.text)

social_auth_github = SocialGithubLoginView.as_view()

class SocialLoginView(generics.GenericAPIView):
    serializer_class = SocialAuthSerializer

    # use empty authentication classes
    authentication_classes = []
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        """Authenticate user through the provider and access_token"""
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        provider = serializer.data.get('provider', None)
        email = serializer.data.get('email', None)
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
            # create pofile social

            scheme = request.is_secure() and "https" or "http"
            url = scheme + "://" + request.get_host() + '/api/profilesocial/'
            res = requests.get(url)
            if authenticated_user.email == "":
                authenticated_user.email = email

            if res.text == "":
                res = requests.post(url, data = {
                    "provider": provider,
                    "email": authenticated_user.email
                })

            #customize the response to your needs
            response = {
                "email": authenticated_user.email,
                "username": authenticated_user.username,
                "token": data.get('token'),
                "provider": provider
            }
            response = Response(status=status.HTTP_200_OK, data=response)
            response.set_cookie('token', data.get('token'), httponly=True)

            now = datetime.now()
            dt_string = now.strftime("%d/%m/%Y %H:%M:%S")

            #send_mail('[Daily Learning] Welcome Back!',
            #'Hi ' + authenticated_user.username + ', you login to Daily Learning successfully on ' + dt_string,
            #EMAIL_HOST_USER,
            #[authenticated_user.email],
            #fail_silently = False)

            return response

social_auth = SocialLoginView.as_view()
