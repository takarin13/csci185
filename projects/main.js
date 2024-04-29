
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const carWidth = 50;
const carHeight = 80;
let obstacleWidth = randomInt(100,500);
let obstacleHeight = randomInt(50,100);

let carX = canvas.width / 2;
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
  
  function drawGameOverText() {
    document.querySelector("#gameOver").innerHTML= "Game Over";
  }

function moveObstacle() {
    obstacleY += 5;
    if (obstacleY > canvas.height) {
        obstacleX = Math.random() * (canvas.width - obstacleWidth);
        obstacleY = -obstacleHeight;
        score++;
        obstacleWidth = randomInt(100,500);
        obstacleHeight = randomInt(50,500);
    }
}

function checkCollision() {
    if (carX < obstacleX + obstacleWidth &&
        carX + carWidth > obstacleX &&
        carY < obstacleY + obstacleHeight &&
        carY + carHeight > obstacleY) {
        gameOver = true;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar();
    drawObstacle();
    drawScore();
    moveObstacle();
    checkCollision();
    if (gameOver === false) {
        requestAnimationFrame(draw);
    } else {
        drawGameOverText();
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" && carX > 0) {
        carX -= 10;
    } else if (event.key === "ArrowRight" && carX < canvas.width - carWidth) {
        carX += 10;
    }
});

draw();