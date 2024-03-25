#docker run -itd -p 3000:3000 -v ${PWD}/app:/app node:21.6.2-alpine3.18
#docker container exec -it コンテナ名 sh
#npx create-react-app app

FROM node:20.11.1-alpine3.18

WORKDIR /backend
RUN npm install -g express
RUN npm install -g nodemon
RUN npm install -g cors
RUN npm install -g mysql2

WORKDIR /app
RUN npm install -g @mui/material @emotion/react @emotion/styled

# COPY /app/ .

# VOLUME [ "./app/:/app/" ]

# CMD ["npm", "start"]

