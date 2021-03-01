from django.urls import path, include, re_path
from django.conf.urls import url
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import downloads, Download, RSSFeed, robot, googleValidation, achievements, profile_socail_view, InsertDataDev, about, renew_token, plans, signup, profile_view, social_auth_github,  social_auth, signin, index, react, InsertDataMedium, UserViewSet, current_user, UserList, UserViewSet, ArticleByCategoryViewSet, ProfileViewSet, prog, days, InsertPorfolio, portforlios
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token

from django.contrib.sitemaps import GenericSitemap
from django.contrib.sitemaps.views import sitemap
from django.contrib.sitemaps import views as sitemaps_views
from django.views.decorators.cache import cache_page
from .models import Entry
from django.utils.functional import wraps

router = DefaultRouter()
router.register(r'user', UserViewSet)
#router.register(r'order', OrderViewSet)
# router.register(r'articles', ArticleViewSet)
#router.register(r'profile', ProfileViewSet)

sitemaps = {
    'codeideas': GenericSitemap({'queryset': Entry.objects.get_queryset().order_by('id'), 'date_field': 'pub_date'}, priority=1.0),
}

def x_robots_tag(func):
    def inner(request, *args, **kwargs):
        responce = func(request, *args, **kwargs)
        responce['X-Robots-Tag'] = 'noodp, noarchive'
        return responce
    return wraps(func)(inner)

urlpatterns = [
    path('sitemap.xml', x_robots_tag(sitemap),

         {'sitemaps': sitemaps},
         name='django.contrib.sitemaps.views.sitemap'),
    path("", index, name = "index"),
    path("signin", signin, name = "signin"),
    path("signup", signup, name = "signup"),
    path("plans", plans, name = "plans"),
    path("about", about, name = "about"),
    path("filter/programming", prog, name = "prog"),
    path("filter/daysOfCode", days, name = "days"),
    path("filter/portforlios", portforlios, name = "portforlios"),
    path("api/download", Download.as_view(), name = "download"),
    path("downloads", downloads, name = "downloads"),
    path("achievements", achievements, name="achievements"),
    path("react", react, name="react"),
    path("google1f1b6096ed030c21.html", googleValidation, name="googleValidation"),
    path("robots.txt", robot, name='robot'),
    path("insertmedium", InsertDataMedium.as_view(), name="insertmedium"),
    path("insertporfolio", InsertPorfolio.as_view(), name="insertporfolio"),
    path("insertdev", InsertDataDev.as_view(), name="insertdev"),
    url(r'^api/', include(router.urls)),
    path("api/articles", ArticleByCategoryViewSet.as_view(), name='articles'),
    path("api/profile/", profile_view),
    path("api/profilesocial/", profile_socail_view),
    path('api/token-auth/', obtain_jwt_token, name='token-auth'),
    path('api/refresh-token-auth/', refresh_jwt_token, name='refresh-token-auth'),
    path('api/renew-token/', renew_token, name='renew-token'),
    path('api/current_user/', current_user, name='current_user'),
    path('api/users/', UserList.as_view(), name='users'),
    path("api/social-auth", social_auth),
    path("api/get-github-access-token", social_auth_github),
    url(r'^feed/$', RSSFeed(), name = "RSS")
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


