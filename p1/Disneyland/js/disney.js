let numPeople = Number(prompt("How many peeople?"));
let numDays = Number(prompt("How many days is this trip"));
let numPark = Number(prompt("How many days at the park?"));
let numTip = Number(prompt("How much tip (input a decimal)) do you want to add for each expense where a tip is applicable?"));

// calculate sub total costs
let flight = (100 * numPeople);
let hotel = (20 * numDays + numTip) * (1 + numTip);
let equipment = (10 * numPeople) * (1 + numTip);
let food = (5 * numPeople * numDays) * (1 + numTip);
let oneTimeMembershipFee = 10 * numPeople;
let rentalCar = (20 * numDays) * (1 + numTip);
let drink = (20 * numPeople * numDays) * (1 + numTip);
let subTotal = flight + hotel + equipment + food + oneTimeMembershipFee + rentalCar + drink;

let result = "Here are your results!\n"
result = result + "Number of people: $" + numPeople + "\n";
result = result + "Number of days: $" + numDays + "\n";
result = result + "Days at the park: $" + numPark + "\n";
result = result + "Your tip: " + numTip + "%\n";
result = result + "Your flight cost (tip not applicable): $" + flight + "\n";
result = result + "Your hotel cost: $" + hotel + "\n";
result = result + "Your equipment cost: $" + equipment + "\n";
result = result + "Your food cost: $" + food + "\n";
result = result + "Your one time membership fee (tip not applicable): $" + oneTimeMembershipFee + "\n";
result = result + "Your rental car cost: $" + rentalCar + "\n";
result = result + "Your beverage cost: $" + drink + "\n";
result = result + "Your total cost is $" + subTotal + "!";

alert(result);









/* alert("can you type " + '"hello ma' + "'am" + '?"');
alert('can you type "hello ma\'am?"');


let fish = "one fish\n";
fish = fish + "two fish\n";
alert(fish)*/