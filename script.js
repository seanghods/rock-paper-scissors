   function getComputerChoice(){
        let options = [ "rock", "paper", "scissors", ];
        let randomNumber = Math.floor(Math.random() * 3);
        return(options[randomNumber])
    }

    function playRound(playerSelection, computerSelection){
            computerSelection = getComputerChoice();
            do {
                    playerSelection = prompt("Rock, paper or scissors?")?.toLowerCase(); 
            } while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors' && playerSelection !== undefined)
            if (playerSelection == "rock" && computerSelection == "rock"){
                console.log("Tie! You both chose rock.");
            }
            else if (playerSelection == "rock" && computerSelection == "paper"){
                computerScore++;
                console.log("You lose! Paper beats rock.");
            }
            else if (playerSelection == "rock" && computerSelection == "scissors"){
                playerScore++;
                console.log("You win! Rock beats scissors.");
            }
            else if (playerSelection == "paper" && computerSelection == "rock"){
                playerScore++;
                console.log("You win! Paper beats rock.");
            }
            else if (playerSelection == "paper" && computerSelection == "paper"){
                console.log("Tie! You both chose paper.");
            }
            else if (playerSelection == "paper" && computerSelection == "scissors"){
                computerScore++;
                console.log("You lose! Scissors beats paper.");
            }
            else if (playerSelection == "scissors" && computerSelection == "rock"){
                computerScore++;
                console.log("You lose! Rock beats scissors.");
            }
            else if (playerSelection == "scissors" && computerSelection == "paper"){
                playerScore++;
                console.log("You win! Scissors beats paper.");
            }
            else if (playerSelection == "scissors" && computerSelection == "scissors"){
                console.log("Tie! You both chose scissors.");
            }
            else {
            }

    }

    function game(){
        for (let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);
        console.log(`Your score is ${playerScore}. The computer's score is ${computerScore}. That was game number ${i+1}.`);
      }
        if (playerScore > computerScore){
            console.log('Congrats! You beat the comp!');
        } else if (playerScore < computerScore){
            console.log('Dang! You lost to the comp.');
        } else {
            console.log('Oh! You guys tied.');
        }
        }

    let computerSelection = getComputerChoice();
    let playerSelection
    let playerScore = 0
    let computerScore = 0


    game();