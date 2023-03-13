FROM node:18-alpine3.17
WORKDIR /app
EXPOSE 4000

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD ["npm", "start"]