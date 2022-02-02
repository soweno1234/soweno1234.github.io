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
    if (belly >= 17 && interest >= 9) {
        petImg.src = "images - Copy/super-happy.png";

    } else if (belly >= 14 && interest >= 8) {
        petImg.src = "images - Copy/happy-dog.png";
    } else if (belly >= 12 && interest >= 7) {
        petImg.src = "images - Copy/somewhat-happy.png"

    } else if (belly >= 8 && interest >= 5) {
        petImg.src = "images - Copy/bored.png"

    } else if (belly >= 4) {
        petImg.src = "images - Copy/sad.png"

    } else if (happy >= 3 && interest >= 1) {
        petImg.src = "images - Copy/super-sad.png.png";

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
        happy = Math.floor(((belly + interest) / 2) * 3)
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
setInterval(decreasePet, 1000);
setInterval(updateHappy, 1000);