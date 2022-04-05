# crear imagen:
#Ejemplo
docker build -t docker_node_mini .

#Hacer un tag:
docker tag docker_node_mini:latest docker_node_mini:1

#Correr el contenedor

docker run -it -d --name docker_node_mini -p 3000:3000 docker_node_mini:1
