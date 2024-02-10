FROM node:20.11.0-alpine3.18 as build

WORKDIR /usr/local/app

COPY package*.json .

RUN npm install

COPY ./ /usr/local/app/

RUN npm run build

# VOLUME [ "/app/node_modules" ]

# CMD [ "node", "server.js" ]

FROM nginx:stable-alpine

# COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/local/app/dist/browser /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
