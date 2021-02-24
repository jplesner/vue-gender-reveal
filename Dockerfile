# build web app
FROM node:lts-alpine as web-stage
WORKDIR /app
COPY ./website/package*.json ./
RUN npm install
COPY ./website .
RUN npm run build

# build api and serve
FROM node:lts-alpine as api-stage
WORKDIR /app
COPY ./api/package*.json ./
RUN npm install
COPY ./api .
COPY --from=web-stage app/dist ./dist
EXPOSE 8081
CMD ["npm", "run", "start"]