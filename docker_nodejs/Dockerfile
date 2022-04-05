FROM ubuntu:18.04
RUN apt-get update && apt-get install -y apt-utils unzip curl git ssh gnupg build-essential
RUN curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install -y nodejs
RUN mkdir -p /opt/deploy
WORKDIR /opt/deploy
ADD app.js .
RUN npm install express
EXPOSE 3000
CMD ["node" , "app.js"]
