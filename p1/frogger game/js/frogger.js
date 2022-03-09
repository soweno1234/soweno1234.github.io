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



function refreshPowerup() {
    drawPowerup();

}

//refresh function that refreshes variables/functions
function refreshUI() {
    let scoreParagraph = document.getElementById("your-score"); //acquire ID for Score HTML element
    scoreParagraph.innerHTML = score; //assign the html element to the score variable

    let livesParagraph = document.getElementById("your-lives"); //acquire ID for Lives HTML element
    livesParagraph.innerHTML = lives; //assign the html element to the lives variable


    ctx.clearRect(0, 0, 800, 800); //clear canvas
    drawPlayer(); //draws the player
    drawCars(); //draws the cars
    moveCars(); //moves the cars
    carCollision(); //when car hits the edge it goes to the other side
    frogCollision(); //resets player when player collides with a car
    playerCollision(); //player stays within the borders of canvas
    scoreCounter(); //updates score


    if (lives === 0) { //checks if player is dead
        console.log(lives)
        livesParagraph.innerHTML = lives; //set the HTML element to the Lives variable
        continueGame = prompt("Game over! Would you like to play again (y/n)?"); //prompts player to play again 

        if (continueGame === "y") { //if player chooses yes, then restart the game
            restart();
        } else if (continueGame === "n") { //if player chooses no, then stop the setInterval function which stops refreshUI
            clearInterval(loop);

            alert("Thanks for playing!");


        }
    }




    function restart() { //resets game if player wants to play again

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
    if (playerY === 25 && !hasWon) { //if player reaches the other side
        score++;
        hasWon = true;
        setTimeout(resetPlayer, 1000)

    }
}


//drawing the different frog variations when it is pointing in different directions
function drawPlayer() {
    if (playerOrientation === 1) {
        ctx.drawImage(frogup, playerX - PLAYER_RADIUS, playerY - PLAYER_RADIUS, PLAYER_RADIUS * 2, PLAYER_RADIUS * 2); //frog pointing up
    } else if (playerOrientation === 2) {
        ctx.drawImage(frogdown, playerX - PLAYER_RADIUS, playerY - PLAYER_RADIUS, PLAYER_RADIUS * 2, PLAYER_RADIUS * 2); //frog pointing down
    } else if (playerOrientation === 3) {
        ctx.drawImage(frogright, playerX - PLAYER_RADIUS, playerY - PLAYER_RADIUS, PLAYER_RADIUS * 2, PLAYER_RADIUS * 2); //frog pointing right
    } else if (playerOrientation === 4) {
        ctx.drawImage(frogleft, playerX - PLAYER_RADIUS, playerY - PLAYER_RADIUS, PLAYER_RADIUS * 2, PLAYER_RADIUS * 2); //frong pointing left
    }
}


// when key is pressed
function keyPressed(event) {
    //get the actual key pressed
    let key = event.keyCode;


    //move player
    if (key === 65) {
        playerX = playerX - 40; //move player left
        playerOrientation = 4;
    } else if (key === 68) { //move player right
        playerX = playerX + 40;
        playerOrientation = 3;

    } else if (key === 87) {
        playerY = playerY - 75; //move player up
        playerOrientation = 1;

    } else if (key === 83) {
        playerY = playerY + 75; //move player down
        playerOrientation = 2;

    }
}



function playerCollision() {
    //edge check
    if (playerX <= 20) { //keeps player inside the left
        playerX = 20;
    } else if (playerX >= 780) { //keeps player inside the right edge
        playerX = 780;
    } else if (playerY <= 30) { //keeps player inside the top edge
        playerY = 25;
    } else if (playerY >= 500) { //keeps player inside the bottom edge
        playerY = 475
    }
}

let xPositions = [
    //car row 1
    Math.floor(Math.random() * 200) + 10, Math.floor(Math.random() * 150) + 300, Math.floor(Math.random() * 120) + 600,
    //car row 2
    Math.floor(Math.random() * 158) + 20, Math.floor(Math.random() * 200) + 250, Math.floor(Math.random() * 100) + 600,
    // car row 3
    Math.floor(Math.random() * 200) + 50, Math.floor(Math.random() * 270) + 400,
    //car row 4
    Math.floor(Math.random() * 180) + 20, Math.floor(Math.random() * 200) + 270, Math.floor(Math.random() * 130) + 550,
    //car row 5
    Math.floor(Math.random() * 40) + 20, Math.floor(Math.random() * 30) + 240, Math.floor(Math.random() * 20) + 400, Math.floor(Math.random() * 20) + 650
];

//car X positions
let yPositions = [372, 372, 372, 300, 300, 300, 228, 228, 148, 148, 148, 72, 72, 72, 72]; //car Y positions
let widths = [50, 50, 50, 60, 60, 60, 110, 110, 50, 50, 50, 60, 60, 60, 60]; //car widths
let heights = [50, 50, 50, 50, 50, 50, 37, 37, 50, 50, 50, 50, 50, 50, 50]; //car heights
let imageID = ["rocketCar", "rocketCar2", "rocketCar3", "policeCar", "policeCar2", "policeCar3", "truck", "truck2", "pinkCar", "pinkCar2", "pinkCar3", "spiderman", "spiderman2", "spiderman3", "spiderman4"]; //car image ID
let carSpeed = [.9, .9, .9, 1.3, 1.3, 1.3, 1, 1, 1.2, 1.2, 1.2, .8, .8, .8, .8]; //car speed
let collisionDistance = [790, 790, 790, 775, 775, 775, 735, 735, 790, 790, 790, 775, 775, 775, 775]; //collision distance for when cars hit the edge

function drawCars() {
    for (let i = 0; i < xPositions.length; i++) { //repeats for the entire array
        ctx.drawImage(document.getElementById(imageID[i]), xPositions[i], yPositions[i], widths[i], heights[i]); //draws the car
    }
}

function moveCars() {
    for (let i = 0; i < xPositions.length; i++) { //repeats for the entire array
        xPositions[i] = xPositions[i] + carSpeed[i]; //increases X position which moves the car
    }
}

function carCollision() {
    for (let i = 0; i < xPositions.length; i++) { //repeats for entire array
        if (xPositions[i] > collisionDistance[i] + widths[i]) { //brings car to the other side when it hits the right edge
            xPositions[i] = 0 - widths[i]
        }
    }
}

function frogCollision() { //when frog hits a car

    if (xPositions[0] + 57 >= playerX - PLAYER_RADIUS / 2 && //gets the right edge of car
        xPositions[0] - 9 <= playerX + PLAYER_RADIUS / 2 && // gets the left edge of the car
        yPositions[0] + 20 >= playerY - PLAYER_RADIUS / 2 && //gets the  bottom edge of the car
        yPositions[0] - 20 <= playerY + PLAYER_RADIUS / 2) { //gets the top edge of the car
        playerY = 475; //bring player back to starting position
        lives = lives - 1; //decrease lives
    } //the following code repeats for every car 

    if (xPositions[1] + 57 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[1] - 9 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[1] + 20 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[1] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[2] + 57 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[2] - 9 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[2] + 20 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[2] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }


    if (xPositions[3] + 65 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[3] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[3] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[3] - 10 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[4] + 65 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[4] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[4] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[4] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[5] + 65 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[5] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[5] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[5] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }

    if (xPositions[6] + 112 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[6] - 12 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[6] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[6] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[7] + 112 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[7] - 12 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[7] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[7] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }

    if (xPositions[8] + 58 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[8] - 20 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[8] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[8] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[9] + 58 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[9] - 20 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[9] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[9] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[10] + 58 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[10] - 20 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[10] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[10] - 20 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[11] + 65 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[11] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[11] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[11] - 10 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }

    if (xPositions[12] + 65 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[12] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[12] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[12] - 10 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[13] + 65 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[13] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[13] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[13] - 10 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }
    if (xPositions[14] + 65 >= playerX - PLAYER_RADIUS / 2 &&
        xPositions[14] - 10 <= playerX + PLAYER_RADIUS / 2 &&
        yPositions[14] + 30 >= playerY - PLAYER_RADIUS / 2 &&
        yPositions[14] - 10 <= playerY + PLAYER_RADIUS / 2) {
        playerY = 475;
        lives = lives - 1;
    }

}

let loop = setInterval(refreshUI, 3); //repeatedly run refreshUI()