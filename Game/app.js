let userScore=0;
let computerScore=0;



// User generating choice
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#comp-score");

const genComputerChoice=() =>{
    //    rock, paper , sissor 
    let options=["rock","paper","sissors"];
    // between 0 and 1
    // Math.floor to remove the decimal places
    const randInx=Math.floor(Math.random()*3);
    return options[randInx];
};
const drawGame=() =>{
    
    msg.innerText="Grame was Draw. Play again";
    msg.style.backgroundColor=" rgb(2, 2, 57)";
};

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win ! `;
        msg.style.backgroundColor="green"; 

    } else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=`You lose. `;
        msg.style.backgroundColor="red";
    }
}; 

const playgame =(userChoice) =>{
    console.log("user choice = ",userChoice);
    const compChoice= genComputerChoice();
    console.log("Computer choice =",compChoice);
    // Computer generating random choice -> modular(each function doing each work )
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice === "rock"){
            userWin= compChoice === "paper"? false: true;
        }
        else if(userChoice === "paper"){
            userWin =compChoice ==="sissors"? false:true;
        }else {
            userWin = compChoice ==="rock"? false:true;
        // }else{
        //     userWin=compChoice ==="slay"?true:true;
        // }
        }
        showWinner(userWin);
    
    }
};



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playgame(userChoice);
    });
});