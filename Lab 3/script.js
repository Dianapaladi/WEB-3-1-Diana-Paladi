let gameScore = {
    player: 0,
    computer: 0,
    draws: 0,

    displayScore: function() {
        document.getElementById("playerScore").textContent = this.player;
        document.getElementById("computerScore").textContent = this.computer;
        document.getElementById("draws").textContent = this.draws;
    }
};

let choices = ["Piatra", "Hârtia", "Foarfeca"];

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
        (playerChoice === "Foarfeca" && computerChoice === "Hârtia") ||
        (playerChoice === "Hârtia" && computerChoice === "Piatra")
    ) {
        document.getElementById("result").textContent = "Ai câștigat!";
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