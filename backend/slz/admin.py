from django.contrib import admin
from .models import Event, Statement, Subscriber, TimelineEvent, CarouselImage
import csv
from django.http import HttpResponse
from datetime import datetime

def get_timestamp():
    return datetime.strftime(datetime.now(),'%Y%m%d%H%M%S')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['start_date','title',]
    ordering = ['start_date',]

@admin.register(Statement)
class StatementAdmin(admin.ModelAdmin):
    list_display = ['title']

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
    list_display = ['sequence','title']
    ordering = ['sequence']
