const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const carWidth = 50;
const carHeight = 80;
let obstacleWidth = randomInt(100,500);
let obstacleHeight = randomInt(50,400);
let obstacleBWidth = 50;
let obstacleBHeight = 50;
let obstacleCWidth = 50;
let obstacleCHeight = 50;
let carX = canvas.width / 2 - carWidth / 2;
let carY = canvas.height - carHeight - 10;
let obstacleX = Math.random() * (canvas.width - obstacleWidth);
let obstacleY = -obstacleHeight;
let obstacleBX = Math.random() * (canvas.width - obstacleWidth);
let obstacleBY = -obstacleBHeight;
let obstacleCX = Math.random() * (canvas.width - obstacleWidth);
let obstacleCY = -obstacleBHeight;
let score = 0;
let gameOver = false;
let MovingRight = true;
let obstacleCSpeed = 3; 

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

function drawObstacleB() {
    ctx.fillStyle = "green";
    ctx.fillRect(obstacleBX, obstacleBY, obstacleBWidth, obstacleBHeight);
}

function drawObstacleC() {
    ctx.fillStyle = "orange";
    ctx.fillRect(obstacleCX, obstacleCY, obstacleCWidth, obstacleCHeight);
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

function drawClear() {
    
    if (score == 50){
        document.querySelector("#clear").innerHTML= "Clear!!";
        gameover == true;
    }
    else if (gameOver == false){
        document.querySelector("#clear").innerHTML= "";
    }
}

function moveObstacle() {
    obstacleY += 4;
    if (obstacleY > canvas.height) {
        obstacleX = Math.random() * (canvas.width - obstacleWidth);
        obstacleY = -obstacleHeight;
        score++;
        obstacleWidth = randomInt(100,500);
        obstacleHeight = randomInt(50,400);
    }
}

function moveObstacleB() {
    obstacleBY += 6;
    if (obstacleBY > canvas.height) {
        obstacleBX = Math.random() * (canvas.width - obstacleBWidth);
        obstacleBY = -obstacleBHeight;
        score++;
        obstacleBWidth = 50;
        obstacleBHeight = 50;
    }
}

function moveObstacleC() {
    obstacleCY += 3;
    if (MovingRight) {
        obstacleCX += 2;
    } else {
        obstacleCX -= 2;
    }
    if (obstacleCX >= canvas.width - obstacleCWidth || obstacleCX <= 0) {
        MovingRight = !MovingRight;
    }
    if (obstacleCY > canvas.height) {
        obstacleCX = Math.random() * (canvas.width - obstacleCWidth);
        obstacleCY = -obstacleCHeight;
        score++;
        obstacleCWidth = 50;
        obstacleCHeight = 50;
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

function checkB() {
    if (carX < obstacleBX + obstacleBWidth &&
        carX + carWidth > obstacleBX &&
        carY < obstacleBY + obstacleBHeight &&
        carY + carHeight > obstacleBY) {
        gameOver = true;
    }
}

function checkC() {
    if (carX < obstacleCX + obstacleCWidth &&
        carX + carWidth > obstacleCX &&
        carY < obstacleCY + obstacleCHeight &&
        carY + carHeight > obstacleCY) {
        gameOver = true;
    }
}

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar();
    drawObstacle();
    drawObstacleB();
    drawObstacleC();
    drawScore();
    drawGameOver();
    drawClear();
    moveObstacle();
    moveObstacleB();
    moveObstacleC();
    check();
    checkB();
    checkC();
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
        obstacleBX = Math.random() * (canvas.width - obstacleWidth);
        obstacleBY = -obstacleBHeight;
        obstacleCX = Math.random() * (canvas.width - obstacleWidth);
        obstacleCY = -obstacleBHeight;

        game();
    }
    else if (event.key === "ArrowLeft" && carX > 0) {
        carX -= 15;
    } else if (event.key === "ArrowRight" && carX < canvas.width - carWidth) {
        carX += 15;
    }
});

