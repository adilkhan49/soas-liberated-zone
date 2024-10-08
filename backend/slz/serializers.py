from rest_framework import serializers
from .models import Post, Statement, Event, Subscriber

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post 
        fields = ('pk', 'title','body','author','is_approved','created_on','last_modified')


class StatementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Statement 
        fields = ('pk', 'title','body','release_date','created_on','last_modified')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('pk','title','allDay','start_date','start_time','end_date','end_time')

class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = ('pk','email')