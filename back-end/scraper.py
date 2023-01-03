import requests
import time
from parsel import Selector
import json

# Fetch para coletar os dados
def fetch(url):
  try:
    response = requests.get(url, timeout=3)
    response.raise_for_status()
    return response.text
  except (requests.ReadTimeout, requests.exceptions.HTTPError):
    return None
  finally:
    time.sleep(1)

def scrape_jobs(html_content):
  selector = Selector(text=html_content)
  list_oport = selector.css(
    "#__next > div.css-zf0iqh > main > div > section > article"
  ).getall()
  return list_oport


def job_characteristics(job, category):
  selector = Selector(text=job)
  link = "https://www.getvagas.com.br" + selector.css("article > a::attr(href)").get()
  title = selector.css("article > a > div > header::text").get()
  publication_date =  selector.css("time.chakra-text::attr(datetime)").get()
  tags = ', '.join(selector.css("article > a > div > footer > span::text").getall())
  description = selector.css("article > a > div > div.css-1ybavqs > span > span > span > p::text").get()

  json_jobs = {
    "title": title,
    "link": link,
    "tags": tags if tags != "" else "nenhuma",
    "description": description,
    "publication_date": publication_date,
    "category": category
  }

  return json_jobs

def list_jobs_by_category(url, category):
  html_content = fetch(url + category)
  list_html = scrape_jobs(html_content)
  
  list_jobs = [job_characteristics(item, category) for item in list_html]
  
  return list_jobs

def list_jobs(url):
  categories = ["frontend", "backend", "react", "java"]

  list_all_jobs = []

  for category in categories: 
    list_jobs =  list_jobs_by_category(url, category)
    list_all_jobs = list_all_jobs + list_jobs

  return list_all_jobs

def save_jobs():
  payload = list_jobs("https://getvagas.com.br/vagas/")
  headers = {'Content-Type': 'application/json', 'Accept':'application/json'}
  response = requests.post("<COLE O LINK AQUI>/api/jobs/", json={"jobs": payload}, headers=headers)

  return response.content

