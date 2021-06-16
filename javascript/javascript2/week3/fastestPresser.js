const userInput = document.getElementById("timer");
const gameStartButton = document.getElementById("start");
const newGameButton = document.getElementById("newGame");
const countOfS = document.querySelector("div.s_side p");
const countOfL = document.querySelector("div.l_side p")
const winnerTag = document.getElementById("winner");
const gameStatus = document.getElementById("gameOver");
const sCanvas = document.getElementById("s-canvas");
const lCanvas = document.getElementById("l-canvas");
let sCount;
let lCount;

const winner = () => {
    if (sCount === lCount) {
        winnerTag.innerHTML = "Game is draw !!!"
    } else if (sCount > lCount) {
        //celebrate("s-canvas");
        winnerTag.innerHTML = "S is the winner !!!🎉"
        var confettiSettingsS = { target: sCanvas };
        var confettis = new ConfettiGenerator(confettiSettingsS);
        confettis.render();

    } else {
        //celebrate("l-canvas");
        winnerTag.innerHTML = "L is the winner !!!🎉"
        var confettiSettingsL = { target: lCanvas };
        var confettil = new ConfettiGenerator(confettiSettingsL);
        confettil.render();
    }
}

gameStartButton.addEventListener("click", startGame);
function startGame() {
    newGameButton.style.backgroundColor = "green"
    gameStartButton.style.backgroundColor = "red"
    gameStatus.innerHTML = "";
    sCount = 0;
    lCount = 0;
    const TimeDuration = userInput.value;
    if (TimeDuration == "") {
        gameStatus.innerHTML = "Please enter time duration !!!"
        gameStartButton.style.backgroundColor = "green"

    } else {
        setTimeout(() => {
            gameStartButton.style.backgroundColor = "green"
            document.removeEventListener("keydown", detectKeyPress)
            gameStatus.innerHTML = "Game Over !!!";
            winner();
        }, TimeDuration * 1000);
        //key press
        document.addEventListener("keydown", detectKeyPress);
        function detectKeyPress(event) {
            if (event.key === "s") {
                sCount++;
                countOfS.innerHTML = sCount;
            } else if (event.key === "l") {
                lCount++
                countOfL.innerHTML = lCount;
            }
        }
    }
}

newGameButton.addEventListener("click", () => {
    newGameButton.style.backgroundColor = "red"
    winnerTag.innerHTML = "";
    gameStatus.innerHTML = "";
    countOfS.innerHTML = "";
    countOfL.innerHTML = "";
})