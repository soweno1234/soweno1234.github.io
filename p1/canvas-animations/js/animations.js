// get canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

//get paragraph items
let keyDownOutput = document.getElementById("keydown-output");
let keyUpOutput = document.getElementById("keyup-output");


//player position and movement
let playerX = 250;
let playerY = 250;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 2;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;

//ball position and movement
let ballX = 100;
let ballY = 100;
let ballXDir = 8;
let ballYDir = 8;
const BALL_RADIUS = 20;
const IMG_HEIGHT = 20
const IMG_WIDTH = 20;



function drawPlayer() {
    ctx.fillRect(playerX, playerY, PADDLE_WIDTH, PADDLE_HEIGHT);
}


function movePlayer() {
    playerX += playerSpeed * playerXDir;
    playerY += playerSpeed * playerYDir;

    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 500 - PADDLE_WIDTH) {
        playerX = 500 - PADDLE_WIDTH;
    } else if (playerY < 0) {
        playerY = 0;
    } else if (playerY > 500 - PADDLE_HEIGHT) {
        playerY = 500 - PADDLE_HEIGHT
    }
}

function drawBall() {
    //draw a filed circle at ballX and ballY
    ctx.beginPath();
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

function drawImage() {
    ctx.drawImage(emoji, ballX, ballY, IMG_WIDTH, IMG_HEIGHT);
}

function moveBall() {

    ballX += ballXDir;
    ballY += ballYDir;

}

function checkBallCollision() {

    //check vertical wall
    if ((ballY > 500 - BALL_RADIUS) || (ballY < 0 + BALL_RADIUS)) {
        ballYDir = ballYDir * -1
        ballYDir = ballYDir * 1.01

    }

    if ((ballX > 500 - BALL_RADIUS) || (ballX < 0 + BALL_RADIUS)) {
        ballXDir = ballXDir * -1;
        ballXDir = ballXDir * 1.01;
    }

    //check for paddle collision
    if (ballX + BALL_RADIUS >= playerX &&
        ballX - BALL_RADIUS <= playerX + PADDLE_WIDTH &&
        ballY + BALL_RADIUS >= playerY &&
        ballY - BALL_RADIUS <= playerY + PADDLE_HEIGHT)
        ballYDir = ballYDir * -1;
}


function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    checkBallCollision();
    //drawBall();

    moveBall();
    drawImage();
}

// when key is pressed
function keyPressed(event) {
    //get the actual key pressed
    let key = event.keyCode;


    //move player
    if (key === 65) {
        playerX = playerX - 44
    } else if (key === 68) {
        playerX = playerX + 44
    } else if (key === 87) {
        playerY = playerY - 44
    } else if (key === 83) {
        playerY = playerY + 44
    }
}


function keyReleased(event) {
    //get the actual key released
    let keyRelease = event.keyCode;
    keyUpOutput.innerHTML = "key up code: " + keyRelease;

    if (keyRelease === 65) {
        playerXDir = 0;
    } else if (keyRelease === 68) {
        playerXDir = 0;
    }

    if (keyRelease === 87) {
        playerYDir = 0;
    } else if (keyRelease === 83) {
        playerYDir = 0;
    }
}











// setInterval(moveHorizontal, 5);
setInterval(refreshUI, 30);