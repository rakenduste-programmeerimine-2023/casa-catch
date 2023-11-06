FROM node:20.8.1

WORKDIR /app

COPY . /app

RUN npm install

RUN chmod +x /app/start-server.sh

EXPOSE 8080

CMD ["sh", "/app/start-server.sh"]