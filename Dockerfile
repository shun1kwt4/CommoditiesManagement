FROM node:20.11.1-alpine3.18

WORKDIR /app

RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install express

