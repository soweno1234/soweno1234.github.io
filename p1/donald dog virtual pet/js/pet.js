let continueGame = "y";
let interest = 5;
let belly = 10;
let happy = 25;
let timer = 0;
let score = 0;
let highScore = 0;



function scoreTimer() {
    timer++;
}

setInterval(scoreTimer, 1000);

function refreshUI() {
    score = timer;

    if (score > highScore) {
        highScore = score;
    }

    let scoreParagraph = document.getElementById("your-score");
    scoreParagraph.innerHTML = score;

    let highScoreParagraph = document.getElementById("high-score");
    highScoreParagraph.innerHTML = highScore;


    let bellyMeter = document.getElementById("belly-meter");
    bellyMeter.value = belly;

    let bellyParagraph = document.getElementById("belly-paragraph");
    bellyParagraph.innerHTML = belly;

    //----------------------------------------------

    let interestMeter = document.getElementById("interest-meter");
    interestMeter.value = interest;

    let interestParagraph = document.getElementById("interest-paragraph");
    interestParagraph.innerHTML = interest;

    //------------------------------------------------

    let happyMeter = document.getElementById("happy-meter");
    happyMeter.value = happy;

    let happyParagraph = document.getElementById("happy-paragraph");
    happyParagraph.innerHTML = happy;



    //update dog image and paragraph
    let petImg = document.getElementById("pet-img");

    if (happy === 0 && belly === 0 && interest === 0) {
        continueGame = prompt("Game over. Would you like to play again (y/n)?");

        if (continueGame === "y") {
            restart();
        } else if (continueGame === "n") {
            alert("Thank you for playing!");
            document.getElementById("happy-button").disabled = true;

            document.getElementById("belly-button").disabled = true;

            document.getElementById("interest-button").disabled = true;
        }
    }

    if (happy >= 40 && belly >= 18 || happy >= 40 && interest >= 8 || belly >= 18 && interest >= 8) {
        petImg.src = "images - Copy/super-happy.png";

    } else if (happy >= 35 && belly >= 16 || happy >= 35 && interest >= 7 || belly >= 16 && interest >= 7) {
        petImg.src = "images - Copy/happy-dog.png";
    } else if (happy >= 30 && belly >= 12 || happy >= 30 && interest >= 6 || belly >= 12 && interest >= 6) {
        petImg.src = "images - Copy/somewhat-happy.png";

    } else if (happy >= 20 && belly >= 10 || happy >= 20 && interest >= 5 || belly >= 10 && interest >= 5) {
        petImg.src = "images - Copy/bored.png";

    } else if (happy >= 10 && belly >= 5 || happy >= 10 && interest >= 3 || belly >= 5 && interest >= 3) {
        petImg.src = "images - Copy/sad.png";

    } else if (happy >= 3 && belly >= 2 || happy >= 3 && interest >= 1 || belly >= 2 && interest >= 1) {
        petImg.src = "images - Copy/super-sad.png.png";

    }
}


function decreasePet() {
    if (belly > 0) {

        belly = belly - 1;
        refreshUI();
    }

    if (interest > 0) {

        interest = interest - .5;
        refreshUI();
    }

    if (happy > 1) {
        happy = happy - 2;
        refreshUI();
    } else if (happy === 1) {
        happy = happy - 1;
        refreshUI();
    }
}


function playPet() {
    //increase the interest level
    if (interest < 10) {
        interest += 1;
    }

    refreshUI();
}

function feedPet() {
    //increase the belly level
    if (belly < 19) {
        belly += 2;
    } else if (belly = 19) {
        belly += 1;
    } else if (belly > 19) {
        belly = belly;
    }

    refreshUI();
}

function happyPet() {

    if (happy < 47) {
        happy += 4;
    } else if (happy = 47) {
        happy += 3;
    } else if (happy = 48) {
        happy += 2;
    } else if (happy = 49) {
        happy += 1;
    }

    refreshUI();
}

setInterval(decreasePet, 1000);

function restart() {

    interest = 5;
    belly = 10;
    happy = 25;
    timer = 0;
}