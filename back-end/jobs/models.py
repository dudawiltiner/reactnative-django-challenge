from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=255)
    link = models.URLField()
    tags = models.CharField(max_length=255)
    description = models.TextField()
    publication_date = models.DateField()
    category = models.CharField(max_length=255)
