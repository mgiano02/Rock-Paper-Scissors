//Make and call function
//Function randomly selects between numbers 0 - 2
//If number is 0, choose rock
//If number is 1, choose paper
//If number is 2, choose scissors
//Comp play is shown in console as rock, paper, or scissors

//Start round
//Give player prompt to play move
//Let comp play move after
//Compare results and determine who wins
//-What happens when rock is played
//-What happens when paper is played
//-What happens when scissors is played
//-What happens when there is a tie
//Return alert stating winner

//--Create game that plays 5 rounds and gives a winner--
//Initiate game (Call on page load)
//Play round (Call at start of game() function)
//Keep score of results (Have variable store results of winner. Need to figure out how to add results 
  //from multiple games. Maybe one variable for each player and ++ for each win.)
//Play another round until 5 rounds are completed (Loop until 5 games are played/scored)
//-Have a function call a loop that starts a round
//-Round should start player and computer choosing new options
//Determine winner after 5 rounds/after loop ends (Conditional statement to tally results based on 
  //previous variables)
//Declare winner (console.log() the winner)


//Gives computer random choice of R/P/S
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


//Compares player and computer choices from other returned functions. Returns winner of round and 
//tallies score after each round
function round(playerSelection, computerSelection) {
    
    if (computerSelection === playerSelection) {
        roundWinner.textContent = "Draw!";
        return playerScore, computerScore;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            ++computerScore;
            roundWinner.textContent = "You lose! Paper beats rock.";
            return playerScore, computerScore;
        }
        else {
            ++playerScore;
            roundWinner.textContent = "You win! Rock beats scissors.";
            return playerScore, computerScore;
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            ++computerScore;
            roundWinner.textContent = "You lose! Scissors beats paper."
            return playerScore, computerScore;
        }
        else {
            ++playerScore;
            roundWinner.textContent = "You win! Paper beats rock."
            return playerScore, computerScore;
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            ++computerScore;
            roundWinner.textContent = "You lose! Rock beats scissors."
            return playerScore, computerScore;
        }
        else {
            ++playerScore;
            roundWinner.textContent = "You win! Scissors beats paper."
            return playerScore, computerScore;
        }
    }

}


let playerScore = 0;
let computerScore = 0;


//Gives prompt for player choice, call computer choice, and loops 5 rounds and logs winner of each round 
// function game() {
// //     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Rock, Paper, Scissors!", "rock").toLowerCase();
//         let computerSelection = computerPlay();
//         console.log("Computer chose " + computerSelection);
//         console.log(round(playerSelection, computerSelection));
//         console.log("You have a score of " + playerScore + " and the computer has a score of " 
//           + computerScore);
// //     }
// }


// game();


//Gives conditions for winner of the 5 round game
        // if (playerScore > computerScore) {
        //     console.log("You win the game!");
        //  }  
        //     else if (playerScore === computerScore) {
        //     console.log("The game ends in a draw!"); 
        //  }
        //     else {
        //     console.log("You lose the game!");
        //     }


const results = document.querySelector('#results');

const activeScore = document.createElement('div');
activeScore.classList.add('activeScore');

const roundWinner = document.createElement('div');
roundWinner.classList.add('roundWinner');

const finalScore = document.createElement('div');
finalScore.classList.add('finalScore');

function displayWinner(playerScore, computerScore) {
    if ((playerScore > computerScore) && (playerScore == 5)) {
        finalScore.textContent = "You win!";
        playerScore = undefined;
        computerScore = undefined;
    } else if ((computerScore > playerScore) && (computerScore == 5)) {
        finalScore.textContent = "You lose!";
        playerScore = undefined;
        computerScore = undefined;
    } else {
        finalScore.textContent = "";
    }
}

results.appendChild(activeScore);
results.appendChild(roundWinner);
results.appendChild(finalScore);


const rock = document.querySelector('#rock');
rock.addEventListener('click', function(){
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    round(playerSelection, computerSelection);
    activeScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
    displayWinner(playerScore, computerScore);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    round(playerSelection, computerSelection);
    activeScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
    displayWinner(playerScore, computerScore);
});


const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){
    let playerSelection = "scissors";
    let computerSelection = computerPlay();
    round(playerSelection, computerSelection);
    activeScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
    displayWinner(playerScore, computerScore);
});