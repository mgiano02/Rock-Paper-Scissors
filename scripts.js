//Make and call function
//Function randomly selects between numbers 1 - 100
//If number is between 1-33, choose rock
//If number is between 34-66, choose paper
//If number is between 67-100, choose scissors
//User is shown rock, paper, or scissors


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

console.log(computerPlay());