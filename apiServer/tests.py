from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework_jwt.settings import api_settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.test import APIClient
from django.urls import reverse

# Create your tests here.
url = reverse('users')
verification_url = reverse('current_user')
token_url = reverse('token-auth')
username = 'user@foo.com' 
password = 'pass'

def create_user(self, url, username, password):
    return self.client.post(url, {'username':username, 'password':password}, format='json')
        
class JwtTests(APITestCase):

    #/users/
    def test_create_member(self):
        resp = create_user(self, url, username, password)
        self.assertEqual(resp.status_code, status.HTTP_201_CREATED)
        self.assertTrue('token' in resp.data)
    
    #/current_user
    def test_current_user(self):
        resp = create_user(self, url, username, password)
        token = resp.data['token']
    
        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token)
        resp = self.client.get(verification_url)
        self.assertEqual(resp.status_code, status.HTTP_200_OK)

    #/token-auth
    def test_get_token(self):
        resp = create_user(self, url, username, password)
        token = resp.data['token']

        token_resp = self.client.post(token_url, {'username':'user@foo.com', 'password':'pass'}, format='json')
        token_verify = token_resp.data['token']
        self.assertEqual(token, token_verify)
        self.assertEqual(token_resp.status_code, status.HTTP_200_OK)

    #/api/users
    def test_get_api_users(self):
        resp_token = create_user(self, url, username, password)
        token = resp_token.data['token']
        
        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token)
        resp1 = self.client.get('/api/user', format='json')
        self.assertEqual(resp1.status_code, status.HTTP_301_MOVED_PERMANENTLY)

    #/api/profile
    def test_get_api_profile(self):
        resp_token = create_user(self, url, username, password)
        token = resp_token.data['token']
        
        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token)
        resp1 = self.client.get('/api/profile', format='json')
        self.assertEqual(resp1.status_code, status.HTTP_301_MOVED_PERMANENTLY)

    #/api/articles
    def test_get_api_articles(self):
        resp_token = create_user(self, url, username, password)
        token = resp_token.data['token']
        
        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token)
        resp1 = self.client.get('/api/articles', format='json')
        self.assertEqual(resp1.status_code, status.HTTP_301_MOVED_PERMANENTLY)
        