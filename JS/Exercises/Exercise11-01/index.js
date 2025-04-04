
let input = 'ATGCTTCAGAAAAGGTCAGCG';

let A = 0;
let C = 0;
let G = 0;
let T = 0;

if (input.length > 0 && input.length < 1000) {

    for (let i = 0; i <= input.length; i++) {
        if (input[i] == 'A') {
            A += 1;

        } else if (input[i] == 'C') {
            C += 1;

        } else if (input[i] == 'G') {
            G += 1;

        } else if (input[i] == 'T') {
            T += 1;

        }
    }
    console.log(A, C, G, T);
}
