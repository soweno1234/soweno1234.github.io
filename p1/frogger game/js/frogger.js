// get canvas item
let continueGame = "y"
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let emoji = document.getElementById("emoji");

//get paragraph items
let keyDownOutput = document.getElementById("keydown-output");
let keyUpOutput = document.getElementById("keyup-output");





//player position and movement
let playerX = 400;
let playerY = 467;
const PLAYER_RADIUS = 20;



function drawBases() {
    ctx.fillStyle = '#7F00FF';
    ctx.fillRect(0, 445, 800, 250);

    ctx.fillRect(0, 0, 800, 40);
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
    drawBases();
    drawPlayer();
    //drawCars();
    drawImage();
    moveCars();
    carCollision();
    frogCollision();
    playerCollision();
}



// when key is pressed
function keyPressed(event) {
    //get the actual key pressed
    let key = event.keyCode;


    //move player
    if (key === 65) {
        playerX = playerX - 20
    } else if (key === 68) {
        playerX = playerX + 20
    } else if (key === 87) {
        playerY = playerY - 80
    } else if (key === 83) {
        playerY = playerY + 80
    }
}

function playerCollision() {
    //edge check
    if (playerX <= 20) {
        playerX = 20;
    } else if (playerX > 800 - PLAYER_RADIUS) {
        playerX = 800 - PLAYER_RADIUS;
    } else if (playerY < 0) {
        playerY = 18;
    } else if (playerY > 467) {
        playerY = 467

    }


}

let rocketCarWidth = 50;
let rocketCarHeight = 50;
let rocketCarX = 190;
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
let policeCarX2 = 400;
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

let spidermanWidth = 60;
let spidermanHeight = 50;
let spidermanX = 30;
let spidermanY = 40;

let spidermanWidth2 = 60;
let spidermanHeight2 = 50;
let spidermanX2 = 200;
let spidermanY2 = 40;

let spidermanWidth3 = 60;
let spidermanHeight3 = 50;
let spidermanX3 = 388;
let spidermanY3 = 40;

let spidermanWidth4 = 60;
let spidermanHeight4 = 50;
let spidermanX4 = 700;
let spidermanY4 = 40;



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
    ctx.fillRect(spidermanX, spidermanY, spidermanWidth, spidermanHeight);
    ctx.fillRect(spidermanX2, spidermanY2, spidermanWidth2, spidermanHeight2);
    ctx.fillRect(spidermanX3, spidermanY3, spidermanWidth3, spidermanHeight3);

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
    ctx.drawImage(spiderman, spidermanX, spidermanY, spidermanWidth, spidermanHeight);
    ctx.drawImage(spiderman2, spidermanX2, spidermanY2, spidermanWidth2, spidermanHeight2);
    ctx.drawImage(spiderman3, spidermanX3, spidermanY3, spidermanWidth3, spidermanHeight3);
    ctx.drawImage(spiderman4, spidermanX4, spidermanY4, spidermanWidth4, spidermanHeight4);
}


function moveCars() {
    rocketCarX = rocketCarX + 1.2
    rocketCarX2 = rocketCarX2 + 1.2
    rocketCarX3 = rocketCarX3 + 1.2
    policeCarX = policeCarX + 1.5
    policeCarX2 = policeCarX2 + 1.5
    policeCarX3 = policeCarX3 + 1.5
    truckX = truckX + 1
    truckX2 = truckX2 + 1
    pinkCarX = pinkCarX + 1.5
    pinkCarX2 = pinkCarX2 + 1.5
    pinkCarX3 = pinkCarX3 + 1.5
    spidermanX = spidermanX + .8
    spidermanX2 = spidermanX2 + .8
    spidermanX3 = spidermanX3 + .8
    spidermanX4 = spidermanX4 + .8
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
    if (spidermanX > 775 + spidermanWidth) {
        spidermanX = 0 - spidermanWidth;
    }
    if (spidermanX2 > 775 + spidermanWidth2) {
        spidermanX2 = 0 - spidermanWidth2;
    }
    if (spidermanX3 > 775 + spidermanWidth3) {
        spidermanX3 = 0 - spidermanWidth3;
    }
    if (spidermanX4 > 775 + spidermanWidth4) {
        spidermanX4 = 0 - spidermanWidth4;
    }
}

function frogCollision() {


    if (rocketCarX + 60 >= playerX - PLAYER_RADIUS / 2 &&
        rocketCarX - 10 <= playerX + PLAYER_RADIUS / 2 &&
        rocketCarY + 20 >= playerY - PLAYER_RADIUS / 2 &&
        rocketCarY - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }

    if (rocketCarX2 + 60 >= playerX - PLAYER_RADIUS / 2 &&
        rocketCarX2 - 10 <= playerX + PLAYER_RADIUS / 2 &&
        rocketCarY2 + 20 >= playerY - PLAYER_RADIUS / 2 &&
        rocketCarY2 - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }
    if (rocketCarX3 + 60 >= playerX - PLAYER_RADIUS / 2 &&
        rocketCarX3 - 10 <= playerX + PLAYER_RADIUS / 2 &&
        rocketCarY3 + 20 >= playerY - PLAYER_RADIUS / 2 &&
        rocketCarY3 - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }


    if (policeCarX + 70 >= playerX - PLAYER_RADIUS / 2 &&
        policeCarX - 10 <= playerX + PLAYER_RADIUS / 2 &&
        policeCarY + 30 >= playerY - PLAYER_RADIUS / 2 &&
        policeCarY - 10 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }
    if (policeCarX2 + 70 >= playerX - PLAYER_RADIUS / 2 &&
        policeCarX2 - 10 <= playerX + PLAYER_RADIUS / 2 &&
        policeCarY2 + 30 >= playerY - PLAYER_RADIUS / 2 &&
        policeCarY2 - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }
    if (policeCarX3 + 70 >= playerX - PLAYER_RADIUS / 2 &&
        policeCarX3 - 10 <= playerX + PLAYER_RADIUS / 2 &&
        policeCarY3 + 30 >= playerY - PLAYER_RADIUS / 2 &&
        policeCarY3 - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }

    if (truckX + 117 >= playerX - PLAYER_RADIUS / 2 &&
        truckX - 12 <= playerX + PLAYER_RADIUS / 2 &&
        truckY + 30 >= playerY - PLAYER_RADIUS / 2 &&
        truckY - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }
    if (truckX2 + 115 >= playerX - PLAYER_RADIUS / 2 &&
        truckX2 - 12 <= playerX + PLAYER_RADIUS / 2 &&
        truckY2 + 30 >= playerY - PLAYER_RADIUS / 2 &&
        truckY2 - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }

    if (pinkCarX + 62 >= playerX - PLAYER_RADIUS / 2 &&
        pinkCarX - 20 <= playerX + PLAYER_RADIUS / 2 &&
        pinkCarY + 30 >= playerY - PLAYER_RADIUS / 2 &&
        pinkCarY - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }
    if (pinkCarX2 + 62 >= playerX - PLAYER_RADIUS / 2 &&
        pinkCarX2 - 20 <= playerX + PLAYER_RADIUS / 2 &&
        pinkCarY2 + 30 >= playerY - PLAYER_RADIUS / 2 &&
        pinkCarY2 - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }
    if (pinkCarX3 + 62 >= playerX - PLAYER_RADIUS / 2 &&
        pinkCarX3 - 20 <= playerX + PLAYER_RADIUS / 2 &&
        pinkCarY3 + 30 >= playerY - PLAYER_RADIUS / 2 &&
        pinkCarY3 - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }
    if (pinkCarX3 + 62 >= playerX - PLAYER_RADIUS / 2 &&
        pinkCarX3 - 20 <= playerX + PLAYER_RADIUS / 2 &&
        pinkCarY3 + 30 >= playerY - PLAYER_RADIUS / 2 &&
        pinkCarY3 - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }

    if (spidermanX + 70 >= playerX - PLAYER_RADIUS / 2 &&
        spidermanX - 17 <= playerX + PLAYER_RADIUS / 2 &&
        spidermanY + 10 >= playerY - PLAYER_RADIUS / 2 &&
        spidermanY - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }
    if (spidermanX2 + 70 >= playerX - PLAYER_RADIUS / 2 &&
        spidermanX2 - 17 <= playerX + PLAYER_RADIUS / 2 &&
        spidermanY2 + 10 >= playerY - PLAYER_RADIUS / 2 &&
        spidermanY2 - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }
    if (spidermanX3 + 70 >= playerX - PLAYER_RADIUS / 2 &&
        spidermanX3 - 17 <= playerX + PLAYER_RADIUS / 2 &&
        spidermanY3 + 10 >= playerY - PLAYER_RADIUS / 2 &&
        spidermanY3 - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }
    if (spidermanX4 + 70 >= playerX - PLAYER_RADIUS / 2 &&
        spidermanX4 - 17 <= playerX + PLAYER_RADIUS / 2 &&
        spidermanY4 + 10 >= playerY - PLAYER_RADIUS / 2 &&
        spidermanY4 - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 467;
    }

}


setInterval(refreshUI, 1);