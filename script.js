document.getElementById("Rock").addEventListener("click", maybeGame); 
document.getElementById("Paper").addEventListener("click", maybeGame);
document.getElementById("Scissors").addEventListener("click", maybeGame);/*as the Computer Guess is randomly generated each time runGame() is called, 
the Computer Guess changes every time the player makes a guess by clicking on one of the images.*/
let playerPick;
let turn=0;
let result = "";
function maybeGame(){
    while(turn<4){ //using a WHILE LOOP to determine when the game is playable i.e. until the player wins or has taken 3 turns
        runGame(); //described below
        turn=turn+1;
        if((result=="win")||(turn==3)){
            document.getElementById("gameOver").innerHTML="Game Over! Please refresh the page to play again.";
            turn=4;}
            return turn;
        }
}
function runGame(){
    document.getElementById("gameOver").innerHTML=""
    let randomNum = Math.floor(Math.random() * 3) + 1;//computer picks a number from 1 to 3
    let computerPick;
    if (randomNum==1){
        computerPick="Rock";
        }else if (randomNum==2){
            computerPick="Paper";
        }else if(randomNum==3){
            computerPick="Scissors";
            }
    if(playerPick==computerPick){ //draw
        result = "draw";
        document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
        }else if (playerPick=="Rock"){ //ROCK
            if(computerPick=="Paper"){ //paper
                result = "lose";
                document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                    }else if(computerPick=="Scissors"){ //scissors //BUT I COULD HAVE JUST USED "else" on the last option of al of these because the DRAW scenario is checked for earlier. 
                        result = "win";
                        document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                }
        }else if(playerPick=="Paper"){ //PAPER
            if(computerPick=="Rock"){ //rock
                result = "win";
                document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                    }else if(computerPick=="Scissors"){ //scissors
                        result = "lose";
                        document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                }
        }else if(playerPick=="Scissors"){ //SCISSORS
            if(computerPick=="Rock"){ //rock
                    result = "lose";
                    document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                }else if(computerPick=="Paper"){ //paper
                    result = "win";
                    document.getElementById("gameResult").innerHTML="You picked "+playerPick+". The computer picked "+computerPick+", so you "+result+"!";
                }
        }
}