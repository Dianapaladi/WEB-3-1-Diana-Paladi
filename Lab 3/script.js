function calculateSum(a, b) {
    return a + b;
}
console.log(calculateSum(5, 3));
console.log(calculateSum(10, 7));


let student = {
    name: "Diana",
    age: 18,
    grade: 9,

    introduce: function() {
        console.log("Sunt" + this.name + "si am" + this.age + "ani");
    }
};
student.introduce();
student.grade = 10;
console.log("Noua nota: "+ student.grade);


let gameScore = {
    player: 0,
    computer: 0,
    draws: 0,
    displayScore: function() {
        document.getElementById("playerScore").textContent = this.player;
        document.getElementById("computerScore").textContent = this.computer;
        document.getElementById("draws").textContent = this.draws;

        alert(
            "Scor:\n" +
            "Tu: " + this.player + "\n" +
            "Calculator: " + this.computer + "\n" +
            "Egalități: " + this.draws
        );
    }
};

let choices = ["Piatra", "Hartia", "Foarfeca"];
function playGame(playerChoice) {
    let computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("playerChoice").textContent = playerChoice;
    document.getElementById("computerChoice").textContent = computerChoice;


    if (playerChoice === computerChoice) {
        document.getElementById("result").textContent = "Egalitate!";
        gameScore.draws++;

    } else if (
        (playerChoice === "Piatra" && computerChoice === "Foarfeca") ||
        (playerChoice === "Foarfeca" && computerChoice === "Hartia") ||
        (playerChoice === "Hartia" && computerChoice === "Piatra")
    ) {
        document.getElementById("result").textContent = "Ai castigat!";
        gameScore.player++;

    } else {
        document.getElementById("result").textContent =
            "Calculatorul a câștigat!";
        gameScore.computer++;
    }
    gameScore.displayScore();
}

document.getElementById("rock").addEventListener("click", function() {
    playGame("Piatra");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("Hârtia");
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("Foarfeca");
});

