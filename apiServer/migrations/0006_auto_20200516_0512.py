# Generated by Django 3.0.3 on 2020-05-16 05:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apiServer', '0005_auto_20200516_0434'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='decription',
            new_name='description',
        ),
    ]