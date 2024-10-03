from .models import Event
import django_filters

class EventFilter(django_filters.FilterSet):
    class Meta:
        model = Event
        fields = ['start_date']