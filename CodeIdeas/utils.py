from apiServer.serializers import UserSerializer
from bs4 import BeautifulSoup as BS
import requests
import os
from apiServer.models import Article

def my_jwt_response_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }

def parse_articles(type):
    if type == 'porfolio':
        data = getPorfolios()
        for article in data:
            try:
                obj = Article.objects.get(url = article['url'])
            except Article.DoesNotExist:
                Article.objects.get_or_create(
                    title = article['title'],
                    subtitle = article['subtitle'],
                    image = article['image'],
                    url = article['url'],
                    name = article['name'],
                    time = article['time'],
                    readtime = article['readtime'],
                    category = -2,
                    description = '')

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
        'title': title.select('a')[0].text,
        'image': title.select('a')[4]['data-preload-image'],
        'time': title.select('time')[0]['datetime'].split('T')[0],
        'url': os.getenv("DEV_BASE_URL") + title.select('a')[3]['href'],
        'tags': [title.select('.crayons-tag')[0]["href"].split('/')[2],
                 title.select('.crayons-tag')[1]["href"].split('/')[2],
                 title.select('.crayons-tag')[2]["href"].split('/')[2],
                 title.select('.crayons-tag')[3]["href"].split('/')[2]] if title.select('.crayons-tag') else [],
        'name': title.select('a')[2].text.split(' ')[14] + ' ' + title.select('a')[2].text.split(' ')[15].split('\n')[0],
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

def getPorfolios():
    data = []
    data.append({
        'title': 'Sean HS \'s Web Resume',
        'subtitle': 'It\'s a resume built with JavaScript, HTML, and SASS.',
        'image': "https://jenhsuan.github.io/ALayman/views/images/resume2020.png",
        'time': '2020-01-12T00:00:00Z',
        'url': 'https://jenhsuan.github.io/ALayman/cover.html',
        'name': 'Sean HS',
        'readtime': '10 min read'})
    data.append({
        'title': 'React Shopping cart template',
        'subtitle': 'It\'s a shopping cat tmeplate built with React, Django, and PostgreSQL.',
        'image': "https://jenhsuan.github.io/ALayman/views/images/shoppincart.png",
        'time': '2020-02-20T00:00:00Z',
        'url': 'https://shoppingcart-react.herokuapp.com/',
        'name': 'Sean HS',
        'readtime': '10 min read'})
    data.append({
        'title': 'AnonymousChat',
        'subtitle': 'The real-time communication application based on Socket.io.',
        'image': "https://jenhsuan.github.io/ALayman/views/images/chat.png",
        'time': '2020-04-15T00:00:00Z',
        'url': 'https://anonymous-chat2020.herokuapp.com/',
        'name': 'Sean HS',
        'readtime': '10 min read'})
    data.append({
        'title': 'Book Discovery',
        'subtitle': 'The book discovery service with Flask and PostgreSQL.',
        'image': "https://jenhsuan.github.io/ALayman/views/images/bookdiscovery.png",
        'time': '2020-06-18T00:00:00Z',
        'url': 'https://book-manager2020.herokuapp.com/',
        'name': 'Sean HS',
        'readtime': '10 min read'})
    data.append({
        'title': 'Daily Learning APP',
        'subtitle': 'It \'s a website built with Django, PostgreSQL, Next.js, React, Redux, and TypeScript and it provides learning materials',
        'image': "https://jenhsuan.github.io/ALayman/views/images/dailylearning.png",
        'time': '2020-10-01T00:00:00Z',
        'url': 'https://daily-learning.herokuapp.com/',
        'name': 'Sean HS',
        'readtime': '10 min read'})
    data.append({
        'title': 'Daily Learning Twitter bot',
        'subtitle': 'It \'s a Twitter bot built with Node.js and it provides daily news',
        'image': "https://miro.medium.com/max/2640/1*u_Svq97XA1cdcp6sXwMt3g.png",
        'time': '2020-09-01T00:00:00Z',
        'url': 'https://twitter.com/ALayman84368087',
        'name': 'Sean HS',
        'readtime': '3 min read'})
    data.append({
        'title': 'Markdown Clipboard Chrome extension',
        'subtitle': 'The plugin can improve the productivity and reduce the time to edit markdown syntax.',
        'image': "https://lh3.googleusercontent.com/S1jste5l93V2kziy_79CUSVwDlc2kM-ORDFe3tp2ajEQa2nDNkFoz08eEFdjmB3LB_rK7LiseJSVquMt0dCHJ0WBzpQ=w640-h400-e365-rj-sc0x00ffffff",
        'time': '2020-05-01T00:00:00Z',
        'url': 'https://chrome.google.com/webstore/detail/markdown-clipboard/ogoefibjphnddpjkpddnmlmecdmjbfce',
        'name': 'Sean HS',
        'readtime': '3 min read'})
    data.append({
        'title': 'npm package: create-nrs-web',
        'subtitle': 'It\'s a template based on create-next-app that contains default folders and files for building a new project. The stack of this template contains the following items.',
        'image': "https://miro.medium.com/max/2640/1*pEdkwWRPMtGc6_pnHzmDzw.png",
        'time': '2020-11-01T00:00:00Z',
        'url': 'https://www.npmjs.com/package/create-nrs-web',
        'name': 'Sean HS',
        'readtime': '3 min read'})
    data.append({
        'title': 'npm package: react-ui-gauge-component',
        'subtitle': 'A library that provides basic gauge styles and widgets to create gauges efficiently for React projects.',
        'image': "https://raw.githubusercontent.com/JenHsuan/react-gauge-component/master/demo/screen-shot.gif",
        'time': '2020-11-14T00:00:00Z',
        'url': 'https://www.npmjs.com/package/react-ui-gauge-component',
        'name': 'Sean HS',
        'readtime': '3 min read'})
    data.append({
        'title': 'npm package: use-react-monitor',
        'subtitle': 'A library that provides a hook for monitoring multipule endpoints with the specific interval.',
        'image': "https://raw.githubusercontent.com/JenHsuan/use-monitor-hook/master/demo/screen-shot.png",
        'time': '2020-10-21T00:00:00Z',
        'url': 'https://www.npmjs.com/package/use-react-monitor',
        'name': 'Sean HS',
        'readtime': '3 min read'})
    data.append({
        'title': 'Project forest',
        'subtitle': 'We planet many kind of planets, such as Taiwan Pine (二葉松), Taiwan Red Pine (五葉松), Black pine (黑松)...',
        'image': "https://jenhsuan.github.io/ALayman/views/images/projectForest.png",
        'time': '2017-01-02T00:00:00Z',
        'url': 'https://jenhsuan.github.io/projectForest/vrDemo.html',
        'name': 'Sean HS',
        'readtime': '3 min read'})

    return data
