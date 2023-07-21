const paperButton = document.querySelector(".paperbutton");
const scissorsButton = document.querySelector(".scissorsbutton");
const rockButton = document.querySelector(".rockbutton");  
const playerScoreCounter = document.querySelector('.playerscore');
const computerScoreCounter = document.querySelector('.computerscore');
const scoreMessage = document.querySelector('h3');
let computerSelection;
let playerSelection;
let playerScore = 0 
let computerScore = 0
   
   
function getComputerChoice(){
    let options = [ "rock", "paper", "scissors", ];
    let randomNumber = Math.floor(Math.random() * 3);
    return(options[randomNumber])
}

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "rock"){
        scoreMessage.innerHTML = "Tie! You both chose rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        scoreMessage.innerHTML = "You lose! Paper beats rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        scoreMessage.innerHTML = "You win! Rock beats scissors.";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        scoreMessage.innerHTML = "You win! Paper beats rock.";
    }
    else if (playerSelection == "paper" && computerSelection == "paper"){
        scoreMessage.innerHTML = "Tie! You both chose paper.";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        scoreMessage.innerHTML = "You lose! Scissors beats paper.";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        scoreMessage.innerHTML = "You lose! Rock beats scissors.";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        scoreMessage.innerHTML = "You win! Scissors beats paper.";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors"){
        scoreMessage.innerHTML = "Tie! You both chose scissors.";
    }
    else {
    }
    updateScore();
    if (playerScore == 5 || computerScore == 5) endGame();
}


paperButton.addEventListener('click', () => {
    playRound('paper');
})
scissorsButton.addEventListener('click', () => {
    playRound('scissors');
})
rockButton.addEventListener('click', () => {
    playRound('rock');
})

function updateScore() {
    playerScoreCounter.innerHTML = `You: ${playerScore}`;
    computerScoreCounter.innerHTML = `Computer: ${computerScore}`;
}

function endGame() {
    if (playerScore == 5) {
        scoreMessage.innerHTML = 'You win! Try again?'
    } else {
        scoreMessage.innerHTML = 'You lost! Try again?'
    }
    playerScore = 0;
    computerScore = 0;
    updateScore();
}



    // function game(){
    //     for (let i = 0; i < 5; i++){
    //     playRound(playerSelection, computerSelection);
    //     console.log(`Your score is ${playerScore}. The computer's score is ${computerScore}. That was game number ${i+1}.`);
    //   }
    //     if (playerScore > computerScore){
    //         console.log('Congrats! You beat the comp!');
    //     } else if (playerScore < computerScore){
    //         console.log('Dang! You lost to the comp.');
    //     } else {
    //         console.log('Oh! You guys tied.');
    //     }
    //     }
    // game();