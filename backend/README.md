# Django Authentication API

A Django API for user registration, login, and JWT-based authentication.

## Table of Contents
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Setup

### Prerequisites

- Python 3.x
- Django 5.1
- Django REST Framework
- Django Simple JWT

### Installation

1. **Clone the repository:**
   ```bash
   git https://github.com/Yusasive/login-accessment.git
   cd login-accessment/backend

2. **Set up a virtual environment:**


*python -m venv venv*
*source venv/bin/activate*  
# On Windows, use `venv\Scripts\activate`



3. **Install dependencies:**


*pip install -r requirements.txt*


4. **Set up the database:**

Open backend/settings.py and configure the database if needed.
Run migrations:


**python manage.py migrate*

6. **Create a superuser (for accessing Django admin):**


*python manage.py createsuperuser*


**Start the development server:**

*python manage.py runserver*
Usage
Registering and Logging in Users
The API provides endpoints to register and log in users, utilizing JWT tokens for authentication.

7. **Register:** Send a POST request with username and password to create a new user.
Login: Send a POST request with username and password to receive a JWT access and refresh token.
Accessing Protected Endpoints: Use the access token in the Authorization header for endpoints that require authentication.
API Endpoints
http://127.0.0.1:8000/api/



## Endpoints
1. Register User
URL: /api/signup/
Method: POST
Request Body:
json

`{ "email": "testuser@example.com", "password": "TestPassword123" }`


Response:
201 Created:


json

`{ "email": "testuser@example.com", "password": "TestPassword123" }`

400 Bad Request (if the username already exists or fields are missing):
json

`{
  "error": "Username and password are required."
}`


2. Login User
URL: /api/login/
Method: POST
Request Body:
json
`{ "email": "testuser@example.com", "password": "TestPassword123" }`
Response:
200 OK:
json

`{
  "refresh": "<refresh_token>",
  "access": "<access_token>"
}`

401 Unauthorized:
json

`{
  "error": "Invalid credentials"
}`


3. Protected Endpoint (Example)
URL: /api/protected/
Method: GET
Headers:
Authorization: Bearer <access_token>
Response:
200 OK:
json

`{
  "message": "You have access to this protected view!"
}`


401 Unauthorized (if token is missing or invalid):
json

`{
  "detail": "Authentication credentials were not provided."
}`


# Notes
Use the refresh token to obtain a new access token when the access token expires.
JWT tokens should be included in the Authorization header as Bearer <access_token>