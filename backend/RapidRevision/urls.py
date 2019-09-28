from django.urls import path

from . import views

urlpatterns = [
    path('', views.transcript, name='transcript'),
    path('summary/', views.summary, name='summary'),
    path('keywords/', views.keywords, name='keywords'),


]