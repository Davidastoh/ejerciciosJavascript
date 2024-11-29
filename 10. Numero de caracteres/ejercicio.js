//Escribir una función llamada `numeroDeCaracteres` que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.


// escribe tu respuesta acá
function numeroDeCaracteres(cadena, caracter) {
    let contador = 0; // Inicializa el contador en 0

    // Recorre cada carácter de la cadena
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) { // Si el carácter actual es igual al carácter buscado
            contador++; // Incrementa el contador
        }
    }

    return contador; // Retorna el conteo final
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4