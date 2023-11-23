from django.urls import path
from . import views

urlpatterns = [
    path('bj/', views.test)
]