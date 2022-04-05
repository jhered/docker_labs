# Crear imagen
docker build -t docker_apache2_mini .

# Correr el contenedor
docker run -it -d --name docker_apache2_mini -p 80:80 docker_apache2_mini:latest
 
