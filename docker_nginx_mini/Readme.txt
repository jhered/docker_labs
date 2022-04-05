# Crear imagen
docker build -t docker_nginx_mini .
# Crear un tag
docker tag docker_nginx_mini:latest docker_nginx_mini:1
# Correr contenedor
docker run -it -d --name docker_nginx_mini -p 80:80 docker_nginx_mini:1
 
