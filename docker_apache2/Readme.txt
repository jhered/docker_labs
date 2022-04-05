# Crear imagen
docker build -t docker_apache2 .

# Correr el contenedor
docker run -it -d --name docker_apache2 -p 80:80 docker_apache2:latest
 
