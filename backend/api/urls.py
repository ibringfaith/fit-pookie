from django.urls import path
from . import views

urlpatterns = [
    path("clothes/", views.ClothingListCreate.as_view(), name="clothing-list"),
    path("clothes/delete/<int:pk>/", views.ClothingDelete.as_view(), name="delete-clothing"),
]