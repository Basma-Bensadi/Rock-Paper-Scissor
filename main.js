let userScore = 0 ; 
let userScoreDsiplay = document.getElementById("user-score");
let computerScore = 0;
let draw = document.getElementById("draw");
let computerScoreDsiplay = document.getElementById("computer-score");

// getting the icons to change them
let userchoice ; 
let computerChoice;
let computerChoiceW;
let computeri = document.getElementById("computer-icon")
let useri = document.getElementById("user-icon")
//getting the buttons 
let buttons = document.querySelectorAll("button");
// the user-choice : 
buttons.forEach(button => button.addEventListener("click", userchoosed));

function userchoosed(e){
    userchoice = e.target.id
    if(userchoice === "rock"){
        useri.classList = "fa-solid fa-hand-fist";
    }else if(userchoice === "paper"){
        useri.classList = "fa-solid fa-hand";
    }else{
        useri.classList = "fa-solid fa-hand-scissors"
    }
    computerchoosed();
    winner()
}
function computerchoosed(){
    computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0){
        computeri.classList ="fa-solid fa-hand-fist";
        computerChoiceW = "rock"
    }else if(computerChoice === 1){
        computeri.classList = "fa-solid fa-hand";
        computerChoiceW = "paper"
    }else{
        computeri.classList = "fa-solid fa-hand-scissors"
        computerChoiceW = "scissor"
    }
}
// who is the winner  ? 
function winner(){
    if (computerChoiceW === userchoice ){
        draw.textContent = "Draw"
        setTimeout(()=>{
            draw.textContent = ""
        },600)
    }else if(computerChoiceW === "rock" && userchoice ==="scissor"){
        computerScore += 1;
        computerScoreDsiplay.innerText = computerScore;
    }else if(computerChoiceW === "rock" && userchoice ==="paper"){
        userScore+= 1;
        userScoreDsiplay.innerText = userScore;
    }else if(computerChoiceW === "scissor" && userchoice ==="paper"){
        computerScore+= 1;
        computerScoreDsiplay.innerText = computerScore;
    }else if(computerChoiceW === "scissor" && userchoice ==="rock"){
        userScore+= 1;
        userScoreDsiplay.innerText = userScore;
    }else if(computerChoiceW === "paper" && userchoice ==="rock"){
        computerScore+= 1;
        computerScoreDsiplay.innerText = computerScore;
    }else if(computerChoiceW === "paper" && userchoice ==="scissor"){
        userScore+= 1;
        userScoreDsiplay.innerText = userScore;
    }
}
