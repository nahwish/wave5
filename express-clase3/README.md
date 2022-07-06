## Express clase 3

Vamos a crear un CRUD con los siguientes endpoints que, mediante Postman, nos permita:

- 1. Retornar todos los productos del array. “/api/products”,
- 2. Obtener un producto específico mediante su ID “/api/products/:id”
- 3. Agregar un nuevo producto “/api/products”,
- 4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,
- 5. Eliminar un producto mediante su ID “/api/products/:id”,

# INDICACIONES 
- Correr el comando `npm install` dentro de la carpeta `express-clase3/ejercitacion`
- Prestá atención a las consignas,deberás trabajar en el archivo `express-clase3/ejercitacion/routes/products.js` 
- Correr el comando `npm test`, verás los test fallando
- Deberás hacer que los test pasen (tilde verde), teniendo en cuenta el ejercicio
- A medida que vas pasando los ejercicios deberás ir quitandole las 'x' a los bloques `describe` que se encuentran en el archivo `express-clase1/ejercitacion/app.spec.js`.


## info extra: ¿Por qué necesito eliminar las 'x' de los test?
- Para no abrumarnos con mucha información y concentrarnos en un ejercicio por vez, la 'x' nos permite saltear ciertos test. Aquellos test que contengan la 'x' se visualizarán en la consola como `skipped` y no serán evaluados.