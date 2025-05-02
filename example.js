// Función para calcular las raíces de una ecuación cuadrática
// ax² + bx + c = 0
function calcularRaicesCuadraticas(a, b, c) {
    const discriminante = Math.pow(b, 2) - (4 * a * c);
    
    // Fórmula para calcular las raíces usando la fórmula cuadrática
    const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    
    return {x1, x2};
}

// Ejemplo de uso
const raices = calcularRaicesCuadraticas(2, 5, -3);
console.log('Las raíces son:', raices.x1, 'y', raices.x2);