FROM node:18-alpine3.17
WORKDIR /app
EXPOSE 9000

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD ["node", "index.js"]
