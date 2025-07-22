from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, ClothingSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Clothing

# Create your views here.
class ClothingListCreate(generics.ListCreateAPIView):
    serializer_class = ClothingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Clothing.objects.filter(author=user) # user can only view their own clothing

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class ClothingDelete(generics.DestroyAPIView):
    serializer_class = ClothingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Clothing.objects.filter(author=user) # user can only delete their own clothing

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all() # make sure to not create user that already exists
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
