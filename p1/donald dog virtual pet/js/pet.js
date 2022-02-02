let interest = 5;
let belly = 10;
let happy = 50;



function refreshUI() {
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
    if (happiness = 1) {
        petImg.src = ""

    } else if (happiness = 2) {
        petImg.src = ""
    } else if (happiness = 3) {

    } else if (happiness = 4) {

    } else if (happiness = 5) {

    }
}


function decreasePet() {
    if (belly > 0) {

        belly = belly - 1
        refreshUI();
    }

    if (interest > 0) {

        interest = interest - 1
        refreshUI();
    }

    if (interest > 0 && belly > 0) {
        happy = (belly + interest) / 2
        refreshUI();
    }
}

function updateHappy() {
    let happy = belly
    refreshUI();
}

setInterval(decreasePet, 1000);
setInterval(updateHappy, 1000);

function playPet() {
    //increase the interest level
    if (interest < 10) {
        interest += 1;
    }

    refreshUI();
}

function feedPet() {
    //increase the belly level
    if (belly < 20) {
        belly += 2;
    }

    refreshUI();
}