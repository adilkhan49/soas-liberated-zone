# Generated by Django 5.1 on 2024-11-02 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('slz', '0017_carouselimage_created_on_carouselimage_sequence'),
    ]

    operations = [
        migrations.AddField(
            model_name='timelineevent',
            name='exlude_date',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='timelineevent',
            name='exlude_month',
            field=models.BooleanField(default=False),
        ),
    ]
