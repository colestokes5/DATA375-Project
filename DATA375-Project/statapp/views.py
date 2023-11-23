from django.shortcuts import render
from django.http import HttpResponse

def test(request):
    return render(request, "index.html")

def index(request):
    templates = "index.html"
    return render(request, templates)