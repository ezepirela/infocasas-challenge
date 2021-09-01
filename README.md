# infocasas-challenge

### Cómo iniciar la App
1. instalar las dependencias de la carpeta FrontEnd con npm install
2. instalar las dependencias de laravel con composer
3. crear un archivo .env en el root de la carpeta FrontEnd con la variable REACT_APP_BACKEND_URL que es la URL correspondiente al servidor EJ: REACT_APP_BACKEND_URL=http://localhost:8000
4. crear un archivo .env en el root de la carpeta BackEnd con las variables DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD 
para establecer la conexión de la base de datos con la API.
## Cómo usar la App
1. la ventana principal muestra el header con las distintas opciones que nos permite la app. Este header está presente en todas las ventanas para facilitar la navegación.
2. en la ventana principal se encuentra el formulario en el cual podemos colocar nombre de la tarea, una descripción y por último el nivel de prioridad que tenga esta.
3. en la ventana show task podemos ver las distintas tareas creadas y botones para marcarla como completada, eliminarla o solo mostrar las tareas completadas
4. en la ventana search se encuentra un text input donde se puede escribir el título de la tarea que queremos y mostrarla en pantalla
