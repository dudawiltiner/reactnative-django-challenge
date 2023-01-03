from rest_framework import viewsets, generics, status
from .models import Job
from .serializers import JobSerializer
from rest_framework.response import Response

class JobViewSet(viewsets.ModelViewSet):
  queryset = Job.objects.all()
  serializer_class = JobSerializer
  
  def create(self, request, *args, **kwargs):
    data = request.data.get('jobs', [])
    serializer = self.get_serializer(data=data, many=True)
    serializer.is_valid(raise_exception=True)
    self.perform_create(serializer)
    headers = self.get_success_headers(serializer.data)
    return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
