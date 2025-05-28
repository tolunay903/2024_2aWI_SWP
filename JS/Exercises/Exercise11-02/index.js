let binary = "1010010"

let result = inverted(binary);

console.log(result)

function inverted() {
    let inverted = "";


    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            inverted += '1';

        } else if (binary[i] === '1') {
            inverted += '0';
        }

    }
    return inverted;
}
