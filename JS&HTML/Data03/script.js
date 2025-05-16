
let scores = [
    {
        name: "Olaf",
        points: 50
    },
    {
        name: "Sven",
        points: 57
    },
    {
        name: "Hugo",
        points: 43
    }
];

function displayScores() {
    let html = "";
    scores.forEach(element => {
        html += "<div class = 'scores'>" + element.name + ": " + element.points + "</div>";
    });
    document.getElementById("scores").innerHTML = html;
}

displayScores();