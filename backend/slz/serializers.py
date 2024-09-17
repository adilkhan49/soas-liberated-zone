from rest_framework import serializers
from .models import Post, Statement

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post 
        fields = ('pk', 'title','body','author','created_on','last_modified')


class StatementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Statement 
        fields = ('pk', 'title','body','release_date','created_on','last_modified')