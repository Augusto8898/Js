let nombre = prompt("¿Cual es tu nombre?");

alert("Hola " + nombre + "Bienvenido a esta calculadora");

let numero1 = prompt("Escribe tu primera cifra");
let numero2 = prompt("Escribe tu segunda cifra");

let operacion = prompt("¿Qué operacion quieres realizar? Sumar, Restar, Dividir o Multiplicar");

if (operacion == "sumar"){
    let resultado = parseInt(numero1) + parseInt(numero2)
    alert(`El resultado de ${numero1} + ${numero2} = ` + resultado)
};
if (operacion == "restar"){
    let resultado = parseInt(numero1) - parseInt(numero2)
    alert(`El resultado de ${numero1} - ${numero2} = ` + resultado)
};
if (operacion == "dividir"){
    let resultado = parseInt(numero1) / parseInt(numero2)
    alert(`El resultado de ${numero1} / ${numero2} = ` + resultado)
};
if (operacion == "multiplicar"){
    let resultado = parseInt(numero1) * parseInt(numero2)
    alert(`El resultado de ${numero1} * ${numero2} = ` + resultado)
};