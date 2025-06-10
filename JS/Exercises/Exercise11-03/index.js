// Gibt die Zahl zurück, die am nächsten bei 0 liegt
function findNearestToZero(values) {
    if (values.length === 0) return null; // Bei leerem Array: null

    let nearest = values[0]; // Startwert

    for (let index = 1; index < values.length; index++) {
        let current = values[index];

        // Vergleicht Abstand zur 0
        if (Math.abs(current) < Math.abs(nearest)) {
            nearest = current;
        }
    }

    return nearest; // Ergebnis zurückgeben
}

const temperaturen = [100, 7, 32, -8, 4, 10];

console.log(findNearestToZero(temperaturen)); // Ausgabe: 0



