# Generated by Django 3.0.3 on 2020-06-14 04:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('apiServer', '0014_auto_20200614_0414'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.IntegerField(choices=[(0, 'unfinished'), (1, 'finished')], default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('article', models.OneToOneField(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='article', to='apiServer.Article')),
            ],
        ),
        migrations.RemoveField(
            model_name='bookmarks',
            name='bookmarks',
        ),
        migrations.DeleteModel(
            name='Bookmark',
        ),
        migrations.AddField(
            model_name='bookmarks',
            name='items',
            field=models.ManyToManyField(blank=True, related_name='items', to='apiServer.Item'),
        ),
    ]