# Generated by Django 5.1 on 2024-12-09 17:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('slz', '0037_calltoaction'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='is_pdf',
            new_name='is_link',
        ),
    ]
