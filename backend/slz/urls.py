from django.urls import re_path
from slz import views

urlpatterns = [
    re_path(r'posts/$', views.post_list),
    re_path(r'posts/([0-9]+)$', views.post_detail),   
    re_path(r'statements/$', views.statement_list), 
    re_path(r'statements/([0-9]+)$', views.statement_detail),    
    re_path(r'^events/$', views.event_list),       
    re_path(r'^upcomingevents/$', views.upcoming_event_list),       
    re_path(r'events/([0-9]+)$', views.event_detail),    
    re_path(r'subscribe/$', views.subscribe),
    re_path(r'subscribers/$', views.subscribe_list),
    re_path(r'timeline/$', views.timeline_event_list),
    re_path(r'carouselimages/$', views.carousel_image_list),
    re_path(r'galleryimages/$', views.gallery_image_list),
    re_path(r'signups/$', views.signup_list),
    re_path(r'signup/$', views.signup),
    re_path(r'sendmail/$', views.send_email),
    re_path(r'callstoaction/$', views.call_to_action_list),
    re_path(r'callstoaction/([0-9]+)$', views.call_to_action_detail),    
    re_path(r'demands/$', views.demand_list),
    
]
