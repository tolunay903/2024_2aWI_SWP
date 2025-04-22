/*Du hast eine Folge von Zahlen die durch ein Leerzeichen getrennt sind. 

Beispiel: 
"1 2 3 4 5" 

Berechne die Summe der der geraden Zahlen aus der Eingabe und gib die Summe auf der console aus. 

Beispiel mit obiger Eingabe: 
6 
*/

let inputString = "1 2 3 4 5";
let numbersArray = inputString.split(" ").map(Number);
let SumOfNumbers = 0;

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
        SumOfNumbers += numbersArray[i];
    }
}

console.log(SumOfNumbers);