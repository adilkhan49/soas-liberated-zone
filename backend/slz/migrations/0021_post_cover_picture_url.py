# Generated by Django 5.1 on 2024-11-08 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('slz', '0020_post_is_anonymous_post_release_date_post_sequence'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='cover_picture_url',
            field=models.TextField(null=True),
        ),
    ]
