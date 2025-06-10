const data = "1,2,3,200,5,6,7,8,9,10,11,12"; // meiste selber gemacht chat gpt verbessert
const array = data.split(",").map(Number);

let gerade = 0;
let ungerade = 0;

for (let i = 0; i < array.length; i++) { // wenn i kleiner als die array längen sind dann +1 und alle zahlen die gerade
    if (array[i] % 2 === 0) {            // sind zusammenzählen und am ende durhc die summe der ungeraden dividieren
        gerade += array[i];
    } else {
        ungerade += array[i];
    }
}

const result = gerade / ungerade; // hier nochmal geraden dividiert ungeraden
console.log("Lösung:", result);


