

El servidor  REST programado,consiste en una mini-base de datos no permanente, que permite almacenar un usuario y un número 
de teléfono perteneciente a ese usuario,también permite consultar el número de teléfono de un usuario a través de una búsqueda. 

El documento html menu.html contiene enlaces a los 2 tipos de petición que se pueden realizar al navegador: "Consultar usuario" 
y "Añadir usuario": 

-El enlace "Consultar usuario" despliega un formulario html que permite hacer una petición POST al servidor REST para consultar y 
recuperar el teléfono del usuario introducido.Para buscar al usuario deseado basta con introducir en el campo del formulario 
desplegado el nombre del usuario a buscar y presionar la tecla "enter" apareciendo el resultado en el html. Dicha búsqueda 
también se puede realizar mediante una petición GET, introduciendo en la barra del navegador: 
"http://127.0.0.1:8080/consulta/nombreUsuario". 

-El enlace "Añadir usuario" despliega un documento html que permite hacer una petición POST al servidor creando un usuario 
con un número de teléfono. Para crear un usuario se introduce el nombre del usuario a crear en el campo indicado del formulario 
desplegado y se pulsa la tecla "enter" posteriormente se introduce el número de teléfono del usuario en el campo indicado como 
teléfono y se presiona la tecla "enter". 

Desde los dos formularios hay enlaces a los dos tipos de petición. 

Los ficheros que componen el código son: 

- 'server.js' que se deberá ejecutar mediante "node server.js" para poner el servidor en marcha. 
- 'menu.html' contiene los enlaces a los dos tipos de peticiones. 
- 'consultar_formulario.html' y 'agregar_formulario.html' contienen los formularios para buscar y añadir un usuario respectivamente. 
-'consulta.js' contiene las funciones que permiten hacer las disintas peticiones al servidor. 