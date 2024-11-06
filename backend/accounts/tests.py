from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User

class AuthenticationTests(APITestCase):

    def test_signup(self):
        """
        Test that a user can sign up with an email and password.
        """
        url = reverse('signup')
        data = {
            "email": "testuser@example.com",
            "password": "TestPassword123"
        }
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


        user_exists = User.objects.filter(email="testuser@example.com").exists()
        self.assertTrue(user_exists)

    def test_login_with_correct_credentials(self):
        """
        Test that a user can log in with correct email and password and receive tokens.
        """
        user = User.objects.create_user(
            username="testuser@example.com",  
            email="testuser@example.com",
            password="TestPassword123"
        )
        
        url = reverse('login')
        data = {
            "email": "testuser@example.com",
            "password": "TestPassword123"
        }
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

    def test_login_with_incorrect_credentials(self):
        """
        Test that login fails with incorrect email or password.
        """

        User.objects.create_user(
            username="testuser@example.com",  
            email="testuser@example.com",
            password="TestPassword123"
        )

        url = reverse('login')
        data = {
            "email": "testuser@example.com",
            "password": "WrongPassword123"
        }
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

        self.assertEqual(response.data['detail'], "Invalid credentials")
