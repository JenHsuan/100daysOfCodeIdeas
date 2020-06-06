from django.urls import path, include, re_path
from django.conf.urls import url
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import profile_view, social_auth_github,  social_auth, signin, index, react, InsertData, UserViewSet, current_user, UserList, OrderViewSet, UserViewSet, ArticleByCategoryViewSet, ProfileViewSet
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token

router = DefaultRouter()
router.register(r'user', UserViewSet)
router.register(r'order', OrderViewSet)
# router.register(r'articles', ArticleViewSet)
#router.register(r'profile', ProfileViewSet)


urlpatterns = [
    path("", index, name = "index"),
    path("signin", signin, name = "signin"),
    path("react", react, name="react"),
    path("insert", InsertData.as_view(), name="insert"),
    url(r'^api/', include(router.urls)),
    path("api/articles", ArticleByCategoryViewSet.as_view(), name='articles'),
    path("api/profile/", profile_view),
    path('api/token-auth/', obtain_jwt_token, name='token-auth'),
    path('api/current_user/', current_user, name='current_user'),
    path('api/users/', UserList.as_view(), name='users'),
    path("api/social-auth", social_auth),
    path("api/get-github-access-token", social_auth_github)
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


