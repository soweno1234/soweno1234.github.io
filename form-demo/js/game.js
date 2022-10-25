let fname = "";

//function for greet
function greet() {
    //grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    //get values from form
    fname = document.getElementById("fname").value;
    //let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    //show results!
    greetParagraph.innerHTML = "Greetings " + age + " year-old " + fname + "!";
}

// function to trivia game
function trivia() {
    // trivia answer
    let triviaAnswer = document.getElementById("trivia-answer");
    // get the checked values from the form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // decide what to print
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth, eh?";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!";
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }

}

// function to trivia game
function truthAndLie() {
    // get paragraph
    let truthAnswer = document.getElementById("truth-answer");
    // get the checked values from the form
    let truth1Selected = document.getElementById("truth1").checked;
    let truth2Selected = document.getElementById("truth2").checked;
    let lie1Selected = document.getElementById("lie1").checked;

    // decide what to print
    if (truth1Selected) {
        truthAnswer.innerHTML = fname + ", you are wrong. This is true!";
    } else if (truth2Selected) {
        truthAnswer.innerHTML = fname + ", incorrect! This is actually true";
    } else if (lie1Selected) {
        truthAnswer.innerHTML = fname + ", correct! This is a lie!";
    }

}