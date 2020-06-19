from apiServer.serializers import UserSerializer
from bs4 import BeautifulSoup as BS
import requests
import os
from apiServer.models import Article

dev_base_url = 'https://dev.to'    

def my_jwt_response_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }

def parse_articles(type):
    if type == 'devto':
        data = getDevArtcles()
        for article in data:
            try:
                obj = Article.objects.get(url = article['url'])
            except Article.DoesNotExist:
                Article.objects.get_or_create(
                    title = article['title'], 
                    subtitle = '', 
                    image = article['image'], 
                    url = article['url'], 
                    name = article['name'],
                    time = article['time'],
                    readtime = article['readtime'],
                    category = 0,
                    description = article['tags'])

    if type == 'medium':
        data = getMediumArtcles()
        for article in data:
            try:
                obj = Article.objects.get(title = article['title'])
            except Article.DoesNotExist:
                Article.objects.get_or_create(title = article['title'], 
                subtitle = article['subtitle'], 
                image = article['image'], 
                url = article['url'], 
                name = article['name'],
                time = article['time'],
                readtime = article['readtime'],
                category = 1,
                description = '')

def getDevArtcles():
    articles = []
    data = []

    r = requests.get(os.getenv("DEV_BASE_URL") + os.getenv("DEVTO_ACCOUNT"))
    soup = BS(''.join(r.text), 'html.parser')
    data = []
    title_list = soup.select('.crayons-story')
    for title in title_list:
        data.append({
        'title': title.select('a')[3].text.split('\n')[1].split('        ')[1],
        'image': title.select('a')[3]['data-preload-image'],
        'time': title.select('time')[0]['datetime'].split('T')[0],
        'url': title.select('a')[3]['href'],
        'tags': [title.select('.crayons-tag')[0]["href"].split('/')[2],
                 title.select('.crayons-tag')[1]["href"].split('/')[2],
                 title.select('.crayons-tag')[2]["href"].split('/')[2],
                 title.select('.crayons-tag')[3]["href"].split('/')[2]],
        'name': title.select('a')[1].text.split('       ')[2].split('\n')[0],
        'readtime': title.select('.crayons-story__save')[0].select('small')[0].text.split('            ')[1].split('\n')[0]})
    
    return data

def getMediumArtcles():
    data = []
    titles = []
    subtitles = []
    urls = []
    images = []
    names = []
    times=[]
    readtime=[]

    r = requests.get(os.getenv("BLOG_URL"))
    soup = BS(''.join(r.text), 'html.parser')
    title_list = soup.select('.u-letterSpacingTight')
    pic_list = soup.select('.u-lineHeightBase')
    name_list = soup.select('.ds-link')
    time_list = soup.select('time')
    readtime_list = soup.select('.readingTime')

    i=0
    while i < len(title_list):
        if i % 2 == 0:
            titles.append(title_list[i].text)
        else:
            subtitles.append(title_list[i].text)
        
        i += 1
    
    i=0
    while i < len(name_list):
        names.append(name_list[i].text)
        i+=1
    
    i=0
    while i < len(readtime_list):
        readtime.append(readtime_list[i]['title'])
        i+=1
    
    i=0
    while i < len(time_list):
        times.append(time_list[i]['datetime'].split('T')[0])
        i+=1

    i=0
    while i < len(pic_list):
        images.append(pic_list[i].select('a')[0].get('style').split('"')[1])
        urls.append(pic_list[i].select('a')[0].get('href'))
        i += 1

    i = 0
    while i < len(titles):
        data.append({
            'title':titles[i],
            'subtitle':subtitles[i],
            'url':urls[i],
            'image':images[i],
            'name':names[i],
            'time':times[i],
            'readtime':readtime[i]
        })
        i += 1
    
    return data