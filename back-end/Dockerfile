# LAYER I - Definindo qual a nossa imagem base
FROM python:3.8-alpine

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /api

COPY requirements.txt /api/

RUN pip install -r requirements.txt

CMD USE_NGROK=True python manage.py runserver 0.0.0.0:3001
# source: https://github.com/docker/awesome-compose/tree/master/official-documentation-samples/django/