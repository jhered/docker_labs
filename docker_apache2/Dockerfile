FROM ubuntu:18.04
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install apache2 -y
ADD html/ /var/www/html/
EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]

