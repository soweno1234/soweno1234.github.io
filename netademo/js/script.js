function getDate() {
    let text = document.getElementById("date");
    const now = new Date();
    text.innerHTML = now;
}

function check() {
    let answer = document.getElementById("practice");


    const today = new Date();


    if (today.getDate() === 3 && today.getMonth() === 9) {
        answer.innerHTML = "Is today July 1st? It's July 1st";
    } else {
        answer.innerHTML = "Is today July 1st? It's not July 1st";
    }
}