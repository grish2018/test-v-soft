# Используйте официальный образ Node.js
FROM node:14

# Установите рабочий каталог в контейнере
WORKDIR /usr/src/app

# Скопируйте файлы package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте все файлы проекта
COPY . .

# Определите порт, который будет прослушивать приложение
EXPOSE 3000

# Запустите сервер
CMD ["node", "index.js"]
