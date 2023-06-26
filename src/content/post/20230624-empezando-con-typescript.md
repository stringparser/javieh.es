---
title: "Empezando con TypeScript"
publishDate: "24 Jun 2023"
description: "Empezamos aquí a aprender a programar. Y qué mejor que con TypeScript"
tags: ["TypeScript", "blog", "primero"]
---

# Empezando con TypeScript

Hola muy buenas. Si estas o tienes intención de empezar a programar y
estas mirando como empezar con typescript aquí debajo tienes una guía práctica.

Si todo es nuevo para ti no le prestes mucha atención por ahora a las nuevas palabras. Conforme
vayas aprendiendo iras viendo qué es qué.

# Cacharreo

Antes de ponernos a programar con TypeScript hemos de instalar:

1. Instala un editor: [vscode](https://code.visualstudio.com/download)
1. Instala [nodejs](https://nodejs.org/en/download)

Y finalmente instala `typescript` y `ts-node` usando `npm`

```sh
npm install --global typescript ts-node
```

En esta guía no nos vamos a meter en detalles. Los detalles los vas a ir aprendiendo poco a poco. Si no entiendes algo del todo no te preocupes, se paciente, que

## Comprobando que todo funciona

Habre una consola (o terminal, como quieras llamarla) y escribe lo de abajo para comprobar tu instalación

```sh
node -v
tsc -v
ts-node -v
```

Si tienes problema con lo anterior deberás de averiguar porqué. Cuando lo de arriba funcione bien en tu máquina podemos seguir.

## Crea una carpeta para tu projecto

Venga vamos a empezar con tu primer projecto de programación.

Para ello crea una carpeta donde quieras. Una vez la hallas creado habre tu consola en esa carpeta (si te cuesta no te preocupes sigue hasta que consigas habrir la consola en tu carpeta).

¿Estás en la carpeta de tu projecto? Perfe, vamos a inicializar el projecto

```sh
npm init -y
# -y indica a npm que use las opciones por defecto
```

Esto creará un archivo `package.json`, lo que te permitirá instalar paquetes de `npm` (librerías de nodejs publicadas en internet).

## Programación “parte teoria"

Funciones. Para empezar con funciones vamos a simplemente escribir algo simple y vamos a ver la sintaxis.

- Una función que suma dos números a + b (suma number)
- Una función que saluda dao el nombre (concatena string o cadena de caracteres)
- Una función que suma todos los números que le des (suma number[ ])
- Además hemos visto que la palabra let declara una variable que podemos actualizar (let resultado = 0)

Para sumaTodo hemos hecho uso de `…numeros[ ]` en los argumentos de la función, el … le dice al compilador que meta todos los argumentos en esa variable. El … siempre hace la variable una lista y hay que ponerle `[ ]` al final.

Como `numeros[]{:ts}` es una lista y no sabemos cuantos elementos tiene hemos usado un bucle for quedando así:

```ts title=thing.ts
function sumaTodo(…numeros: number[]) {

  let resultado = 0;

  for (let elemento of numeros) {
    resultado = resultado + elemento;
  }

  return resultado;
}
```

## Programación “parte práctica"

Por ultimo hemos hecho un servidor web usando express.

https://www.npmjs.com/package/express

Instalandolo para el directorio en el que estábamos

```sh
npm install express
```

Y los tipos (para que typescript no se queje)

```sh
npm install @types/express
```

Esto instala express solo para este proyecto (que hemos inicializado para npm con npm init)

Para enviar un archivo hemos definido una ruta GET con app.get de express.

Para enviar el archivo HTML hemos usado res.sendFile de response de express. Como el argumento necesitaba un path absoluto (una dirección exacta del archivo index.html C:/Users/Saul/….blablabla…/index.html) hemos tenido que mirar la documentación

https://expressjs.com/en/5x/api.html#res.sendFile

Ahí hemos visto que sendFile tiene un segundo argumento con opciones donde le podemos decir en que directorio buscar el index.html

Esta opción, dice la documentación, se llama root. Como el index.html está en el directorio desde donde hemos ejecutado el programa, lo que se llama CWD (current working directory), hemos podido usar process.cwd() (esta función viene con NodeJS por defecto).

```ts
res.sendFile(‘index.html’, { root: process.cwd() })
```

Y ezo es todo por hoy amigos.
