// get canvas item
let continueGame = "y"
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");


//car images 
let rocketCar = document.getElementById("rocketCar");
let rocketCar2 = document.getElementById("rocketCar2");
let rocketCar3 = document.getElementById("rocketCar3");
let policeCar = document.getElementById("policeCar");
let policeCar2 = document.getElementById("policeCar2");
let policeCar3 = document.getElementById("policeCar3");
let truck = document.getElementById("truck");
let truck2 = document.getElementById("truck2");
let pinkCar = document.getElementById("pinkCar");
let pinkCar2 = document.getElementById("pinkCar2");
let pinkCar3 = document.getElementById("pinkCar3");
let spiderman = document.getElementById("spiderman");
let spiderman2 = document.getElementById("spiderman2");
let spiderman3 = document.getElementById("spiderman3");
let spiderman4 = document.getElementById("spiderman4");

//player position and movement
let playerX = 400;
let playerY = 475;
let playerOrientation = 1;
const PLAYER_RADIUS = 20;

//score and play again features
let score = 0;
let lives = 5;
let hasWon = false;


function refreshUI() {
    let scoreParagraph = document.getElementById("your-score");
    scoreParagraph.innerHTML = score;

    let livesParagraph = document.getElementById("your-lives");
    livesParagraph.innerHTML = lives;


    ctx.clearRect(0, 0, 800, 800);
    drawPlayer();
    drawCars();
    moveCars();
    carCollision();
    frogCollision();
    playerCollision();
    scoreCounter();


    if (lives === 0) {
        console.log(lives)
        livesParagraph.innerHTML = lives;
        continueGame = prompt("Game over! Would you like to play again (y/n)?");

        if (continueGame === "y") {
            restart();
        } else if (continueGame === "n") {
            clearInterval(loop);

            alert("Thanks for playing!");


        }
    }


    function restart() {

        score = 0;
        lives = 5;
    }
}


function resetPlayer() {
    //bring player back to starting position
    playerX = 400;
    playerY = 475;
    hasWon = false;
}

function scoreCounter() {
    if (playerY === 25 && !hasWon) {
        score++;
        hasWon = true;
        setTimeout(resetPlayer, 1000)

    }
}



//drawing the different frog variations when it is pointing in different directions
function drawPlayer() {
    if (playerOrientation === 1) {
        ctx.drawImage(frogup, playerX - PLAYER_RADIUS, playerY - PLAYER_RADIUS, PLAYER_RADIUS * 2, PLAYER_RADIUS * 2);
    } else if (playerOrientation === 2) {
        ctx.drawImage(frogdown, playerX - PLAYER_RADIUS, playerY - PLAYER_RADIUS, PLAYER_RADIUS * 2, PLAYER_RADIUS * 2);
    } else if (playerOrientation === 3) {
        ctx.drawImage(frogright, playerX - PLAYER_RADIUS, playerY - PLAYER_RADIUS, PLAYER_RADIUS * 2, PLAYER_RADIUS * 2);
    } else if (playerOrientation === 4) {
        ctx.drawImage(frogleft, playerX - PLAYER_RADIUS, playerY - PLAYER_RADIUS, PLAYER_RADIUS * 2, PLAYER_RADIUS * 2);
    }
}


// when key is pressed
function keyPressed(event) {
    //get the actual key pressed
    let key = event.keyCode;


    //move player
    if (key === 65) {
        playerX = playerX - 40;
        playerOrientation = 4;
    } else if (key === 68) {
        playerX = playerX + 40;
        playerOrientation = 3;

    } else if (key === 87) {
        playerY = playerY - 75;
        playerOrientation = 1;

    } else if (key === 83) {
        playerY = playerY + 75;
        playerOrientation = 2;

    }
}



function playerCollision() {
    //edge check
    if (playerX <= 20) {
        playerX = 20;
    } else if (playerX >= 780) {
        playerX = 780;
    } else if (playerY <= 30) {
        playerY = 25;
    } else if (playerY >= 500) {
        playerY = 475
    }
}

let xPositions = [190, 350, 693, 30, 400, 700, 300, 590, 30, 210, 440, 80, 200, 388, 700];
let yPositions = [372, 372, 372, 300, 300, 300, 228, 228, 148, 148, 148, 72, 72, 72, 72];
let widths = [50, 50, 50, 60, 60, 60, 110, 110, 50, 50, 50, 60, 60, 60, 60];
let heights = [50, 50, 50, 50, 50, 50, 37, 37, 50, 50, 50, 50, 50, 50, 50];
let imageID = ["rocketCar", "rocketCar2", "rocketCar3", "policeCar", "policeCar2", "policeCar3", "truck", "truck2", "pinkCar", "pinkCar2", "pinkCar3", "spiderman", "spiderman2", "spiderman3", "spiderman4"];
let carSpeed = [1, 1, 1, 1.5, 1.5, 1.5, 1, 1, 1.2, 1.2, 1.2, .8, .8, .8, .8];
let collisionDistance = [790, 790, 790, 775, 775, 775, 735, 735, 790, 790, 790, 775, 775, 775, 775];

function drawCars() {
    for (let i = 0; i < xPositions.length; i++) {
        ctx.drawImage(document.getElementById(imageID[i]), xPositions[i], yPositions[i], widths[i], heights[i]);
    }
}

function moveCars() {
    for (let i = 0; i < xPositions.length; i++) {
        xPositions[i] = xPositions[i] + carSpeed[i];
    }
}

function carCollision() {
    for (let i = 0; i < xPositions.length; i++) {
        if (xPositions[i] > collisionDistance[i] + widths[i]) {
            xPositions[i] = 0 - widths[i]
        }
    }
}

function frogCollision() {

    if (xPositions[0] + 60 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[0] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[0] + 20 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[0] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }

    if (xPositions[1] + 60 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[1] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[1] + 20 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[1] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[2] + 60 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[2] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[2] + 20 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[2] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }


    if (xPositions[3] + 70 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[3] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[3] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[3] - 10 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[4] + 70 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[4] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[4] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[4] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[5] + 70 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[5] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[5] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[5] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }

    if (xPositions[6] + 117 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[6] - 12 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[6] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[6] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[7] + 115 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[7] - 12 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[7] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[7] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }

    if (xPositions[8] + 62 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[8] - 20 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[8] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[8] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[9] + 62 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[9] - 20 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[9] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[9] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[10] + 62 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[10] - 20 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[10] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[10] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[11] + 70 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[11] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[11] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[11] - 10 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }

    if (xPositions[12] + 70 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[12] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[12] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[12] - 10 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[13] + 70 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[13] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[13] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[13] - 10 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[14] + 70 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[14] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[14] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[14] - 10 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }

}

let loop = setInterval(refreshUI, 3);