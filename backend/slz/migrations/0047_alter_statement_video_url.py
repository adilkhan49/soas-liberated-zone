# Generated by Django 5.1 on 2025-01-21 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('slz', '0046_signup_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='statement',
            name='video_url',
            field=models.TextField(blank=True, null=True),
        ),
    ]
