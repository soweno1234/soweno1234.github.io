let continueGame = "y";
let playerHealth = 100
let monsterHealth = 100
while (continueGame == "y") {

    let welcomeMsg = "Welcome to Treasure Hunt! In this game, your objective is to find the pot of gold at the end of the forest! However, there will be obstacles along the way, so you must survive to obtain the gold.";
    alert(welcomeMsg);







    // ask which cave to enter?
    let playerChoice = Number(prompt("You will have to make many decisions throughout the game. To start off, choose a path. Both paths will eventually reach the gold, although one path will be more difficult. Do you enter path 1 or path 2 (1 or 2)?"));

    let goodPath = Math.floor(Math.random() * 2) + 1;
    let badPath
    if (goodPath == 2) {
        badPath = 1;
    } else if (goodPath == 1) {
        badPath = 2;
    }
    //choose the path
    if (playerChoice === goodPath) {
        alert("Luckily you chose the good path. On this path, monsters will do less damage and you will have a better chance to survive.")
        let monsterAttack = Number(prompt("You have been walking for hours, and you encounter a 7 foot tall monster with teeth as sharp as knives. You have 100 hitpoints. Do you choose to run (1) or stay and fight (2)?"))
        if (monsterAttack == 1) {
            alert("You run away, only to encounter a 300 foot cliff. You realize that fighting the monster is your only option, so you run back to it.");

        } else if (monsterAttack == 2) {
            alert("Your bravery paid off! The monster is indimitated by you so thankfully it doesn't strike you first.");

        }
        //MONSTER FIGHT SCENE 1
        let fightChoice = Number(prompt("You prepare to face the monster. It has 100 hit points as do you. Do you want to strike its side (1) or body (2)?"));
        let goodFightChoice = Math.floor(Math.random() * 2) + 1;
        if (fightChoice === goodFightChoice) {
            let playerDmg = Math.floor(Math.random() * 21) + 60;
            monsterHealth = 100 - playerDmg;
            alert("you attack the monster and do a HUGE amount of damage! You deal " + playerDmg + "damage and the monster is left with " + 100 - playerDmg + "health.")

        } else {
            let playerDmg = Math.floor(Math.random() * 50) + 30;
            monsterHealth = 100 - playerDmg
            alert("You missed your strike, but you did hit part of the monster. You deal " + playerDmg + " damage, and the monster is left with " + monsterHealth + " health.");
        }
        //MONSTER FIGHT SCENE 2
        alert("The monster is startled by your sudden attack and is thrown back. You quickly look at your surroundings to see if anything could help you finish it off. You notice a mysterious scroll on a nearby tree. It reads 'I make up oceans and seas and all in between. I am the monster's weakness, so use me for success.'");
        alert("You pause to think for a moment, and you realize the answer to the riddle is water! You figured out the monster's weakness!");

        fightChoice = Number(prompt("You remember your water bottle inside of your backpack. You notice the monster is almost recovered and is strolling towards you to finish you off. Do you risk turning around to grab your water bottle (1) or do you get ready to fight it with your hands again (2)"));
        if (fightChoice === 1) {
            let playerDmg = monsterHealth;
            monsterHealth = 0;
            alert("You quickly unzip your backpack, grab the bottle, open the lid, and fling the water at the monster. Upon contact, the water shrivels up the monster until it is nothing more than a pile of sand. Your water attack did " + playerDmg + " damage. You have successfully defeated the monster!");

        } else {
            playerDmg = Math.floor(Math.random() * 5) + 5;
            monsterHealth = monsterHealth - playerDmg;
            monsterDmg = Math.floor(Math.random() * 5) + 85;
            playerHealth = 100 - monsterDmg;
            alert("You decide to fight the monster with your bare hands, but this was a poor decision. It comes forward and slashes your face, dealing " + monsterDmg + " damage. You are only left with " + playerHealth + "hp.");

            fightChoice = Number(prompt("Because of your low health you decide to run away. The monster begins chasing you and starts to catch up. Do you try to outrun it (1) or save your energy and try to fight it once more (2)"));
            let survivalChance = Math.floor(Math.random() * 100) + 1;
            if (survivalChance >= 70) {
                alert("All of a sudden, the monster disolves into sand for no reason at all! You are lucky to be alive.");
            } else {
                alert("You barely survive and your hp is still very low. You need to be careful since you could die at any moment.");
            }
        }
        let door = 0
        let doorCount = Number(prompt("Relieved to have survived the monster, you keep traveling along, looking for the pot of gold. You reach a maze with many different doorways. Do you choose the door on the left (1) or the door on the right (2)"));
        while (door <= 6) {
            door = door + doorCount;
            alert("You open the door, only to be presented with two more doors.");
            doorCount = Number(prompt("Do you choose the left door (1) or the right door (2)?"));
        }
        alert("You open the final door and see the pot of gold! You completed the game!")

    } else if (playerChoice === badPath) {
        alert("Unfortunately you have chosen the difficult path. The monsters on this path will do more damage and you will have less health.");
        playerHealth = 80;
        monsterHealth = 120;
        let monsterAttack = Number(prompt("You have been walking for hours, and you encounter a 10 foot tall monster with teeth as sharp as knives. You have 80 hitpoints. Do you choose to run (1) or stay and fight (2)?"))
        if (monsterAttack == 1) {
            alert("You run away, only to encounter a 400 foot cliff. You realize that fighting the monster is your only option, so you run back to it.");

        } else if (monsterAttack == 2) {
            alert("Your bravery paid off! The monster is indimitated by you so thankfully it doesn't strike you first.");

        }
        //MONSTER FIGHT SCENE 1
        let fightChoice = Number(prompt("You prepare to face the monster. It has 120 hit points and you have 80 hit points. Do you want to strike its side (1) or body (2)?"));
        let goodFightChoice = Math.floor(Math.random() * 2) + 1;
        if (fightChoice === goodFightChoice) {
            let playerDmg = Math.floor(Math.random() * 15) + 50;
            monsterHealth = 120 - playerDmg
            alert("you attack the monster and do some damage! You deal " + playerDmg + "damage and the monster is left with " + 100 - playerDmg + "health.")

        } else {
            let playerDmg = Math.floor(Math.random() * 20) + 20;
            monsterHealth = 120 - playerDmg
            alert("You missed your strike, but you did hit part of the monster. You deal " + playerDmg + " damage, and the monster is left with " + monsterHealth + " health.");
        }
        //MONSTER FIGHT SCENE 2
        alert("The monster is startled by your sudden attack and is thrown back. You quickly look at your surroundings to see if anything could help you finish it off. You notice a mysterious scroll on a nearby tree. It reads 'I make up oceans and seas and all in between. I am the monster's weakness, so use me for success.'");
        alert("You pause to think for a moment, and you realize the answer to the riddle is water! You figured out the monster's weakness!");

        fightChoice = Number(prompt("You remember your water bottle inside of your backpack. You notice the monster is almost recovered and is strolling towards you to finish you off. Do you risk turning around to grab your water bottle (1) or do you get ready to fight it with your hands again (2)"));
        if (fightChoice === 1) {
            let playerDmg = monsterHealth;
            monsterHealth = 0;
            alert("You quickly unzip your backpack, grab the bottle, open the lid, and fling the water at the monster. Upon contact, the water shrivels up the monster until it is nothing more than a pile of sand. Your water attack did " + playerDmg + " damage. You have successfully defeated the monster!");

        } else {
            playerDmg = Math.floor(Math.random() * 5) + 3;
            monsterHealth = monsterHealth - playerDmg;
            monsterDmg = Math.floor(Math.random() * 5) + 74;
            playerHealth = 80 - monsterDmg;
            alert("You decide to fight the monster with your bare hands, but this was a poor decision. It comes forward and slashes your face, dealing " + monsterDmg + " damage. You are only left with " + playerHealth + "hp.");

            fightChoice = Number(prompt("Because of your low health you decide to run away. The monster begins chasing you and starts to catch up. Do you try to outrun it (1) or save your energy and try to fight it once more (2)"));
            let survivalChance = Math.floor(Math.random() * 100) + 1;
            if (survivalChance >= 80) {
                alert("All of a sudden, the monster disolves into sand for no reason at all! You are lucky to be alive.");
            } else {
                alert("Unfortunately, you weren't able to escape and the monster eats you alive.");
            }
        }
        let door = 0
        let doorCount = Number(prompt("Relieved to have survived the monster, you keep traveling along, looking for the pot of gold. You reach a maze with many different doorways. Do you choose the door on the left (1) or the door on the right (2)"));
        while (door <= 6) {
            door = door + doorCount;
            alert("You open the door, only to be presented with two more doors.");
            doorCount = Number(prompt("Do you choose the left door (1) or the right door (2)?"));
        }
        alert("You open the final door and see the pot of gold! You completed the game!")
    } else {
        alert("That path doesn't exist. Please select 1 or 2");
    }


    continueGame = prompt("Do you want to play again (y/n)?");
}