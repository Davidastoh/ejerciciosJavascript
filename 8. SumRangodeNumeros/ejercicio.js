//Escribir una función llamada `sumarRango` que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

//**Nota:** puedes asumir que el número inicial va a ser menor o igual que el número final.


// escribe tu respuesta acá
function sumarRango(inicial, final) {
    let suma = 0; // Inicializa la suma en 0

    // Utiliza un ciclo para sumar los números en el rango
    for (let i = inicial; i <= final; i++) {
        suma += i; // Suma cada número al total
    }

    return suma; // Retorna la suma final
}

// código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 5