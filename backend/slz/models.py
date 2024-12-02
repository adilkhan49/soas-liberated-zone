from django.db import models
from django.utils import timezone

from datetime import datetime
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    author = models.TextField(max_length=255,blank=True,null=True)
    is_approved = models.BooleanField(default=False)
    is_anonymous = models.BooleanField(default=False)
    is_pdf = models.BooleanField(default=False)
    sequence = models.IntegerField(unique=True,blank=True,null=True)
    release_date = models.DateField(default=datetime.now, blank=True,null=True)
    cover_picture_url = models.TextField(blank=True,null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

class Statement(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    release_date = models.DateField()
    video_url = models.TextField(unique=True,blank=True,null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

class Event(models.Model):
    title = models.TextField()
    description = models.TextField(blank=True, null=True)
    allDay = models.BooleanField()
    start_date = models.DateField()
    start_time = models.TimeField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    end_time = models.TimeField(blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

class Subscriber(models.Model):
    email = models.TextField(unique=True)
    created_on = models.DateTimeField(auto_now_add=True)

class TimelineEvent(models.Model):
    title = models.TextField()
    timeline_date = models.DateField()
    exclude_date = models.BooleanField(default=False)
    exclude_month = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)

class CarouselImage(models.Model):
    title = models.TextField()
    url = models.TextField()
    sequence = models.IntegerField(unique=True)
    created_on = models.DateTimeField(auto_now_add=True)

class GalleryImage(models.Model):
    title = models.TextField()
    url = models.TextField()
    sequence = models.IntegerField(unique=True,blank=True,null=True)
    release_date = models.DateField()
    exclude_date = models.BooleanField(default=False)
    exclude_month = models.BooleanField(default=False)
    credit_to = models.TextField(blank=True,null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)


