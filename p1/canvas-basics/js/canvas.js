console.log("fae");

//lets do for loops
//count 1-10

for (let counter = 1; counter <= 10; counter++) {
    console.log("this number is " + counter);
}
//count 10-1
for (let counter = 10; counter >= 1; counter--) {
    console.log("this number is " + counter);
}

// count 1-10 only odd numbers
for (let counter = 1; counter < 30; counter = counter + 2) {
    console.log("this number is " + counter);
}


// get canvas element
let myCanvas = document.getElementById("my-canvas");
// create canvas object 
let ctx = myCanvas.getContext("2d");

//draw rect
ctx.fillStyle = "#1ebbd7"
ctx.fillRect(0, 0, 500, 100);

//draw lines
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(200, 0);
ctx.stroke();

// draw circle
ctx.beginPath();
ctx.arc(100, 50, 25, 0, 2 * Math.PI);
ctx.strokeStyle = "red";
ctx.stroke()

for (let x = 25; x > 0; x = x - 5) {
    ctx.beginPath();
    ctx.arc(100, 50, x, 0, 2 * Math.PI);
    ctx.strokeStyle = "red";
    ctx.stroke()
}