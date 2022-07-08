# Objetivo
El objetivo de esta guía práctica es que podamos poner en práctica lo visto 
en la clase sobre Express. 
Para esto vamos a plantear un ejercicio simple que nos permita repasar los temas que estudiamos.

## Ejercitación
Crear un endpoint que utilice el método GET y devuelva como respuesta el mensaje “Hola Mundo! 
Probar que el mensaje llega al navegador.

# INDICACIONES 
- Correr el comando `npm install` dentro de la carpeta `express-clase1/homework`
- Prestá atención a las consignas,deberás trabajar en el archivo `express-clase1/homework/routes/Get.js` 
- Correr el comando `npm test`, verás los test fallando
- Deberás hacer que los test pasen (tilde verde), teniendo en cuenta el ejercicio
- A medida que vas pasando los ejercicios deberás ir quitandole las 'x' a los bloques `describe` que se encuentran en el archivo `express-clase1/homework/app.spec.js`.
- NOTA: para poder levantar la app en caso de querer hacer pruebas con postman, deberían correr ```npm run dev```
## EXTRA
- Para realizar la actividad extra, deberás eliminar la 'x' del bloque 'describe' de './app.spec.js'

## info extra: ¿Por qué necesito eliminar las 'x' de los test?
- Para no abrumarnos con mucha información y concentrarnos en un ejercicio por vez, la 'x' nos permite saltear ciertos test. Aquellos test que contengan la 'x' se visualizarán en la consola como `skipped` y no serán evaluados.
