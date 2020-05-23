from apiServer.serializers import UserSerializer
from bs4 import BeautifulSoup as BS
import requests
import os
from apiServer.models import Article, Order, Profile

dev_base_url = 'https://dev.to'    

def my_jwt_response_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }

def parse_articles(type):
    if type == 'devto':
        data = getDevArtcles()
        print(data)
        for article in data:
            try:
                obj = Article.objects.get(url = article['url'])
                print('already existed')
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
                print('already existed')
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
    print(dev_base_url +os.getenv("DEVTO_ACCOUNT"))
    soup = BS(''.join(r.text), 'html.parser')
    title_list = soup.select('.crayons-story__title')
    subtitle_list = soup.select('time')
    tags = soup.select('.crayons-story__tags')
    name = soup.select('.crayons-story__secondary')
    readtime = soup.select('small')

    for title in title_list:
        data.append({
            'title': title.text.split('\n')[2].split('        ')[1],
            'image': title.a["data-preload-image"]})
        
    i = 0
    for title in subtitle_list:
        data[i]['time'] = title['datetime'].split('T')[0]
        i = i + 1
        
    i = 0
    for title in title_list:
        data[i]['url'] = dev_base_url + title.a['href']
        i = i +1
        
    for i in range(0, len(tags)):
        tag_list = [tags[i].select('a')[0]["href"].split('/')[2], tags[i].select('a')[1]["href"].split('/')[2], tags[i].select('a')[2]["href"].split('/')[2], tags[i].select('a')[3]["href"].split('/')[2]]
        data[i]['tags'] = tag_list

    for i in range(0, len(name)):
        data[i]['name'] = name[i].text.split('       ') [2].split('\n')[0]

    for i in range(0, len(readtime)):
        data[i]['readtime'] = readtime[i].text.split('            ')[1].split('\n')[0]

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