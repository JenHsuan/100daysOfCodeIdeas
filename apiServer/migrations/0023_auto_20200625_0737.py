# Generated by Django 3.0.3 on 2020-06-25 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiServer', '0022_entry_pub_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='time',
            field=models.DateTimeField(),
        ),
    ]
