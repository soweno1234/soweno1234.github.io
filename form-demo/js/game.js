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

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;


    truthAnswer.innerHTML = "Hi " + age + " year old " + fname + " " + lname + ". Your food will be delivered to " + address + ". Place your order below."

}