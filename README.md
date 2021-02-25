# vue-gender-reveal

## Overview 
Some friends of mine wanted to do a fun, covid-era, gender reveal and asked me to make them a web app for the occasion. They knew exactly what they wanted, so I take no credit/blame for the design.

I hacked this together in a pretty short amount of time, using the following:
* **Node** Server and API
* **Vuejs** Frontend
* **Postgres** Database
* **Sequelize** migrations and ORM
* **Docker** containerization

Enjoy.

*Stock photos from: https://www.instagram.com/rodnae.prod/*

## Prerequisites
* Docker Desktop

## Dev project setup
#### The usual...
```
docker-compose up -d
```
By default, the frontend will be available at localhost:8080. Give it a few seconds the first time.

#### To teardown...
```
docker-compose down
```

### Compile and minify for production
Build image from Dockerfile in project root.
