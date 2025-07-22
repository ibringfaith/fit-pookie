from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Clothing(models.Model):
    type = models.CharField(max_length=20)
    date = models.DateTimeField(auto_now_add=True)
    item = models.ImageField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, elated_name="clothes") #default=None 

    def __str__(self):
        return self.type
