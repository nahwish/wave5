# Objetivo
El objetivo de esta guía práctica es que podamos afianzar y profundizar los conceptos sobre variables, 
tipos de datos, condicionales y funciones. Para esto vamos a plantear una serie de ejercicios simples 
que nos permitirán repasar los temas que estudiamos. 

# EJERCITACIÓN
Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: Laptop), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

El texto que retorna debería verse de la siguiente manera: 
# 'El producto {nombre del producto} cuesta {precio del producto} . Su costo de envío es de {costo de envío} . Por lo tanto, el precio final es de ${precio final}'


Cada producto tiene un costo de envío individual según su rango de precio:

- Si el precio es  1 -  2000 el costo de envío → es de  300 
- Si el precio es  2001 -  4000 el costo de envío → es de  500
- Si el precio es >  4000 el costo de envío → es de  700
- El precio final de la compra es precio del producto + costo de envío

# INDICACIONES 
- Correr el comando `npm install` dentro de la carpeta `js-clase-1/ejercitacion`
- Prestá atención a las consignas,deberás trabajar en el archivo `js-clase-1/ejercitacion/index.js`
- Correr el comando `npm test`, verás los test fallando
- Deberás hacer que los test pasen (tilde verde), teniendo en cuenta el ejercicio
- A medida que vas pasando los ejercicios deberás ir quitandole las 'x' a los bloques 'describe' que se encuentran en el archivo `js-clase-1/ejercitacion/index.spec.js`.

## info extra: ¿Por qué necesito eliminar las 'x' de los test?
- Para no abrumarnos con mucha información y concentrarnos en un ejercicio por vez, la 'x' nos permite saltear ciertos test. Aquellos test que contengan la 'x' se visualizarán en la consola como `skipped` y no serán evaluados.
