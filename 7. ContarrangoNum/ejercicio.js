//Escribir una función llamada `contarRango` que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

//**Nota:** Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

// escribe tu respuesta acá
function contarRango(inferior, superior) {
    let contador = 0; // Inicializa el contador

    // Utiliza un ciclo para contar los números entre inferior y superior
    for (let i = inferior + 1; i < superior; i++) {
        contador++; // Incrementa el contador por cada número encontrado
    }

    return contador; // Retorna el conteo final
}

// código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0