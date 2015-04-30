/**
 * Roddrecus Chames on 4/20/15
 * Functions Assignment
 */

//alert("This calculator will help determine how much car payments would be for a new car.");

//Request the user's name.
var question1 = prompt("Please enter your name to help us better serve you");
console.log(question1);

//Ask the user what type of car they'd like to purchase.
var question2 = prompt("Hello " +question1+ " what kind of car would you like to purchase?\n(Dodge Charger, Chevy Camaro, Ford Mustang)").toLowerCase();
console.log(question2);

//Loop for car choice validation.
while(question2 != "dodge charger" && question2 != "chevy camaro" && question2 != "ford mustang"){
    question2 = prompt("You have entered an invalid selection. Please select from the following:\nDodge Charger, Chevy Camaro, or Ford Mustang.").toLowerCase();
    console.log(question2);
}

//Prints out the price of the car based on the user's decision.
if(question2 === "dodge charger"){
    console.log("The price the selected car is $" +42+ "," +500+ ".");
}else if(question2 === "chevy camaro"){
    console.log("The price the selected car is $" +38+","+200+ ".");
}else if(question2 === "ford mustang"){
    console.log("The price the selected car is $" +37+","+800+ ".");
}

//Request the user to input hourly income earned.
var incomeInput = prompt("What is your hourly income?");
console.log("Your hourly income is $" +incomeInput+ " an hour.");

//While loop for hourly income validation.
while(incomeInput === "" || isNaN(incomeInput)) {
    if(incomeInput === ""){
        console.log("Please do not leave blank.\nWhat is your hourly income?");
        incomeInput = prompt("Please do not leave blank.\nWhat is your hourly income?");
        console.log("Your hourly income is $" +incomeInput+ " an hour.");
    }else if(isNaN(incomeInput)){
        console.log("Please use numbers only.\nWhat is your hourly income?");
        incomeInput = prompt("Please use numbers only.\nWhat is your hourly income?");
        console.log("Your hourly income is $" +incomeInput+ " an hour.")
    }
}


//Request the user to input hours work a week.
var hoursInput = prompt("How many hours per week do you work?");
console.log("You work " +hoursInput+ " hours a week.");

//while loop for hours worked validation.
while(hoursInput === "" || isNaN(hoursInput)) {
    if(hoursInput === ""){
        console.log("Please do not leave blank.\nHow many hours per week do you work?");
        hoursInput = prompt("Please do not leave blank.\nHow many hours per week do you work?");
        console.log("You work " +hoursInput+ " hours a week.");
    }else if(isNaN(hoursInput)){
        console.log("Please use numbers only.\nHow many hours per week do you work?");
        hoursInput = prompt("Please use numbers only.");
        console.log("You work " +hoursInput+ " hours a week.");
    }
}

//Prints how much your monthly pay is in the console based on income and hours worked.
var monthlyIncome = monthlyPay(incomeInput, hoursInput);
console.log("Your monthly income is $" + monthlyIncome + ".");

//Function is the factory for the formula that gives the monthly pay.
function monthlyPay(incomeInput,hoursInput){
    var payByWeek = incomeInput * hoursInput;
    var payPerMonth = payByWeek * 4;
    return payPerMonth;
}

/*function credit(){
    var randomNum =
}*/