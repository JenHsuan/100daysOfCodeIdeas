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

    def test_create_member(self):
        resp = create_user(self, url, username, password)
        self.assertEqual(resp.status_code, status.HTTP_201_CREATED)
        self.assertTrue('token' in resp.data)
        
    def test_current_user(self):
        resp = create_user(self, url, username, password)
        token = resp.data['token']
    
        #client = APIClient()
        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token)
        resp = self.client.get(verification_url)
        self.assertEqual(resp.status_code, status.HTTP_200_OK)

    def test_get_token(self):
        resp = create_user(self, url, username, password)
        token = resp.data['token']

        token_resp = self.client.post(token_url, {'username':'user@foo.com', 'password':'pass'}, format='json')
        token_verify = token_resp.data['token']
        self.assertEqual(token, token_verify)
        self.assertEqual(token_resp.status_code, status.HTTP_200_OK)