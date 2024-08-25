FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

# RUN npm i -g pm2

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

RUN npm i -g pm2

EXPOSE 3008

CMD [ "pm2-runtime","start", "npm", "--name", "myfront", "--","run", "start" ]
