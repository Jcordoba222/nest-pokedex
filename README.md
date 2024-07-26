<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Para ejecutar el proyecto

1. Clonar repositorio<h3>
2. Ejecutar

```
npm install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Clonar el archivo ```__env.template__``` y renombrar la copiar __.env__

5. Llenar las variables de entorno definidas en el ```.env```

6. Ejecutar la aplicacion en dev:

```
npm run start:dev 
```

7. Reconstruir la base de datos con la semilla
```
localhost:3001/api/v2/seed
```
8. Levantar la base de datos

```
docker-compose up -d
```


## Stack usados

* Nest
* Mongo