# Generated by Django 3.0.3 on 2020-06-14 04:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiServer', '0013_auto_20200614_0406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmarks',
            name='bookmarks',
            field=models.ManyToManyField(blank=True, related_name='bookmarks', to='apiServer.Bookmark'),
        ),
    ]
