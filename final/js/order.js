let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let age = document.getElementById("age").value;
let address = document.getElementById("address").value;





// function to trivia game
function truthAndLie() {
    // get paragraph
    let truthAnswer = document.getElementById("truth-answer");

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;


    truthAnswer.innerHTML = "Hi " + age + " year old " + fname + " " + lname + ". Your food will be delivered to " + address + ". Place your order below. Pick one dish from each section."

}

// function to trivia game
function truthAndLie1() {
    //decide what to print

    // get paragraph
    let truthAnswer1 = document.getElementById("truth-answer1");
    let finalOrder = "Thanks for your order " + fname + "! <br> Your appetizer: ";

    //get the checked values from the form
    //appetizers
    let sateAyamSelected = document.getElementById("SateAyam").checked;
    let pangsitGorengSelected = document.getElementById("PangsitGoreng").checked;
    let tempeMendoanSelected = document.getElementById("TempeMendoan").checked;
    let risolesSelected = document.getElementById("Risoles").checked;
    let siomaySelected = document.getElementById("SiomayCampurBandung").checked;
    let springRollSelected = document.getElementById("FriedSpringRoll").checked;
    let chickenSelected = document.getElementById("ChickenandFishTofu").checked;

    //meat and seafood
    let baladoSelected = document.getElementById("AyamGorengBalado").checked;
    let cambeiSelected = document.getElementById("AyamCabeiJo").checked;
    let ikanSelected = document.getElementById("IkanBakarKecap").checked;
    let empekSelected = document.getElementById("EmpekEmpekPalembang").checked;
    let gorengSelected = document.getElementById("IkanGorengLalapan").checked;
    let miniSelected = document.getElementById("MiniRijsttafelAyamMbokBerek").checked;
    let rijstaffelSelected = document.getElementById("MiniRijsttafelRendangBeef").checked;
    let rendangSelected = document.getElementById("RendangSapi").checked;
    let mbokSelected = document.getElementById("AyamGorengMbokBerek").checked;

    //rice and noodle
    let bakmiSelected = document.getElementById("BakmiGorengJawa").checked;
    let bihunSelected = document.getElementById("BihunBakso").checked;
    let nasiSelected = document.getElementById("NasiKuningKomplit").checked;
    let indonesiaSelected = document.getElementById("NasiGorengIndonesia").checked;

    //appetizer
    if (sateAyamSelected) {
        finalOrder = finalOrder + "Sate Ayam <br> Your meat/seafood dish:";
    }
    if (pangsitGorengSelected) {
        finalOrder = finalOrder + "Pangsit Goreng <br> Your meat/seafood dish:";
    }
    if (tempeMendoanSelected) {
        finalOrder = finalOrder + "Tempe Mendoan <br> Your meat/seafood dish:";
    }
    if (risolesSelected) {
        finalOrder = finalOrder + "Risoles <br> Your meat/seafood dish:";
    }
    if (siomaySelected) {
        finalOrder = finalOrder + "Siomay Campur Bandung <br> Your meat/seafood dish:";
    }
    if (springRollSelected) {
        finalOrder = finalOrder + "Fried Spring Roll <br> Your meat/seafood dish:";
    }
    if (chickenSelected) {
        finalOrder = finalOrder + "Chicken and Fish Tofu <br> Your meat/seafood dish:";
    }

    //meat and seafood
    if (baladoSelected) {
        finalOrder = finalOrder + " Ayam Goreng Balado <br> Your rice/noodle dish:";
    }
    if (cambeiSelected) {
        finalOrder = finalOrder + " Ayam Cabei Jo <br> Your rice/noodle dish:";
    }
    if (ikanSelected) {
        finalOrder = finalOrder + " Ikan Bakar Kecap <br> Your rice/noodle dish:";
    }
    if (empekSelected) {
        finalOrder = finalOrder + " Empek-Empek Palembang <br> Your rice/noodle dish:";
    }
    if (gorengSelected) {
        finalOrder = finalOrder + " Ikan Goreng Lalapan <br> Your rice/noodle dish:";
    }
    if (miniSelected) {
        finalOrder = finalOrder + " Mini Rijsttafel Ayam Mbok Berek <br> Your rice/noodle dish:";
    }
    if (rijstaffelSelected) {
        finalOrder = finalOrder + " Mini Rijstaffel Rendang Beef <br> Your rice/noodle dish:";
    }
    if (rendangSelected) {
        finalOrder = finalOrder + " Rendang Sapi <br> Your rice/noodle dish:";
    }
    if (mbokSelected) {
        finalOrder = finalOrder + " Ayam Goreng Mbok Berek <br> Your rice/noodle dish:";
    }


    //rice and noodle
    if (bakmiSelected) {
        finalOrder = finalOrder + " Bakmi Goreng Jawa <br> Have a nice day!";
    }
    if (bihunSelected) {
        finalOrder = finalOrder + " Bihun Bakso <br> Have a nice day!";
    }
    if (nasiSelected) {
        finalOrder = finalOrder + " Nasi Kuning Komplit <br> Have a nice day!";
    }
    if (indonesiaSelected) {
        finalOrder = finalOrder + " Nasi Goreng Indonesia <br> Have a nice day!";
    }

    //print
    truthAnswer1.innerHTML = finalOrder;

}