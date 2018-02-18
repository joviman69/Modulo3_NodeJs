# API Nodepop

El esquema del modelo Anuncios es:

    nombre: String  // Contiene el nombre del artículo
    venta: Boolean  // true indica que el articulo está en venta, mientras que false indica que está en compra
    precio: Number  // precio del artículo
    foto: String    // ruta del archivo de imagen del artículo
    tag: [String]   // etiquetas de categorías del anuncio (work, lifestyle, motor y mobile)
     

TODAS las respuestas de la api son a través un JSON compuesto de: 

{
"success": true, // > Un boleano que nos informa del exito de la consulta
"result": Resultado // > El resultado obtenido
}

### Features
Acceso a las características del API

http://servidor:puerto/apiv1/anuncios/

en esta práctica localhost:3000

Si no especificamos ninguna query a la API, ésta lista todos los anuncios en la base de datos como resultado.

http://localhost:3000/apiv1/anuncios/contar

muestra el total de anuncios en la base de datos como resultado.


http://localhost:3000/apiv1/anuncios/tags

muestra todas las tags de los anuncios como resultado.

http://servidor:puerto/apiv1/anuncios?fields=<campo1 campo2> 

muestra solo los campos indicados en el resultado. Además del _id del documento.
Es posible solicitar varios campos separados por espacios

filtros

http://servidor:puerto/apiv1/anuncios?<campo>=<valor>

    nombre=string                                   // (o subcadena inicial del nombre) 
    venta=boolean                                   // true = anuncios enta, false = anuncios compra
    precio=[n] | [min-max] | [min-] | [-max]        // valor exacto o un rango de precios
    tag=string                                      // filtra por anuncios que contienen dicha tag

sort=venta precio 

varios campos separados por espacios

skip=n > ignora los x primeros resultados

limit=n > limita la salida a n resultados

