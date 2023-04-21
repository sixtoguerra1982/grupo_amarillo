// declararo variables 
let num1 = 0
let num2 = 0
// ingreso de valores
num1 = parseInt(prompt("Ingrese Numero 1"))
num2 = parseInt(prompt("ingrese Numero 2"))
// resultado
document.write(num1 + " - " + num2)


let suma = num1 + num2
document.write("<p> Resultado de la suma: " + suma + "</p>")

let resta = num1 - num2
document.write("<p> Resultado de la resta: " + resta + "</p>")

// División Multiplicación Módulo
let division = num1 / num2
document.write("<p> Resultado de la division: " + division + "</p>")

let multi = num1 * num2
document.write("<p> Resultado de la multiplicacion: " + multi + "</p>")

let resto_division = num1 % num2
document.write("<p> Resultado del modulo: " + resto_division + "</p>")
