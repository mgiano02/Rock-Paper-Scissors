//Make and call function
//Function randomly selects between numbers 0 - 2
//If number is 0, choose rock
//If number is 1, choose paper
//If number is 2, choose scissors
//Comp play is shown in console as rock, paper, or scissors


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

function round(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "Tie!";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose!";
        }
        else {
            return "You win!";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose!";
        }
        else {
            return "You win!";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose!";
        }
        else {
            return "You win!";
        }
    }

}


let playerSelection = prompt("Rock, Paper, Scissors!", "rock").toLowerCase();
let computerSelection = computerPlay();

console.log(round(playerSelection, computerSelection));

console.log(computerSelection);

//console.log(computerPlay());

//Start game
//Give player prompt to play move
//Let comp play move after
//Compare results and determine who wins
//-What happens when rock is played
//-What happens when paper is played
//-What happens when scissors is played
//-What happens when there is a tie
//Return alert stating winner

// function game(playerSelection, computerSelection) {
//     let move = prompt("Rock, Paper, Scissors!", "rock");
//     let compMove = computerPlay()

//---Switch process---
//     switch (move === "rock") {
//         case 1:
//             if (compMove === "rock") {
//                 alert("Tie!");
//             }
//             if (compMove === "paper") {
//                 alert("You lose!");
//             }
//             else {
//                 alert("You win!");
//             }
//         break;
//         case 2:
//             if (compMove === "rock") {
//                 alert("Tie!");
//             }
//             if (compMove === "paper") {
//                 alert("You lose!");
//             }
//             else {
//                 alert("You win!");
//             }
//         break;
//         case 3:
//             if (compMove === "rock") {
//                 alert("Tie!");
//             }
//             if (compMove === "paper") {
//                 alert("You lose!");
//             }
//             else {
//                 alert("You win!");
//             }
//         break;
//     }
// }
//---Switch process---



//---If statements inside if statements---
//     if (move === "rock") {
//         if (compMove === "rock") {
//             alert("Tie!");
//         }
//         if (compMove === "paper") {
//             alert("You lose!");
//         }
//         else {
//             alert("You win!");
//         }

//     }
//     if (move === "paper") {
//         if (compMove === "rock") {
//             alert("You win!");
//         }
//         if (compMove === "paper") {
//             alert("Tie!");
//         }
//         else {
//             alert("You lose!");
//         }

//     } else {
//         if (compMove === "rock") {
//             alert("You lose!");
//         }
//         if (compMove === "paper") {
//             alert("You win!");
//         }
//         else {
//             alert("Tie!");
//         }
//     }
// }
//---If statements inside if statements---

//game();
// ---Function within a function to get choices (rock, paper, scissors)---
//     function rock() {
// //        let rockAnswer

//         if (computerPlay() === "rock") {
//             return "Tie!";
//         } else if (computerPlay() === "paper") {
//             return "You lose!";
//         } else {
//             return "You win!";
//         }
//     }

//     function paper() {
// //        let paperAnswer

//         if (computerPlay() === "rock") {
//             return "You win!";
//         } else if (computerPlay() === "paper") {
//             return "Tie!";
//         } else {
//             return "You lose!";
//         }
//     }

//     function scissors() {
// //        let scissorsAnswer

//         if (computerPlay() === "rock") {
//             return "You lose!";
//         } else if (computerPlay() === "paper") {
//             return "You win!";
//         } else {
//             return "Tie!";
//         }
//     }

//     if (move === "Rock") {
//         alert(rock());
//     } else if (move === "paper") {
//         alert(paper());
//     } else {
//         alert(scissors());
//     }
//---Function within a function to get choices (rock,paper, scissors)---    




//    let results = alert("You win");

//     if ((move === "rock") && (computerPlay === "rock")) {
//         return "Tie - Both chose rock!";
//      } else if ((move ==="rock") && (computerPlay === "paper")) {
//          return "You lose! Paper beats rock.";
//      } else ((move === "rock") && (computerPlay === "scissors")) {
//          return " You win! Scissors beats rock."
//      }