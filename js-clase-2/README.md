# Objetivo
El objetivo de esta guía práctica es que podamos afianzar y profundizar los conceptos sobre variables, 
tipos de datos, funciones, arrays y objetos en JS. Para esto vamos a plantear una serie de ejercicios 
simples que nos permitirán repasar los temas que estudiamos. 



Imaginemos que estamos trabajando con el inventario de productos de un vendedor en MeLi.
El mismo consistirá en el siguiente array de productos:

```js
let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]
```

## Utilizando el array anterior crear una función para cada uno de los siguientes requerimientos:

1. Agregarle un id único a cada producto empezando en 1.
2. Retornar el nombre de cada uno de los productos.
3. Retornar el producto con el id 3.
4. Retornar los productos con color “black”.
5. Retornar los productos que no tienen color.
6. Agregar un producto nuevo al array con las mismas propiedades de los productos ya existentes.
7. Eliminar del array los productos fuera de stock.
8. Retornar la sumatoria del stock de todos los productos.
9. Retornar los productos con un precio mayor a un importe determinado.


# INDICACIONES 
- Correr el comando `npm install` dentro de la carpeta `js-clase-2/ejercitacion`
- Prestá atención a las consignas,deberás trabajar en el archivo `js-clase-2/ejercitacion/exercise.js`
- Correr el comando `npm test`, verás los test fallando
- Deberás hacer que los test pasen (tilde verde), teniendo en cuenta lo que pide el ejercicio
- A medida que vas pasando los ejercicios deberás ir quitandole las 'x' a los bloques `describe` que se encuentran en el archivo `js-clase-2/ejercitacion/exercise.spec.js`


## info extra: ¿Por qué necesito eliminar las 'x' de los test?
- Para no abrumarnos con mucha información y concentrarnos en un ejercicio por vez, la 'x' nos permite saltear ciertos test. Aquellos test que contengan la 'x' se visualizarán en la consola como `skipped` y no serán evaluados.

