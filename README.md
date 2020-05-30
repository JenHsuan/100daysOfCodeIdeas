# Learning Booster (The final project for CS50 web)

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

## References
### Test
* [Set global variables on Postman](https://learning.postman.com/docs/postman/scripts/test-examples/)

### Python
* [how to catch the MultipleObjectsReturned error in django](https://stackoverflow.com/questions/32172934/how-to-catch-the-multipleobjectsreturned-error-in-django)
* [解决“The STATICFILES_DIRS setting should not contain the STATIC_ROOT setting”](https://blog.csdn.net/lezeqe/article/details/95026726)
* [Managing static files (e.g. images, JavaScript, CSS)](https://docs.djangoproject.com/en/3.0/howto/static-files/)
* [How can I enable CORS on Django REST Framework](https://stackoverflow.com/questions/35760943/how-can-i-enable-cors-on-django-rest-framework)

### Redux
* [Example with Typescript, react-redux, and redux-thunk](https://github.com/reduxjs/redux-thunk/issues/213)
* [Actions must be plain objects. Use custom middleware for async actions.](https://github.com/reduxjs/redux-thunk/issues/146)
* [How to await a useDispatch value in React?](https://stackoverflow.com/questions/58825977/how-to-await-a-usedispatch-value-in-react)

### Next.js
* [Next.js - import css file does not work](https://stackoverflow.com/questions/50149729/next-js-import-css-file-does-not-work)
* [Next.js + CSS](https://github.com/zeit/next-plugins/tree/master/packages/next-css)
* [Next.js 配置接口跨域代理转发](https://www.jianshu.com/p/160793f57802)
* [Question: why does the init action @@redux/INIT is being twice?](https://github.com/reduxjs/redux/issues/382)

### OAuth2 [Backend]: connect Django to Facebook
* [Simple Facebook social Login using Django Rest Framework](https://medium.com/@katherinekimetto/simple-facebook-social-login-using-django-rest-framework-e2ac10266be1)
* [SocialLoginView](https://pastebin.com/08iLNCJc)
* [Django Authentication With Facebook, Instagram and LinkedIn](https://www.digitalocean.com/community/tutorials/django-authentication-with-facebook-instagram-and-linkedin)

### OAuth2 [Frontend]: connect ReactJS to Facebook
* [react-facebook-login](https://www.npmjs.com/package/react-facebook-login)