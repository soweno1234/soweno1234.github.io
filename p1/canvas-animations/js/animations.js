// get canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

// object position
/*
let xPosition = 0;

function moveHorizontal() {
    //clear screen
    ctx.clearRect(0, 0, 500, 500);

    //draw rectangle at current position
    ctx.fillRect(xPosition, 0, 20, 20);

    //move the x position over by x pixels
    xPosition += 1;


    //did I hit the wall? if so wrap around
    if (xPosition >= 500) {
        xPosition = 0;
    }
}


setInterval(moveHorizontal, .5);


//rect moving vertically then wrapping around
// object position
let yPosition = 0;


function moveVertical() {
    //clear screen
    ctx.clearRect(0, 0, 500, 500);

    //draw rectangle at current position
    ctx.fillRect(0, yPosition, 20, 20);

    //move the y position over by y pixels
    yPosition += 1;


    //did I hit the wall? if so wrap around
    if (yPosition >= 500) {
        yPosition = 0;
    }
}

setInterval(moveVertical, .5);
*/

let xPosition = 0;
let xSpeed = 1;




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





setInterval(moveHorizontal, 5)