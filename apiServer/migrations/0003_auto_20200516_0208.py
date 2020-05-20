# Generated by Django 3.0.3 on 2020-05-16 02:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('apiServer', '0002_auto_20200516_0207'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='reader',
            field=models.OneToOneField(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='order', to=settings.AUTH_USER_MODEL),
        ),
    ]