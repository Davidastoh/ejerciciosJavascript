//Escribir una función llamada `numeroDeAes` que reciba un string y retorne el número de veces que aparece la letra "a":


// escribe tu respuesta acá
function numeroDeAes(cadena) {
    let contador = 0; // Inicializa el contador en 0

    // Recorre cada carácter de la cadena
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'a') { // Si el carácter es 'a'
            contador++; // Incrementa el contador
        }
    }

    return contador; // Retorna el conteo final
}

// código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0