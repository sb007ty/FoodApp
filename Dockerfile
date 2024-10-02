#node block
FROM node:18-alpine as nodework

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . /app 

RUN npm run build

#nginx block

FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=nodework /app/build . 

ENTRYPOINT ["nginx", "-g", "daemon off;"]


