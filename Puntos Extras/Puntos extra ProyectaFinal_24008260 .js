// Definición de constantes
const precioBase = 2000; // Precio base del seguro
const recargoEdad18a24 = 0.1; // Recargo para edades de 18 a 24 años
const recargoEdad25a49 = 0.2; // Recargo para edades de 25 a 49 años
const recargoEdad50omas = 0.3; // Recargo para edades de 50 años o más
const recargoHijo = 0.2; // Recargo por hijo
const recargoPorPropiedad = 0.35; // Recargo por propiedad
const recargoPorIngresos = 0.05; // Recargo por ingresos

// Función para calcular el recargo por edad del asegurado o cónyuge
function calcularRecargoEdad(edad) {
    if (edad >= 18 && edad <= 24) {
        return precioBase * recargoEdad18a24;
    } else if (edad >= 25 && edad <= 49) {
        return precioBase * recargoEdad25a49;
    } else if (edad >= 50) {
        return precioBase * recargoEdad50omas;
    } else {
        return 0;
    }
}

// Función para calcular el recargo por cantidad de hijos
function calcularRecargoHijos(numHijos) {
    return precioBase * recargoHijo * numHijos;
}

// Función para calcular el precio total del seguro
function calcularPrecioTotal(edadAsegurado, edadConyuge, numHijos, propiedades, ingresos) {
    // Calcular recargo por edad del asegurado y cónyuge
    const recargoEdadAsegurado = calcularRecargoEdad(edadAsegurado);
    const recargoEdadConyuge = calcularRecargoEdad(edadConyuge);
    
    // Calcular recargo por hijos
    const recargoPorHijos = calcularRecargoHijos(numHijos);
    
    // Calcular recargos extra por cantidad de propiedades e ingresos
    const recargoPorPropiedades = precioBase * recargoPorPropiedad * propiedades;
    const recargoPorIngresos = precioBase * recargoPorIngresos * ingresos;
    
    // Calcular precio total sumando el precio base y los recargos
    const precioTotal = precioBase + recargoEdadAsegurado + recargoEdadConyuge + recargoPorHijos + recargoPorPropiedades + recargoPorIngresos;
    
    return precioTotal;
}

// Función principal para solicitar cotizaciones
function solicitarCotizaciones() {
    let continuar = true;
    
    while (continuar) {
        const edadAsegurado = parseInt(prompt("Ingrese la edad del asegurado:"));
        const edadConyuge = parseInt(prompt("Ingrese la edad del cónyuge:"));
        const numHijos = parseInt(prompt("Ingrese la cantidad de hijos:"));
        const propiedades = parseInt(prompt("Ingrese la cantidad de propiedades del asegurado:"));
        const ingresos = parseInt(prompt("Ingrese el salario mensual del asegurado:"));

        // Calcular el precio total del seguro
        const precioTotal = calcularPrecioTotal(edadAsegurado, edadConyuge, numHijos, propiedades, ingresos);

        // Mostrar el resultado al usuario
        alert("El precio total del seguro es: Q." + precioTotal.toFixed(2));

        // Preguntar si desea continuar o salir
        const respuesta = prompt("¿Desea realizar otra cotización? (Escriba 'Salir' para terminar)");

        // Si la respuesta es "Salir", detener el ciclo
        if (respuesta && respuesta.toLowerCase() === "salir") {
            continuar = false;
        }
    }
}

// Iniciar el programa
solicitarCotizaciones();
