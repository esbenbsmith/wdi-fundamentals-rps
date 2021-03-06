//   Provided Code - Please Don't Edit   //
////////////////////////////////////////////////
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
//           Write Your Code Below            //
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = "tie";
    }
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";
        } 
        else {
            winner = "computer";
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    else if (playerMove === "paper") {
        if (computerMove === "scissors") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

    do {
        var playerMove = getInput();
        var computerMove = randomPlay();
        playerMove = getPlayerMove(playerMove);
        computerMove = getComputerMove(computerMove);
        var winner = getWinner(playerMove, computerMove);
        
        if (winner==="tie") {
            console.log("Tie")
        }
           else if (winner === "player") {
            playerWins++;
            console.log("Player win");
            console.log(array[playerWins]);
           
        } else if (winner === "computer") {
            console.log("Computer win");
            computerWins++;
        }
    } while (playerWins !== 5 || computerWins !== 5);

    if(playerWins === 5) {
        console.log('PLayer won');
    } else {
        console.log('Computer won');
    }
    return [playerWins, computerWins];
}
var array = ['zeroth', 'first', 'second','third','fourth','victory!'];


playToFive();