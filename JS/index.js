
//1.keyword (Schlüsselwort):let
//2. variable:result
//3. expression (Ausdruck): 1 + 2 
//4. assignment (Zuweisung) =
//5. terminator (Abschluss eines Befehls): ;
// --> statement (Befehl): let result = 1 + 2;
let result = 1 + 2; //3

//6. function:console.log
//7. argument : result
//8. terminator: ;
// --> statement: console.log(result);
console.log(result);

// k = 3; d = 2;
//f(X) = k * x + d
// f(5) = 3 * 5 + 2 = 17

// code blocks (Codebloöcke): statements belonging together
{
    //1.keyword : let
    //2. variable: a
    //3. assignemnt: =
    //4. constante: 10
    //5. terminator: ;
    let a = 10;
    let b = 20;

    let result = a + b

    console.log(a);
    console.log(result);
}


// calculations

let a1 = 7;
let b1 = 3;

//addition
let sum = a1 + b1; // 10

//subtraction
let difference = a1 - b1; //4

//multiplication
let product = a1 * b1; //21

//division
let quotient = a1 / b1; // 2.33..

//modulo(Rest eine ganzahligen Division)
let reaminder = a1 % b1; //1

//expoenentation (Potenzierung)
let power = a1 ** b1; //343

//expression
let expression = (a1 - b1) * b1; //30

//assignment
a1 = 13;
b1 = 42;

// if statement
if (a1 < b1) {
    console.log('a1 is smaller than b1');
}

// if - else statement
if (a1 < b1) {
    console.log('a1 is smaller than b1');
} else {
    console.log('a1 is not smaller than b1');
}

// if - else if -else statement
if (a1 == b1) {
    console.log('a1 equals b1');
} else if (a1 < b1) {
    console.log('a1 is not smaller than b1');
} else {
    console.log('a1 is greater than b1');
}

// comparison operators

// equal to
console.log(1 == 1); // true (wahr)

// not equal
console.log(1 != 1); //false (falsch)

// greater than
console.log(1 > 1); //false

// greater tha nor equal to
console.log(1 >= 1); // true

// less than
console.log(1 < 1); // false

//less than or equal to
console.log(1 <= 1); // true

// Values and Types
integer = 213; // Ganzzahl
floatingPoint = 3.1451; // Gleitkommazahl
boolean = true; // Wahrheitswert

//strings (Zeichenketten)
string1 = 'Hello World!';
string2 = 'it is great';
string3 = "it´s great";

//concatention (Verkettung)
string4 = string1 + "..." + string2;
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

//concatention of strings and numbers

a1 = 10;
b1 = 20;
result = a1 + b1;
console.log('The result is: ' + result);

//loops (Schleifen)
// for loop

console.log('Tolunay');
console.log('Tolunay');
console.log('Tolunay');

for (let i = 0; i < 10; i = i + 1) {
    console.log('Durchlauf: ' + i)
    console.log('Tolunay');
}

let = 1;
console.log(i);

for (let i = 0; i < 10; i = i++) {
    console.log('Tolunay');
}

{
    let i = 0; //0s
    console.log(i);

    for (let i = 0; i < 10; i = i++) {
        console.log('Tolunay');
    }
}


let sumOfEvenNumbers = 0;
for (let i = 0; i < 10; i = i + 1) {
    if (i % 2 == 0) { }
    console.log('Durchlauf: ' + i)
    console.log('Tolunay');
}


// functions
function sum(nq, n2) {
    return n1 + n2
}

let n1 = 5;
let n2 = 10;

let resultSum = n1 * n2;

resultSum = sum(5, 10);

// function kx + d, k=10, d=5
function linearStraight(x) {
    return 10 * x * 5;
}

sum(10, 15);

//1. keyword function
// 2. name of the function we want to declar
// 3. ()
// 4. with the bracket we can hand in parameters to the function
// 5. opening curly brace
// 6. statements
// 7. optionally a return
// 8. closing curly brace

function log(text, repeat) {

    // for loop:
    //1. declare variable i and initalize it to 1: let 1 = 1
    //2. check the conditional expression
    //3. if the condition is still true, then execute statemens within the curyl braces
    // in our case this is to execute the statement "(console.log(i + ": " + text);"
    //4. i = i + 1 --> i = 1 --> i = 1 + 1 --> 1 = 2
    // ...

    // outer scope of the for loop
    let i = 100

    for (let i = 1; i < result; i = i + 1) {
        // inner scope of the for loop
        // i is always resolved from the inner scope to the outer scope
        // because the for loop redclares i, the followeing statemnet finds i from the loop
        //with the intial value of 1 and not the i that is declared in the outer scope
        // with the value 100
        console.log(i + "; " + text)
    }

    //here we are in the outer scope again hence i has the value 100
    console.log("value i is: " + 1);
}


log("Hallo Welt", 10);
log("hello world", 5);