from django.contrib import admin
from .models import Event, Statement, Subscriber, TimelineEvent, CarouselImage, Post, GalleryImage, CallToAction, SignUp, Demand
import csv
from django.http import HttpResponse
from datetime import datetime
from django.db.models import F

def get_timestamp():
    return datetime.strftime(datetime.now(),'%Y%m%d%H%M%S')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['start_date','title',]
    ordering = ['start_date',]

@admin.register(Statement)
class StatementAdmin(admin.ModelAdmin):
    list_display = ['title','release_date']
    ordering = ['-release_date']

@admin.register(Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
    list_display = ['email']
    actions = ["export_as_csv"]
    def export_as_csv(self, request, queryset):

        field_names = ['email']

        response = HttpResponse(content_type='text/csv')
        ts = get_timestamp()
        response['Content-Disposition'] = f'attachment; filename=Subscriber List {ts}.csv'
        writer = csv.writer(response)

        writer.writerow(field_names)
        for obj in queryset:
            row = writer.writerow([getattr(obj, field) for field in field_names])

        return response
    
    export_as_csv.short_description = "Export Selected"

@admin.register(TimelineEvent)
class TimelineEventAdmin(admin.ModelAdmin):
    list_display = ['timeline_date','title']
    ordering = ['timeline_date','title']

@admin.register(CarouselImage)
class CarouselImageAdmin(admin.ModelAdmin):
    list_display = ['title','sequence',]
    ordering = ['sequence']

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title','release_date','author','sequence','is_approved','is_anonymous','is_link']
    list_editable = ['sequence','is_approved']
    ordering = [F('sequence').asc(nulls_last=True),'-release_date']

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['pk','title','sequence','credit_to','release_date','exclude_date','exclude_month']
    list_editable = ['sequence','release_date','exclude_date','exclude_month']
    ordering = [F('sequence').asc(nulls_last=True),'-release_date']

@admin.register(CallToAction)
class CallToActionAdmin(admin.ModelAdmin):
    list_display = ['title','release_date','is_link']
    ordering = ['-release_date']

@admin.register(SignUp)
class SignUpAdmin(admin.ModelAdmin):
    list_display = ['name','email','affiliation','university']
    ordering = ['-created_on']
    actions = ["export_as_csv"]
    def export_as_csv(self, request, queryset):

        field_names = ['name','email','affiliation','university','message']

        response = HttpResponse(content_type='text/csv')
        ts = get_timestamp()
        response['Content-Disposition'] = f'attachment; filename=Sign Up List {ts}.csv'
        writer = csv.writer(response)

        writer.writerow(field_names)
        for obj in queryset:
            row = writer.writerow([getattr(obj, field) for field in field_names])

        return response
    
    export_as_csv.short_description = "Export Selected"

@admin.register(Demand)
class DemandsAdmin(admin.ModelAdmin):
    list_display = ['pk','sequence','highlighted_words','rest_of_text']
    list_editable = ['sequence']
    ordering = ['sequence']
