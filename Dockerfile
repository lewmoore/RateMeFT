FROM node:7
WORKDIR /src
COPY package.json /app
RUN npm install
COPY . /src
CMD npm start
EXPOSE 8081
