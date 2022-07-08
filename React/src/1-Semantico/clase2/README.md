# Objetivo
El objetivo de esta práctica es que puedan afianzar y profundizar los conceptos 
sobre formularios. Para esto vamos a plantear un ejercicio simple que nos 
permitirá repasar los temas que estudiamos.

## Ejercitación
Se solicita crear un formulario accesible donde se pueda ingresar el:
- Nombre ( id = ”name” ) .
- Email ( id = “email” ).
- Número de teléfono ( id = “phone” ).

A su vez, es necesario:
- Agregar un select (id= “country”) donde tengamos la opción de elegir nuestro país (Argentina, Chile, Colombia, Venezuela, México, Brasil, Bolivia,Uruguay). 
- Que cada option tenga un id con el nombre del país y su respectivo valor.
- Agregar dos RadioButton cuyo name sea “método de entrega” donde se pueda elegir la opción de envío a domicilio (id= “envio”) o retiro en sucursal (id= “retiro”)
- Agregar los siguientes CheckBox donde se pueda seleccionar uno o más productos.
1. Bicicleta (id=”bicicleta”)
2. Reloj (id =“reloj”)
3. Notebook (id= “notebook”)



# indicaciones 

- Prestá atención a las consignas,deberás trabajar en el archivo `Semantico-clase2/homework/form.js`
- Correr el comando `npm test`, verás los test fallando
- Deberás hacer que los test pasen (tilde verde), teniendo en cuenta la consigna
- A medida que vas pasando los ejercicios deberás ir quitandole las 'x' a los bloques `describe` que se encuentran en el archivo `homework/form.spec.js`

## info extra: ¿Por qué necesito eliminar las 'x' de los test?
- Para no abrumarnos con mucha información y concentrarnos en un ejercicio por vez, la 'x' nos permite saltear ciertos test. Aquellos test que contengan la 'x' se visualizarán en la consola como `skipped` y no serán evaluados.
