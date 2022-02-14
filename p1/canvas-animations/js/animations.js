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
    drawBall();
    moveBall();
}

// when key is pressed
function keyPressed(event) {
    //get the actual key pressed
    let key = event.keyCode;
    keyDownOutput.innerHTML = "key down code: " + key;

    //move player
    if (key === 37) {
        playerXDir = -6;
    } else if (key === 39) {
        playerXDir = 6;
    } else if (key === 38) {
        playerYDir = -6;
    } else if (key === 40) {
        playerYDir = 6;
    }
}


function keyReleased(event) {
    //get the actual key released
    let keyRelease = event.keyCode;
    keyUpOutput.innerHTML = "key up code: " + keyRelease;

    if (keyRelease === 37) {
        playerXDir = 0;
    } else if (keyRelease === 39) {
        playerXDir = 0;
    }

    if (keyRelease === 40) {
        playerYDir = 0;
    } else if (keyRelease === 38) {
        playerYDir = 0;
    }
}


let xPosition = 0;
let yPosition = 0;
let xSpeed = 1;
let ySpeed = 1;




function moveHorizontal() {
    //clear screen
    ctx.clearRect(0, 0, 500, 500);

    //draw rectangle at current position
    ctx.fillRect(xPosition, 0, 20, 20);

    //move the x position over by x pixels
    xPosition += xSpeed;


    //did I hit the wall? if so wrap around
    if (xPosition >= 500) {
        xSpeed *= -1;
    } else if (xPosition <= 0) {
        xSpeed *= -1;
    }
}






// setInterval(moveHorizontal, 5);
setInterval(refreshUI, 30);