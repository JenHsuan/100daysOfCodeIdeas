from django.db import models
from django.contrib.auth.models import User
from model_utils import Choices
from django.utils.translation import gettext as _

class Article(models.Model):
    title = models.CharField(max_length = 200)
    subtitle = models.CharField(max_length = 200)
    image = models.TextField()
    url =models.TextField()
    name = models.CharField(max_length = 64)
    time = models.DateField()
    readtime = models.CharField(max_length = 64)
    CATEGORY = Choices((0, 'devto', _('devto')), (1, 'medium', _('medium')))
    category = models.IntegerField(choices=CATEGORY, default=CATEGORY.devto)
    description = models.CharField(max_length = 64, default='')

    def __str__(self):
        return f"{self.id} - {self.title}, {self.subtitle}, {self.image}, {self.name}, {self.url}, {self.time}, {self.readtime}, {self.category}"

class Profile(models.Model):
    reader = models.OneToOneField(User, on_delete=models.CASCADE, blank = True, related_name="profile")
    email = models.CharField(max_length = 64)
    
class Order(models.Model):
    reader = models.OneToOneField(User, on_delete=models.CASCADE, blank = True, related_name="order") 
    articles = models.ManyToManyField(Article, blank = True, related_name="articles")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
