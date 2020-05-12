from django.http import HttpResponse
from django.shortcuts import render
from django.conf import settings
import os
import logging

index_file_path = os.path.join(settings.REACT_APP_DIR, 'out', 'index.html')

# Create your views here.
def index(request):
    return HttpResponse('Django API server')

def react(request):
    try:
        with open(index_file_path) as f:
            return HttpResponse(f.read())
    except FileNotFoundError:
        logging.exception('Production build of app not found')
