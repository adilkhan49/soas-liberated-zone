from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

from django.core.mail import BadHeaderError, send_mail
from django.http import HttpResponse, HttpResponseRedirect
from django.conf import settings

from django.db.models import Value
from django.db.models.functions import Coalesce
from .models import Post, Statement, Event, Subscriber, TimelineEvent, CarouselImage, GalleryImage
from .serializers import PostSerializer, StatementSerializer, EventSerializer, SubscriberSerializer, TimelineEventSerializer, CarouselImageSerializer, GalleryImageSerializer
from .filters import EventFilter

import json

from datetime import date


@api_view(['GET', 'POST'])
def post_list(request):

    if request.method == 'GET':
        data = Post.objects.all().annotate(sequence_null=
    Coalesce('sequence', Value(999999))).order_by('sequence_null','-release_date')
        serializer = PostSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT', 'DELETE'])
@permission_classes([IsAuthenticatedOrReadOnly])
def post_detail(request, pk):

    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PostSerializer(post, context={'request': request}, many=False)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = PostSerializer(post, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def statement_list(request):

    if request.method == 'GET':
        data = Statement.objects.all().order_by('-release_date')
        serializer = StatementSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StatementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT', 'DELETE'])
@permission_classes([IsAuthenticatedOrReadOnly])
def statement_detail(request, pk):

    try:
        statement = Statement.objects.get(pk=pk)
    except Statement.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = StatementSerializer(statement, context={'request': request}, many=False)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = StatementSerializer(statement, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        statement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def event_list(request):

    if request.method == 'GET':    
        data = Event.objects.all().order_by('start_date','start_time')
        filtered_data = EventFilter(request.GET, queryset=data)
        filtered_qs = filtered_data.qs
        serializer = EventSerializer(filtered_qs, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def upcoming_event_list(request):

    if request.method == 'GET':    
        data = Event.objects.filter(start_date__gt=date.today()).order_by('start_date','start_time')
        filtered_data = EventFilter(request.GET, queryset=data)
        filtered_qs = filtered_data.qs
        serializer = EventSerializer(filtered_qs, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET','PUT', 'DELETE'])
@permission_classes([IsAuthenticatedOrReadOnly])
def event_detail(request, pk):

    try:
        event = Event.objects.get(pk=pk)
    except Event.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EventSerializer(event, context={'request': request}, many=False)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = EventSerializer(event, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(['POST'])
def subscribe(request):
    if request.method == 'POST':
        serializer = SubscriberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def subscribe_list(request):
    if request.method == 'GET':
        data = Subscriber.objects.all().order_by('-created_on')
        serializer = SubscriberSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def timeline_event_list(request):

    if request.method == 'GET':
        data = TimelineEvent.objects.all().order_by('timeline_date')
        serializer = TimelineEventSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TimelineEvent(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def carousel_image_list(request):

    if request.method == 'GET':
        data = CarouselImage.objects.all().order_by('sequence')
        serializer = CarouselImageSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CarouselImage(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def gallery_image_list(request):

    if request.method == 'GET':
        data = GalleryImage.objects.all().annotate(sequence_null=
    Coalesce('sequence', Value(999999))).order_by('sequence_null','-release_date')
        serializer = GalleryImageSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GalleryImage(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def send_email(request):
    print('sending...')
    subject = "Website Sign Up"
    message_dict = json.loads(request.body.decode())
    message = '\n'.join([k + ':\n' + str(v) + '\n' for (k,v) in message_dict.items()])
    if message:
        try:
            send_mail(subject, message, settings.EMAIL_HOST_USER, [settings.EMAIL_TO])
        except BadHeaderError:
            return HttpResponse("Invalid header found.")
        return HttpResponse("Ok`")
    else:
        return HttpResponse("Make sure all fields are entered and valid.")