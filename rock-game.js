
        let humanScore = 0;
        let computerScore = 0;
        let gameOver = false;

/*the function below gets the computer choice for the game: rock, paper, scissors*/
        function getComputerChoice() {
            let randomNumber = Math.floor(Math.random() * 3);
            if (randomNumber === 0) {
                return ("rock");
            }
            else if (randomNumber === 1) {
                return ("paper");
            }
            else {
                return ("scissors");
            }
        }       
        
        const message = document.querySelector("#message");
        const score = document.querySelector("#score");
        
        function playRound(humanChoice, computerChoice) {

            if (gameOver == true) {
                return;
            }
            if (computerChoice === humanChoice) {
                message.textContent = "It's a tie!";
            }
            else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
                humanScore = humanScore +1;
                message.textContent = "You win! rock beats scissors";
            }
            else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
                humanScore = humanScore +1;
                message.textContent = "You win! scissors beat paper";
            }
            else if ((humanChoice === "paper") && (computerChoice === "rock")) {
                humanScore = humanScore +1;
                message.textContent = "You win! paper beats rock";
            }
            else if ((computerChoice === "rock") && (humanChoice === "scissors")) {
                computerScore = computerScore + 1;
                message.textContent = "You lose! rock beats scissors";
            }
            else if ((computerChoice === "scissors") && (humanChoice === "paper")) {
                computerScore = computerScore + 1;
                message.textContent = "You lose! scissors beat paper";
            }
            else {
                computerScore = computerScore + 1;
                message.textContent = "You lose! paper beats rock";
            }

            score.textContent = `Human: ${humanScore}  |  computer: ${computerScore}`;

            if (humanScore === 5) {
                message.textContent = "Congratulations! You won the game!";
                gameOver = true;
            }
            else if (computerScore === 5) {
                message.textContent = "You lost! The computer won the game!";
                gameOver = true;
            }
        }

        const rockButton = document.querySelector("#rock");
        const paperButton = document.querySelector("#paper");
        const scissorsButton = document.querySelector("#scissors");

        rockButton.addEventListener("click", function() {
            playRound("rock", getComputerChoice());
        });
        paperButton.addEventListener("click", function() {
            playRound("paper", getComputerChoice());
        });
        scissorsButton.addEventListener("click", function() {
            playRound("scissors", getComputerChoice());
        });