from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'password'] 

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['email']  
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
