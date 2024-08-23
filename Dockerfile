FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

RUN npm i -g pm2

COPY . .

RUN npm run build

# FROM nginx:stable-alpine

# COPY --from=build /app/.next /usr/share/nginx/html 

# COPY ./nginx/default.conf /ext/nginx/conf.d

EXPOSE 3008

CMD [ "pm2-runtime","start", "npm", "--name", "myfront", "--","run", "start" ]
