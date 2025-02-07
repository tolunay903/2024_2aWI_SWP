
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
// --> statemnt: console.log(result);
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