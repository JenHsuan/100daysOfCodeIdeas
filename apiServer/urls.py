from django.urls import path, include, re_path
from django.conf.urls import url
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import UserViewSet, current_user, UserList
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token

router = DefaultRouter()
router.register(r'user', UserViewSet)


urlpatterns = [
    path("", views.index, name = "index"),
    path("react", views.react, name="react"),
    url(r'^api/', include(router.urls)),
    path('token-auth/', obtain_jwt_token, name='token-auth'),
    path('current_user/', current_user, name='current_user'),
    path('users/', UserList.as_view(), name='users')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


