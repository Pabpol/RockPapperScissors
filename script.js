let playerScore = 0;
let cpuScore = 0;
const playerScore_span = document.getElementById('playerScore');
const cpuScore_span = document.getElementById('cpuScore');
const result = document.querySelector('.result > p')
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerPick = document.getElementById('playerPick');
const cpuPick = document.getElementById('cpuPick');
const modal = document.getElementById('simpleModal');
const modalHeader = document.querySelector('.modal-header > h2');
const modalBody = document.querySelector('.modal-body > p');
const closeModalBtn = document.querySelector('.closeBtn');
const playAgain = document.querySelector('.play-again >a');



const getCpuSelection = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const showSelection = (playerSelection, cpuSelection) => {
    switch (playerSelection) {
        case "rock":
            playerPick.style.display = 'inline';
            playerPick.src = 'images/r-trimed.png'
            break;
        case "paper":
            playerPick.style.display = 'inline';
            playerPick.src = 'images/p-trimed.png'
            break;
        case "scissors":
            playerPick.style.display = 'inline';
            playerPick.src = 'images/s-trimed.png'
            break;
    }
    switch (cpuSelection) {
        case "rock":
            cpuPick.style.display = 'inline'
            cpuPick.src = 'images/r-trimed.png'
            break;
        case "paper":
            cpuPick.style.display = 'inline'
            cpuPick.src = 'images/p-trimed.png'
            break;
        case "scissors":
            cpuPick.style.display = 'inline'
            cpuPick.src = 'images/s-trimed.png'
            break;
    }
}

const game = (playerSelection) => {


    if (playerScore < 5 && cpuScore < 5) {
        const cpuSelection = getCpuSelection();
        switch (playerSelection + cpuSelection) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                console.log("you win");
                console.log('you pick ' + playerSelection);
                console.log('cpu pick ' + cpuSelection);
                showSelection(playerSelection, cpuSelection);
                playerScore++;
                playerScore_span.innerHTML = playerScore;
                result.innerHTML = 'You win! ' + playerSelection + ' beats ' + cpuSelection;
                break;
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                console.log("you lose");
                console.log('you pick ' + playerSelection);
                console.log('cpu pick ' + cpuSelection);
                showSelection(playerSelection, cpuSelection);
                cpuScore++;
                cpuScore_span.innerHTML = cpuScore;
                result.innerHTML = 'You lose! ' + cpuSelection + ' beats ' + playerSelection;

                break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                console.log("it's a draw");
                console.log('you pick ' + playerSelection);
                console.log('cpu pick ' + cpuSelection);
                showSelection(playerSelection, cpuSelection);
                result.innerHTML = "It's a draw";

                break;
        }
    }if (playerScore == 5 || cpuScore == 5){
        const openModal = () => modal.style.display = 'block';
        const closeModal = () => modal.style.display = 'none';
        closeModalBtn.addEventListener('click', () => closeModal());

        openModal();
        if (playerScore === 5) {
            modalHeader.innerHTML = 'CONGRATS! YOU WON.';
            modalBody.innerHTML = `You are luckiest than Machina.`;
        } else {
            modalHeader.innerHTML = 'OMG! YOU LOST.';
            modalBody.innerHTML = `So sad, Machina beated you.`;
        }
        playAgain.addEventListener('click', () => document.location.reload(true));
    }

}

const main = () => {

    rock.addEventListener('click', () => game('rock'));
    paper.addEventListener('click', () => game('paper'));
    scissors.addEventListener('click', () => game('scissors'));
}



main();