# configuraciones para crear proyecto crud
1.- se crea package json con "npm init -y" lo cual es una creacion rapida
2.- se crea app.js, el cual es la clase principal que iniciara la ejecucion de todo
3.- se agrega al package json en el nodo de scriopts "start", esto es necesario para futuros despliegues ya que node identofoca que el aplicativo debe iniciar con el comando start
4.- se agrega dependencia de express "npm i express", necesario para configurar servidor de servicios rest.
5.- se agrega dependencia dotenv "npm i dotenv", necesaria para declarar variables de entorno
6.- se puede ejecutar un console log en el app "node app", con el obejtivo de verificar que si funciona
7.- se agrega dependencia de cors "npm i cors", necesaria para dar permisos al front de consumir el back
7.- se configura servidor en la carpeta server, "NO OLVIDAR QUE CADA CLASE NECESITA DE MODULE.EXPORTS"
8.- Se crea una instancia del server en app.js con el obejtivo de comenzar la ejecucion
9.- si se ejecuta el app "node app", se debe observar el log de que el servidor ya esta corriendo en algun puerto
10.- se configuran las variable de entorno, para ello se crea el archivo .env donde se dejara informacion del purto y base de datos.
11.- las variables de entorno no requieres de una instancia, solamente de su importacion y nomenclatura "process.env.PORT", esto se observa en la configuracion del servidor, dicha importacion solo se realiza una vez y es en el servidor.
12.- Se agrega la dependencia para el manejo de la BD, en este caso mongo "npm i mongoose"
13.- Se configura la conexion a la BD en la carpeta database y se dejan sus variables de entorno en .env.
14.- se vuleve a ejecutar el comando de "node app" para verificar que el servidor corre en el puerto elegido y que la base de datos se conecta satisfactoriamente.
15.- se crea carpeta de modelos donde iran las clases que simulan el documento(tabla) en BD, el nombre que se pone en el model en la linea de module.exports, mogo por defecto siempre le concatena una s al final, se debe terne en cuante cuando se cree el nombre del documento.
16.- se agrega la dependecnia de validaciones de express "npm i express-validator", esto sirve para ahcer las valdiacion de los request en los controladores 
17.- Se crea el paquete de controladores donde iran los metodos http, get, put, post etc...
18.- Se crean clases necesarias para agregar validaciones de campos sencillos de bd, dichas clases deben ir en paquete de database
19.- se crea paquete de middlewares, el cual son funcionaes que se ejecutan antes de llegar a una funcionaldiad especifica algo asi como un interceptor
20.- se crea el paquete de dto, elc aul cual solo tiene clases sencillas con constructores
21.- se crea el paquete de servicios donde debe ir la logica de negocio

