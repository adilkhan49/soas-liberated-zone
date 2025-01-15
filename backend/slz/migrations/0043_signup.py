# Generated by Django 5.1 on 2025-01-12 01:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('slz', '0042_alter_calltoaction_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='SignUp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.TextField(unique=True)),
                ('name', models.CharField(max_length=255)),
                ('university', models.CharField(max_length=255)),
                ('affiliation', models.IntegerField(choices=[(1, 'Student'), (2, 'Staff'), (3, 'Other')])),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('last_modified', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
