# Crear imagen
docker build -t docker_nginx .
# Crear un tag
docker tag docker_nginx:latest docker_nginx:1
# Correr contenedor
docker run -it -d --name docker_nginx -p 80:80 docker_nginx:1
 
