
        let humanScore = 0;
        let computerScore = 0;

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
 /*the function below gets the human choice for the game: rock, paper, scissors*/       
        function getHumanChoice() {
            let humanInput = prompt("what is your choice?");
            return humanInput.toLowerCase();
        }        
        
        
        function playRound(humanChoice, computerChoice) {
            if (computerChoice === humanChoice) {
                console.log("It's a tie!");
            }
            else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
                humanScore = humanScore +1;
                console.log("You win! rock beats scissors");
            }
            else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
                humanScore = humanScore +1;
                console.log("You win! scissors beat paper");
            }
            else if ((humanChoice === "paper") && (computerChoice === "rock")) {
                humanScore = humanScore +1;
                console.log("You win! paper beats rock");
            }
            else if ((computerChoice === "rock") && (humanChoice === "scissors")) {
                computerScore = computerScore + 1;
                console.log("You lose! rock beats scissors");
            }
            else if ((computerChoice === "scissors") && (humanChoice === "paper")) {
                computerScore = computerScore + 1;
                console.log("You lose! scissors beat paper");
            }
            else {
                computerScore = computerScore + 1;
                console.log("You lose! paper beats rock");
            }
        }

        
        function playGame() {
            let humanSelection;
            let computerSelection;

            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);

            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);

            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);

            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);

            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);

            console.log("Human Score:", humanScore);
            console.log("Computer Score:", computerScore);

            if (humanScore > computerScore) {
                console.log("Congratulations human! You won.");
            }
            else if (computerScore > humanScore) {
                console.log("Congratulations computer! You won.");
            }
            else {
                console.log("No winner! It's a tie!");
            }

        }
        playGame();