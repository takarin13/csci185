const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const carWidth = 50;
const carHeight = 80;
let obstacleWidth = randomInt(100, 500);
let obstacleHeight = randomInt(50, 500);
let carX = canvas.width / 2 - carWidth / 2;
let carY = canvas.height - carHeight - 10;
let obstacleX = Math.random() * (canvas.width - obstacleWidth);
let obstacleY = -obstacleHeight;
let score = 0;
let gameOver = false;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawCar() {
    ctx.fillStyle = "blue";
    ctx.fillRect(carX, carY, carWidth, carHeight);
}

function drawObstacle() {
    ctx.fillStyle = "red";
    ctx.fillRect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);
}

function drawScore() {
    document.querySelector("#score").innerHTML= "Score: " + score;
  }
  
function drawGameOver() {
    
    if (gameOver === true){
        document.querySelector("#gameOver").innerHTML= "Game Over";
    }
    else {
        document.querySelector("#gameOver").innerHTML= "";
    }
}

function cleardrawGameOver(){
    document.querySelector("#gameOver").innerHTML= "";
}

function moveObstacle() {
    obstacleY += 5;
    if (obstacleY > canvas.height) {
        obstacleX = Math.random() * (canvas.width - obstacleWidth);
        obstacleY = -obstacleHeight;
        score++;
        obstacleWidth = randomInt(100, 500);
        obstacleHeight = randomInt(50, 500);
    }
}

function check() {
    if (carX < obstacleX + obstacleWidth &&
        carX + carWidth > obstacleX &&
        carY < obstacleY + obstacleHeight &&
        carY + carHeight > obstacleY) {
        gameOver = true;
    }
}

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar();
    drawObstacle();
    drawScore();
    drawGameOver();
    moveObstacle();
    check();
    if (gameOver === false) {
        requestAnimationFrame(game)
    } else if(gameOver === true){
        drawGameOver();
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter"){
        score = 0;
        gameOver = false;
        carX = canvas.width / 2 - carWidth / 2;
        carY = canvas.height - carHeight - 10;
        obstacleX = Math.random() * (canvas.width - obstacleWidth);
        obstacleY = -obstacleHeight;
        game();
    }
    else if (event.key === "ArrowLeft" && carX > 0) {
        carX -= 15;
    } else if (event.key === "ArrowRight" && carX < canvas.width - carWidth) {
        carX += 15;
    }
});


const bts = [
    {
        nickname: 'RM',
        name:{ english:`Kim Nam Joon`, Korean:`aiueo` },
        specialties:[`Visual`, `Vocalist`]
    },
    {
        nickname: 'TM',
        name:{ english:`Tim Nam Joon`, Korean:`kakikukeko` },
        specialties:[`Visual`, `Vocalist`]
    }
]

