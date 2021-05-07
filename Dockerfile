FROM node:12.16.1-alpine3.9 as build

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn 

COPY . /app

RUN yarn build

FROM build as dev

ENTRYPOINT ["yarn", "start']

FROM nginx:1.17.8-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]



