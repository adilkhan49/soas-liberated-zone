from django.urls import re_path
from slz import views

urlpatterns = [
    re_path(r'posts/$', views.post_list),
    re_path(r'posts/([0-9]+)$', views.post_detail),   
    re_path(r'statement/$', views.statement_list), 
    re_path(r'statement/([0-9]+)$', views.statement_detail),    
]
