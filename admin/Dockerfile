FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

RUN npm install -g http-server
CMD ["http-server", "dist", "-p", "8080"]
EXPOSE 8080