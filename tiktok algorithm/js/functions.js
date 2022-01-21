function magicAlgorithm(numLikes, comment, shares, followers) {
    let rank = 0;

    //magic
    if (numLikes >= 10000 && comment.includes("apples") && shares >= 1500 && followers >= 10000) {
        rank = 1;
    } else if (numLikes >= 500 && comment.includes("oranges") && shares >= 500 && followers >= 1000) {
        rank = 100;
    } else {
        rank = 1000;
    }
    return rank;

}

function tiktokPrompt() {
    alert("Welcome to Tiktok! Imagine I'm showing you a tiktok video right now");
    let likeCount = Number(prompt("how many likes did this tiktok get?"));

    let comment = prompt("What is the most recent comment for this video?");

    let shareCount = Number(prompt("How many shares did this video get?"));

    let followerCount = Number(prompt("How many followers does the creator that posted this video have?"));

    let rankResult = magicAlgorithm(likeCount, comment, shareCount, followerCount);
    let resultString = "Based off of the magic algorithm, this video's rank is " + rankResult;


    alert(resultString);
}




function showUI() {

    let likeCount = Number(document.getElementById("like-textbox").value);
    let comment = document.getElementById("comment-textbox").value;
    let shareCount = Number(document.getElementById("share-textbox").value);
    let followerCount = Number(document.getElementById("follower-textbox").value);



    let rankResult = magicAlgorithm(likeCount, comment, shareCount, followerCount);


    document.getElementById("result-paragraph").innerHTML = "Tiktok Rank: " + rankResult;
}
/*
showUI(); */