// 1) Crear una función llamada getComputerChoice.
// 2) crear un array con “rock”, “paper” or “scissors”, utilizar random para devolver uno al azar.
// 3) probar la función utilizando console.log o browser developer tools.
// 4) Crear una función getHumanChoice donde permita al usuario elegir “rock”, “paper” or “scissors”. usar "prompt".
// 5) probar la función del usuario.
// 6) Crear 2 variables globales una llamada humanScore y otra computerScore, para llevar el control del marcador.
// 7) Crear una nueva función llamada playRound, que reciba 2 argumentos (humanChoice, computerChoice).


// Logica de la función
// Se selecciona un número entre 0 y 1 usando random
// El resultado se multiplica por la longitud del Array usando el método length
// El resultado se redondea hacia abajo usando floor y ya tenemos la posición del elemento en el array items[posición]


let humanScore = 0
let computerScore = 0

const getComputerChoice = ()=> {
    const items = ["rock", "paper", "scissors"];
    const randomItems = items[(Math.floor(Math.random() * items.length))];
    return randomItems;
}

const getHumanChoice = ()=> {
    const userChoice = parseInt(prompt("Select an option: 1) rock, 2) paper, 3) scissors"));
    if (userChoice == 1) {
        return "rock";
    } else if (userChoice == 2) {
        return "paper";
    } else if (userChoice == 3) {
        return "scissors";
    } else {
        console.log("You selected an invalid option")
    }
}

const playRound = (humanChoice, computerChoice)=> {

    if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! rock beats scissors");
        console.log(`The computer choose ${computerChoice}`)
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("you win! scissors beats paper");
        console.log(`The computer choose ${computerChoice}`)
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("you win! paper beats rock");
        console.log(`The computer choose ${computerChoice}`)
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("you win! paper beats rock");
        console.log(`The computer choose ${computerChoice}`)
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`The computer choose ${computerChoice}`)
        console.log("you draw!");
    } else {
        console.log("You lose!");
        console.log(`The computer choose ${computerChoice}`)
        computerScore++;
    }
}

const playGame = ()=> {
    for(i=0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(humanScore);
        console.log(computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You are the best!");
    } else {
        console.log("You are the worst of the world");
    }
}


