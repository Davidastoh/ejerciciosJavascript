//Escribir una función llamada `imprimirArreglo` que reciba un arreglo e imprima cada elemento en una línea a parte:

// escribe tu respuesta acá
function imprimirArreglo(...elementos) {
    elementos.forEach(elemento => {
        console.log(elemento); // Imprime cada elemento en una línea aparte
    });
}
// código de prueba
imprimirArreglo(1, "Hola", 2, "Mundo");
// 1
// Hola
// 2
// Mundo
