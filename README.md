# Nodepop App (Práctica del módulo 3)
NodeJs, Express y MongoDB

### NOTA: Cada vez que se reinicia la App se recarga la base de datos de ejemplo "predefinida"


### Features de la API

El esquema del modelo Anuncios es:

    nombre: String  // Contiene el nombre del artículo
    venta: Boolean  // true indica que el articulo está en venta, mientras que false indica que está en compra
    precio: Number  // precio del artículo
    foto: String    // ruta del archivo de imagen del artículo
    tag: [String]   // etiquetas de categorías del anuncio (work, lifestyle, motor y mobile)
     

 TODAS las respuestas de la api son a través un JSON compuesto de: 
~~~
{
"success": true, // > Un boleano que nos informa del exito de la consulta
"result": Resultado // > El resultado obtenido
}  
~~~
Acceso a las características del API

http://servidor:puerto/apiv1/anuncios/
en esta práctica localhost:3000

Si no especificamos ninguna query a la API, ésta lista todos los anuncios en la base de datos como resultado.

 - Mostrar el total de anuncios en la base de datos como resultado.
~~~
http://localhost:3000/apiv1/anuncios/contar
~~~

 - Mostrar todas las tags de los anuncios como resultado.
~~~
http://localhost:3000/apiv1/anuncios/tags
~~~

- Mostrar el anuncio con una determinada _id.
~~~
http://localhost:3000/apiv1/anuncios/<id>
ejemplo: http://localhost:3000/apiv1/anuncios/5a89c6390774ae0f17e0b61b
~~~

- Insertar anuncios. (metodo POST)
~~~
http://localhost:3000/apiv1/anuncios/

Pasandole el documento
{nombre: 'Raqueta', venta: true, precio: 300, foto: 'foto10', tag: ['lifestyle']}
~~~

- Borrar anuncios con una determinada _id. (metodo DELETE)
~~~
http://localhost:3000/apiv1/anuncios/<id>
ejemplo: http://localhost:3000/apiv1/anuncios/5a89c6390774ae0f17e0b61b
~~~

- Actualizar anuncios con una determinada _id. (metodo PUT)
~~~
http://localhost:3000/apiv1/anuncios/<id>
ejemplo: http://localhost:3000/apiv1/anuncios/5a89c6390774ae0f17e0b61b
~~~


 - Mostrar solo los campos indicados en el resultado, además del _id del documento.
Admite indicar varios campos separados por espacios

~~~
http://servidor:puerto/apiv1/anuncios?fields=<campo1 campo2> 
~~~
##### Filtros

~~~
http://servidor:puerto/apiv1/anuncios?<campo>=<valor>
~~~

    nombre=string                                   // (o subcadena inicial del nombre) 
    venta=boolean                                   // true = anuncios enta, false = anuncios compra
    precio=[n] | [min-max] | [min-] | [-max]        // valor exacto o un rango de precios
    tag=string                                      // filtra por anuncios que contienen dicha tag

**sort**=*campo1 campo2*

admite indicar varios campos separados por espacios

**skip=n**  *ignora los x primeros resultados*

**limit=n**  *limita la salida a n resultados*

### Features especiales

Es posible recargar la coleccion anuncios "predefinida" en la base de datos
A traves de la siguiente peticion GET a la app:
~~~
http://servidor:puerto/anuncios/load
~~~

Es posible borrar la colección anuncios 
A traves de la siguiente peticion GET a la app:
~~~
http://servidor:puerto/anuncios/clear
~~~
