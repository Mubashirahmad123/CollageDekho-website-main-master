# Generated by Django 5.0.1 on 2024-03-23 11:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_review_author_review_date_created'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
    ]
