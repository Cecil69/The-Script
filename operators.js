// operators

let a = 10;
let b = 3;
let add = a + b;
let subtract = a - b;
let multiply = a * b;
let divide = a / b ;
let exponent = a ** b;
let modulus = a % b;

// adition
document.getElementById('hAddition').innerHTML = "Addition"
document.getElementById('vAddition').innerHTML = "The Values Are " + a + " + " + b;
document.getElementById('rAddition').innerHTML ="The Result Is  " + add;

document.write("<br>");
// subtraction
document.getElementById('hSubtraction').innerHTML = "Subtraction"
document.getElementById('vSubtraction').innerHTML = "The Values Are " + a + " - " + b;
document.getElementById('rSubtraction').innerHTML ="The Result Is  " + subtract;


// multiplication
document.getElementById('hMultiplication').innerHTML = "Multiplication"
document.getElementById('vMultiplication').innerHTML = "The Values Are " + a + " * " + b;
document.getElementById('rMultiplication').innerHTML ="The Result Is  " + multiply;


// division
document.getElementById('hDivision').innerHTML = "Division"
document.getElementById('vDivision').innerHTML = "The Values Are " + a + " / " + b;
document.getElementById('rDivision').innerHTML ="The Result Is  " + divide;


// exponentation
document.getElementById('hExponent').innerHTML = "Exponent"
document.getElementById('vExponent').innerHTML = "The Values Are " + a + " ** " + b;
document.getElementById('rExponent').innerHTML ="The Result Is  " + exponent;

// exponentation
document.getElementById('hModulus').innerHTML = "Modulus"
document.getElementById('vModulus').innerHTML = "The Values Are " + a + " % " + b;
document.getElementById('rModulus').innerHTML ="The Result Is  " + modulus;

// assignment
x = 20;
x +=10
y=5
y -=3
document.write(y)

document.write("<br>")
document.write(x)


document.write("<br>")
// decrement --
let d = 5;
d--;
document.write("d is: " +d);


document.write("<br>")
// decrement --
let z = 1;
z++;
document.write("z is: " +z);
