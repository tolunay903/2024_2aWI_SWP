function calculateSum() {
    let inputA = document.getElementById("inputA").value;
    let inputB = document.getElementById("inputB").value;
    let result = Number(inputA) + Number(inputB);
    document.getElementById('result').innerHTML = result;
}

function calculateSubtract() {
    let inputA = document.getElementById("inputA").value;
    let inputB = document.getElementById("inputB").value;
    let result = Number(inputA) - Number(inputB);
    document.getElementById('result').innerHTML = result;
}

function calculatemultiply() {
    let inputA = document.getElementById("inputA").value;
    let inputB = document.getElementById("inputB").value;
    let result = Number(inputA) * Number(inputB);
    document.getElementById('result').innerHTML = result;
}

function calculatedivide() {
    let inputA = document.getElementById("inputA").value;
    let inputB = document.getElementById("inputB").value;
    let result = Number(inputA) / Number(inputB);
    document.getElementById('result').innerHTML = result;
}
