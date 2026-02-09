FROM node     

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=qwerty

WORKDIR /Docker_testapp

COPY . .

CMD ["node", "server.js"]