let sumaProductos = 0

for (let i = 0; i < 5; i++) {
    sumaProductos += i; 
}

console.log("El total de productos en el carrito es " + sumaProductos + ".")

function functionTest(palabraMagica) {
    if (sumaProductos < 10) {
        console.log("No tenes suficientes productos en el carrito.");
    } else if (sumaProductos > 10) {
        console.log("Estás gastando mucha plata")
    } else {
        console.log("Te llevas la cantidad de productos justa. " + palabraMagica)
    }
}

functionTest("Felicidades!");

switch (sumaProductos) {
    case (sumaProductos < 10):
        console.log("Y solo aceptamos efectivo.")
        break;
    default:
        console.log("Además, podes pagar con tarjeta de crédito o débito.")
        break;
}
