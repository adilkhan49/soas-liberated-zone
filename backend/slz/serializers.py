from rest_framework import serializers
from .models import Post, Statement, Event, Subscriber, TimelineEvent, CarouselImage, GalleryImage, CallToAction

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post 
        fields = ('pk','author', 'title','body','link','cover_picture_url','is_approved','is_anonymous','is_link','sequence','release_date','created_on','last_modified',)

class StatementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Statement 
        fields = ('pk', 'title','body','release_date','video_url','created_on','last_modified')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('pk','title','description','allDay','start_date','start_time','end_date','end_time')

class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = ('pk','email')

class TimelineEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimelineEvent
        fields = ('pk','timeline_date','title','exclude_date','exclude_month',)

class CarouselImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarouselImage
        fields = ('pk','title','url','sequence')

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ('pk','title','url','sequence','credit_to', 'release_date','exclude_date','exclude_month')

class CallToActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CallToAction
        fields = ('pk', 'title','body','link','is_link','release_date','created_on','last_modified')
