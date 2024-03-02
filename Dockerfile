#docker run -itd -p 3000:3000 -v ${PWD}/app:/app node:21.6.2-alpine3.18
#docker container exec -it コンテナ名 sh
#npx create-react-app app

FROM node:21.6.2-alpine3.18

WORKDIR /app

# RUN npx create-react-app .

RUN npm install @mui/material @emotion/react @emotion/styled

# COPY /app/ .

# VOLUME [ "./app/:/app/" ]

# CMD ["npm", "start"]

