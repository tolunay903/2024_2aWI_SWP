/*Du hast eine Folge von Zahlen die durch ein Leerzeichen getrennt sind. 

Beispiel: 
"1 2 3 4 5" 

Berechne die Summe der der geraden Zahlen aus der Eingabe und gib die Summe auf der console aus. 

Beispiel mit obiger Eingabe: 
6 
*/

let T = [1, 2, 3, 4, 5];

let SumOfNumbers = 0;

for (let i = 0; i <= 5; i++) {
    if (T[i] % 2 == 0) {
        SumOfNumbers += T[i];
    }
}

console.log(SumOfNumbers);
