# Generated by Django 5.1 on 2024-10-27 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('slz', '0015_timelineevent'),
    ]

    operations = [
        migrations.CreateModel(
            name='CarouselImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('url', models.TextField()),
            ],
        ),
    ]
