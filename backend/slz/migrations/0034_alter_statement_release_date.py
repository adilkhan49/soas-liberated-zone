# Generated by Django 5.1 on 2024-12-02 02:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('slz', '0033_statement_is_video_alter_statement_release_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='statement',
            name='release_date',
            field=models.DateField(),
        ),
    ]
