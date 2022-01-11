//tiktok magic algorithm
function magicAlgorithm(numLikes, comment) {
    let rank = 0;

    //magic
    if (numLikes >= 10000 && comment.includes("dog")) {
        rank = 1;
    } else if (numLikes >= 500 && comment.includes("cat")) {
        rank = 100;
    } else {
        rank = 1000;
    }
    return rank;

}


alert("Welcome to Tiktok! Imagine I'm showing you a tiktok video right now");
let likeCount = Number(prompt("how many likes did this tiktok get?"));
// ask for a video comment
let comment = prompt("What is the most recent comment for this video?");



let rankResult = magicAlgorithm(likeCount, comment);
let resultString = "Based off of the magic algorithm, this video's rank is " + rankResult;

alert(resultString);