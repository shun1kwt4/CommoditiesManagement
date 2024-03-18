<<<<<<< HEAD
#docker run -itd -p 3000:3000 -v ${PWD}/app:/app node:21.6.2-alpine3.18
=======
#docker run -itd -p 3000:3000 -v ${PWD}/app:/app node:20.11.1-alpine3.18
>>>>>>> origin/kkuroki
#docker container exec -it コンテナ名 sh
#npx create-react-app app

FROM node:20.11.1-alpine3.18

<<<<<<< HEAD
WORKDIR /app

# RUN npx create-react-app .

RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install express
=======
# RUN npx create-react-app app

WORKDIR /app

RUN npm install @mui/material @emotion/react @emotion/styled
>>>>>>> origin/kkuroki

# COPY /app/ .

# VOLUME [ "./app/:/app/" ]

# CMD ["npm", "start"]

