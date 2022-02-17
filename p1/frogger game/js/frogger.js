// get canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
//ball position and movement
let ballX = 250;
let ballY = 470;
let ballXDir = 8;
let ballYDir = 8;
const BALL_RADIUS = 20;
const IMG_HEIGHT = 20
const IMG_WIDTH = 20;




function drawBall() {
    //draw a filed circle at ballX and ballY
    ctx.beginPath();
    ctx.fillStyle = "#00FF00";
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

function drawBase() {
    ctx.fillStyle = '#7F00FF';
    ctx.fillRect(0, 445, 500, 250);
}


drawBase();
drawBall();