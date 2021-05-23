const game = () =>{
    let pScore = 0;
    let cScore = 0;
}


const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorbtn = document.getElementById('scissor');
const playerOption = [rockbtn,paperbtn,scissorbtn];
const computerOption = ["rock","paper","sissor"];
const result = document.querySelector(".result");
const computerNumber = Math.floor(Math.random()*computerOption.length);
const computerChoice = computerOption[computerNumber];
const alertbox = document.querySelector(".alerts");

console.log(computerChoice);

function rocks() {
    if (computerChoice  == "rock") {
        result.textContent = "its a tie";
    }
    else if (computerChoice == "paper") {
        result.textContent = "computer won";
    }
    else {
        result.textContent = "Player won"
    }
    alertbox.style.display = "block";
}
function papers() {
    if (computerChoice  == "rock") {
        result.textContent = "Player won";
    }
    else if (computerChoice == "paper") {
        result.textContent = "its a tie";
    }
    else {
        result.textContent = "Computer won"
    }
    alertbox.style.display = "block";
}
function scissors() {
    if (computerChoice  == "rock") {
        result.textContent = "Player won";
    }
    else if (computerChoice == "paper") {
        result.textContent = "computer won";
    }
    else {
        result.textContent = "its a tie";
    }
    alertbox.style.display = "block";
}

function reset() {
    window.location.reload();
}