// get canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let emoji = document.getElementById("emoji");

//get paragraph items
let keyDownOutput = document.getElementById("keydown-output");
let keyUpOutput = document.getElementById("keyup-output");





//player position and movement
let playerX = 250;
let playerY = 467;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 2;
const PLAYER_RADIUS = 20;



function drawBase() {
    ctx.fillStyle = '#7F00FF';
    ctx.fillRect(0, 445, 800, 250);
}


function drawPlayer() {
    //draw a filed circle at ballX and ballY
    ctx.beginPath();
    ctx.fillStyle = "#00FF00";
    ctx.arc(playerX, playerY, PLAYER_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

function refreshUI() {
    ctx.clearRect(0, 0, 800, 800);
    drawBase();
    drawPlayer();
    drawCars();
    drawImage();
    moveCars();
    carCollision();
}

// when key is pressed
function keyPressed(event) {
    //get the actual key pressed
    let key = event.keyCode;


    //move player
    if (key === 65) {
        playerX = playerX - 40
    } else if (key === 68) {
        playerX = playerX + 40
    } else if (key === 87) {
        playerY = playerY - 40
    } else if (key === 83) {
        playerY = playerY + 40
    }
}



let rocketCarWidth = 50;
let rocketCarHeight = 50;
let rocketCarX = 30;
let rocketCarY = 360;

let rocketCarWidth2 = 50;
let rocketCarHeight2 = 50;
let rocketCarX2 = 350;
let rocketCarY2 = 360;

let rocketCarWidth3 = 50;
let rocketCarHeight3 = 50;
let rocketCarX3 = 693;
let rocketCarY3 = 360;

let policeCarWidth = 60;
let policeCarHeight = 50;
let policeCarX = 30;
let policeCarY = 280;

let policeCarWidth2 = 60;
let policeCarHeight2 = 50;
let policeCarX2 = 519;
let policeCarY2 = 280;

let policeCarWidth3 = 60;
let policeCarHeight3 = 50;
let policeCarX3 = 700;
let policeCarY3 = 280;

let truckWidth = 110;
let truckHeight = 37;
let truckX = 300;
let truckY = 206;

let truckWidth2 = 110;
let truckHeight2 = 37;
let truckX2 = 590;
let truckY2 = 206;

let pinkCarWidth = 50;
let pinkCarHeight = 50;
let pinkCarX = 30;
let pinkCarY = 120;

let pinkCarWidth2 = 50;
let pinkCarHeight2 = 50;
let pinkCarX2 = 210;
let pinkCarY2 = 120;

let pinkCarWidth3 = 50;
let pinkCarHeight3 = 50;
let pinkCarX3 = 440;
let pinkCarY3 = 120;



function drawCars() {
    ctx.fillRect(rocketCarX, rocketCarY, rocketCarWidth, rocketCarHeight);
    ctx.fillRect(rocketCarX2, rocketCarY, rocketCarWidth2, rocketCarHeight2);
    ctx.fillRect(rocketCarX3, rocketCarY, rocketCarWidth3, rocketCarHeight3);
    ctx.fillRect(policeCarX, policeCarY, policeCarWidth, policeCarHeight);
    ctx.fillRect(policeCarX2, policeCarY2, policeCarWidth2, policeCarHeight2);
    ctx.fillRect(policeCarX3, policeCarY3, policeCarWidth3, policeCarHeight3);
    ctx.fillRect(truckX, truckY, truckWidth, truckHeight);
    ctx.fillRect(truckX2, truckY2, truckWidth2, truckHeight2);
    ctx.fillRect(pinkCarX, pinkCarY, pinkCarWidth, pinkCarHeight);
    ctx.fillRect(pinkCarX2, pinkCarY2, pinkCarWidth2, pinkCarHeight2);
    ctx.fillRect(pinkCarX3, pinkCarY3, pinkCarWidth3, pinkCarHeight3);

}


function drawImage() {
    ctx.drawImage(rocketCar, rocketCarX, rocketCarY, rocketCarWidth, rocketCarHeight);
    ctx.drawImage(rocketCar2, rocketCarX2, rocketCarY2, rocketCarWidth2, rocketCarHeight2);
    ctx.drawImage(rocketCar3, rocketCarX3, rocketCarY3, rocketCarWidth3, rocketCarHeight3);
    ctx.drawImage(policeCar, policeCarX, policeCarY, policeCarWidth, policeCarHeight);
    ctx.drawImage(policeCar2, policeCarX2, policeCarY2, policeCarWidth2, policeCarHeight2);
    ctx.drawImage(policeCar3, policeCarX3, policeCarY3, policeCarWidth3, policeCarHeight3);
    ctx.drawImage(truck, truckX, truckY, truckWidth, truckHeight);
    ctx.drawImage(truck2, truckX2, truckY2, truckWidth2, truckHeight2);
    ctx.drawImage(pinkCar, pinkCarX, pinkCarY, pinkCarWidth, pinkCarHeight);
    ctx.drawImage(pinkCar2, pinkCarX2, pinkCarY2, pinkCarWidth2, pinkCarHeight2);
    ctx.drawImage(pinkCar3, pinkCarX3, pinkCarY3, pinkCarWidth3, pinkCarHeight3);
}

function moveCars() {
    rocketCarX = rocketCarX + .6
    rocketCarX2 = rocketCarX2 + .6
    rocketCarX3 = rocketCarX3 + .6
    policeCarX = policeCarX + .4
    policeCarX2 = policeCarX2 + .4
    policeCarX3 = policeCarX3 + .4
    truckX = truckX + .4
    truckX2 = truckX2 + .4
    pinkCarX = pinkCarX + .4
    pinkCarX2 = pinkCarX2 + .5
    pinkCarX3 = pinkCarX3 + .5

}

function carCollision() {
    if (rocketCarX > 790 + rocketCarWidth) {
        rocketCarX = 0 - rocketCarWidth;
    }

    if (rocketCarX2 > 790 + rocketCarWidth2) {
        rocketCarX2 = 0 - rocketCarWidth2;
    }

    if (rocketCarX3 > 790 + rocketCarWidth3) {
        rocketCarX3 = 0 - rocketCarWidth3;
    }

    if (policeCarX > 775 + policeCarWidth) {
        policeCarX = 0 - policeCarWidth;
    }

    if (policeCarX2 > 775 + policeCarWidth2) {
        policeCarX2 = 0 - policeCarWidth2;
    }

    if (policeCarX3 > 775 + policeCarWidth3) {
        policeCarX3 = 0 - policeCarWidth3;
    }
    if (truckX > 735 + truckWidth) {
        truckX = 15 - truckWidth;
    }
    if (truckX2 > 735 + truckWidth2) {
        truckX2 = 15 - truckWidth2
    }
    if (pinkCarX > 790 + pinkCarWidth) {
        pinkCarX = 0 - pinkCarWidth;
    }
    if (pinkCarX2 > 790 + pinkCarWidth2) {
        pinkCarX2 = 0 - pinkCarWidth2;
    }
    if (pinkCarX3 > 790 + pinkCarWidth3) {
        pinkCarX3 = 0 - pinkCarWidth3;
    }
}







setInterval(refreshUI, 1);