# crear imagen:
#Ejemplo
docker build -t docker_node .

#Hacer un tag:
docker tag docker_node:latest docker_node:1

#Correr el contenedor

docker run -it -d --name docker_node -p 3000:3000 docker_node:1
