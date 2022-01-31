let interest = 6;
let belly = 6;
let happiness = 6;


function refreshUI() {
    let bellyMeter = document.getElementById("belly-meter");
    bellyMeter.value = belly;

    let bellyParagraph = document.getElementById("belly-paragraph");
    bellyParagraph.innerHTML = belly;

    let interestMeter = document.getElementById("interest-meter");
    interestMeter.value = interest;

    let interestParagraph = document.getElementById("interest-paragraph");
    interestParagraph.innerHTML = interest;

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



function playPet() {
    //increase the interest level
    if (interest < 10) {
        interest += 1;
    }

    refreshUI();
}

function feedPet() {
    //increase the belly level
    if (belly < 10) {
        belly += 1;
    }

    refreshUI();
}


function decreasePet() {
    if (belly > 0) {
        refreshUI();
        belly = belly - 1
    }

    if (interest > 0) {
        refreshUI();
        interest = interest - 1
    }
}


setInterval(decreasePet, 1000);