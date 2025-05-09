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
    body = models.TextField(blank=True,null=True)
    author = models.TextField(max_length=255,blank=True,null=True)
    link = models.TextField(blank=True,null=True)
    is_approved = models.BooleanField(default=False)
    is_anonymous = models.BooleanField(default=False)
    is_link = models.BooleanField(default=False)
    sequence = models.IntegerField(unique=True,blank=True,null=True)
    release_date = models.DateField(default=datetime.now, blank=True,null=True)
    cover_picture_url = models.TextField(blank=True,null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

class Statement(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    release_date = models.DateField()
    video_url = models.TextField(blank=True,null=True)
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
    link_text = models.TextField(blank=True, null=True)
    link_url = models.TextField(blank=True, null=True)
    location_text = models.TextField(blank=True, null=True)
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

class CallToAction(models.Model):
    title = models.CharField(max_length=1000)
    body = models.TextField(blank=True,null=True)
    link = models.TextField(blank=True,null=True)
    is_link = models.BooleanField(default=False)
    release_date = models.DateField()
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

class SignUp(models.Model):

    class Affiliation(models.TextChoices):
        Student = 'Student', 'Student'
        Staff = 'Staff', 'Staff'
        Other = 'Other', 'Other'

    email = models.TextField(unique=True)
    name = models.CharField(max_length=255)
    university = models.CharField(max_length=255,blank=True,null=True)
    affiliation = models.CharField(max_length=10,choices=Affiliation,blank=True,null=True)
    message = models.TextField(blank=True,null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

class Demand(models.Model):
    sequence = models.IntegerField(unique=True)
    highlighted_words = models.TextField(max_length=100)
    rest_of_text =models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
 
