# Api Nodepop
### Features

El esquema del modelo anuncios es:

    nombre: String, 
    venta: Boolean,
    precio: Number,
    foto: String,
    tag: [String]
     

La respuesta de la api es un JSON compuesto de 
{
"success": true, > Un boleano que nos informa del exito de la consulta
"result": Resultado > El resultado obtenido
}


/apiv1/anuncios/

sin especificar una query lista todos los anuncios en la base de datos

fields > muestra campos
varios campos separados por espacios

/contar > muestra el total de anuncios en la base de datos

filtros
    nombre=string (o parte del nombre)
    venta=boolean > true muestra los anuncios de venta, mientras que false muestra los de compra
    precio=[n] | [min-max] | [min-] | [-max]
    tag=string > filtra por anuncios que contienen dicha tag

sort=venta precio 
varios campos separados por espacios

skip=n > ignora los x primeros resultados

limit=n > limita la salida a n resultados
