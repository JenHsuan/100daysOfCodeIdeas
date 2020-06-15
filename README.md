# Daily Learning (The final project for CS50 web)

## Description
* The target of Django + Next.js + TS project is to create a learning boost. This site collects the articles I wrote before and I want to provide a service for users to learn programming easier.

## Requirements
* Your web application must be sufficiently distinct from the other projects in this course, and more complex than those.
* Your web application must utilize at least two of Python, JavaScript, and SQL.
* Your web application must be mobile-responsive.

## Technical stack
### Backend
* Django
* Django REST Framework
* Django JWT
* python-social-auth
* BeatifulSoup4
* requests
### Database
* PostgreSQL
### Frontend
* Next.js
* ReactJS
* React hooks
* Redux
* Redux hooks
* TypeScript
* Bootstrap
* React-Bootstrap
* react-facebook-login
* react-paginate
* concurrently
* SASS
* CSS grid
### CI
* Travis-CI
### Testing
* Django unit test
* Postman

## Commands
* PosrgerSQL Migration
```
python manage.py makemigrations
python manage.py migrate
```

* concurrently
```
npx concurrently "npm rum build" "sass --watch src/scss:src/css"
```
* SCSS
```
sass --watch src/scss:src/css
```


## References
### Test
* [Set global variables on Postman](https://learning.postman.com/docs/postman/scripts/test-examples/)

### Django
* [Django_Social_Login_Tutorial](https://github.com/twtrubiks/django_social_login_tutorial)
* [how to catch the MultipleObjectsReturned error in django](https://stackoverflow.com/questions/32172934/how-to-catch-the-multipleobjectsreturned-error-in-django)
* [解决“The STATICFILES_DIRS setting should not contain the STATIC_ROOT setting”](https://blog.csdn.net/lezeqe/article/details/95026726)
* [Managing static files (e.g. images, JavaScript, CSS)](https://docs.djangoproject.com/en/3.0/howto/static-files/)
* [How can I enable CORS on Django REST Framework](https://stackoverflow.com/questions/35760943/how-can-i-enable-cors-on-django-rest-framework)
* [Django Tutorial for Programmers: 4. 執行專案](https://ithelp.ithome.com.tw/articles/10157659)
* [Django, get scheme (http or https), pre request.scheme implementation](https://stackoverflow.com/questions/36817625/django-get-scheme-http-or-https-pre-request-scheme-implementation)
* [Django status code](https://www.django-rest-framework.org/api-guide/status-codes/)
* [Chaining multiple filter() in Django, is this a bug?](https://stackoverflow.com/questions/8164675/chaining-multiple-filter-in-django-is-this-a-bug)

### Redux
* [Example with Typescript, react-redux, and redux-thunk](https://github.com/reduxjs/redux-thunk/issues/213)
* [Actions must be plain objects. Use custom middleware for async actions.](https://github.com/reduxjs/redux-thunk/issues/146)
* [How to await a useDispatch value in React?](https://stackoverflow.com/questions/58825977/how-to-await-a-usedispatch-value-in-react)

### ReactJS HOC
* [React.js: Higher-Order Components (HOC)](https://cythilya.github.io/2018/05/20/react-hoc/?fbclid=IwAR0Gm1QWQ72CBEIdMII7rSoqvbHLQsIPYfGdO8y90_OlD24azemdrNT-nN8)

### Next.js
* [Next.js - import css file does not work](https://stackoverflow.com/questions/50149729/next-js-import-css-file-does-not-work)
* [Next.js + CSS](https://github.com/zeit/next-plugins/tree/master/packages/next-css)
* [Next.js 配置接口跨域代理转发](https://www.jianshu.com/p/160793f57802)
* [Question: why does the init action @@redux/INIT is being twice?](https://github.com/reduxjs/redux/issues/382)

### OAuth2 [Backend]: connect Django to Facebook
* [Simple Facebook social Login using Django Rest Framework](https://medium.com/@katherinekimetto/simple-facebook-social-login-using-django-rest-framework-e2ac10266be1)
* [SocialLoginView](https://pastebin.com/08iLNCJc)
* [Django Authentication With Facebook, Instagram and LinkedIn](https://www.digitalocean.com/community/tutorials/django-authentication-with-facebook-instagram-and-linkedin)
* [使用django-rest-framework-jwt及python-social-auth讓使用者用Facebook帳號登入](https://yichen0831.wordpress.com/2014/08/14/%E4%BD%BF%E7%94%A8django-rest-framework-jwt%E5%8F%8Apython-social-auth%E8%AE%93%E4%BD%BF%E7%94%A8%E8%80%85%E7%94%A8facebook%E5%B8%B3%E8%99%9F%E7%99%BB%E5%85%A5/)
* [簡單方法：python-social-auth](https://riptutorial.com/zh-TW/django/example/16679/%E7%B0%A1%E5%96%AE%E6%96%B9%E6%B3%95-python-social-auth) 

### OAuth2 [Frontend]: connect ReactJS to Facebook
* [Login with Facebook and Google in reactjs](https://medium.com/recraftrelic/login-with-facebook-and-google-in-reactjs-990d818d5dab)
* [react-facebook-login](https://www.npmjs.com/package/react-facebook-login)

### OAuth2 [Frontend]: connect ReactJS to Google
* [React Google Login](https://www.npmjs.com/package/react-google-login)
* [[教學] Google OAuth 2.0 申請與使用指南](https://xenby.com/b/245-%E6%95%99%E5%AD%B8-google-oauth-2-0-%E7%94%B3%E8%AB%8B%E8%88%87%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97)

### OAuth2 [Frontend]: connect ReactJS to Github
* [Day 23：實作 OAuth 來使用 Github GraphQL API](https://ithelp.ithome.com.tw/articles/10188595)

### OAuth2 [Backend]: connect Django to Github
* [Day30 : Django 第三方登入 - 以Github為例](https://ithelp.ithome.com.tw/articles/10206389)
* [使用social_django进行github第三方登陆](https://www.cnblogs.com/wcleonard/p/10977093.html)
* [Authorizing OAuth Apps](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)

### JWT
* [React Authentication: How to Store JWT in a Cookie](https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81)
* [Django REST framework 之JWT认证](https://www.cnblogs.com/freely/p/10328011.html)

### Front-end design
* [20 Creative Search Bar Design Inspirations with HTML/CSS/ Bootstrap](https://www.mockplus.com/blog/post/search-bar-design)