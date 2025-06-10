const daten = [50, 100, 610];

const a = daten[0]; //  Preis
const b = daten[1]; //  Stunden
const c = daten[2]; //  Zielwert

const x = a * b;

//Vergleicht Ertrag mit dem Zielwert 
if (x > c) {                        //schaut ob Ertrag größer ist
    console.log("JA");
} else if (x === c) {               //schaut ob Ertrag fast genau gleich ist
    console.log("FAST");
} else {
    console.log("NEIN");            //schaut ob Ertrag kleiner ist
}
