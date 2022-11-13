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
function truthAndLie() {
    // get paragraph
    let truthAnswer = document.getElementById("truth-answer");

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;


    truthAnswer.innerHTML = "Hi " + age + " year old " + fname + " " + lname + ". Your food will be delivered to " + address + ". Place your order below."

}