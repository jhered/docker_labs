FROM node:10-alpine
RUN mkdir -p /opt/deploy
WORKDIR /opt/deploy
ADD app.js .
RUN npm install express
EXPOSE 3000
CMD ["node" , "app.js"]
