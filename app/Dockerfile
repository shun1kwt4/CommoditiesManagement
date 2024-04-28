FROM node:20.11.1-alpine3.18

WORKDIR /app

COPY ./app/package.json .

RUN npm install
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install express

CMD [ "npm","start" ]