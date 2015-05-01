/**
 * Roddrecus Chames on 4/20/15
 * Functions Assignment
 */

//alert("This calculator will help determine how much car payments would be for a new car.");

//Request the user's name.
var question1 = prompt("Please enter your name to help us better serve you");

//Prints the response to question1 to the console.
console.log(question1);

//Ask the user what type of car they'd like to purchase.
var question2 = prompt("Hello " +question1+ " what kind of car would you like to purchase?\n(Dodge Charger, Chevy Camaro, Ford Mustang)").toLowerCase();

//prints the response to question2 to the console.
console.log(question2);


//While question 2 is not dodge charger, chevy camaro, or ford mustang keep loop going.
while(question2 != "dodge charger" && question2 != "chevy camaro" && question2 != "ford mustang"){

    //informs the user of invalid input & changes anything the user types to lower case.
    question2 = prompt("You have entered an invalid selection. Please select from the following:\nDodge Charger, Chevy Camaro, or Ford Mustang.").toLowerCase();

    //prints the response to question2 to the console.
    console.log(question2);
}

//if input equal dodge charger.
if(question2 === "dodge charger"){

    //print the price 42,500 to the console.
    console.log("The price the selected car is $" + 42 + "," + 500 + ".");

    //if input equal chevy camaro.t
}else if(question2 === "chevy camaro"){

    //print the price 38,200 to the console.
    console.log("The price the selected car is $" + 38 + "," + 200 + ".");

    //if input equal ford mustang.
}else if(question2 === "ford mustang"){

    //print the price 37,800 to the console.
    console.log("The price the selected car is $" + 37 + "," + 800 + ".");
}


//Request the user to input hourly income earned.
var incomeInput = prompt("What is your hourly income?");

//print income input to console.
console.log("Your hourly income is $" +incomeInput+ " an hour.");

//While loop for if incomeInput is blank or incomeInput is not a number.
while(incomeInput === "" || isNaN(incomeInput)) {

    //if incomeInput is blank.
    if(incomeInput === ""){

        //prints out info to the console.
        console.log("Please do not leave blank.\nWhat is your hourly income?");

        //provides a 2nd chance prompt.
        incomeInput = prompt("Please do not leave blank.\nWhat is your hourly income?");

        //prints out info to the console.
        console.log("Your hourly income is $" +incomeInput+ " an hour.");

    //else if incomeInput is not a number.
    }else if(isNaN(incomeInput)){

        //prints out info to the console.
        console.log("Please use numbers only.\nWhat is your hourly income?");

        //2nd chance prompt if numbers are not entered.
        incomeInput = prompt("Please use numbers only.\nWhat is your hourly income?");

        //prints out info to the console.
        console.log("Your hourly income is $" +incomeInput+ " an hour.")
    }
}

//Request user to input how much they pay in bills.
var billsPrompt = prompt("How much do you pay a month in bills?");

//prints out info to the console.
console.log("You pay $" + billsPrompt + " in bills every month.");

//While validation loop for bills paid monthly.
while(billsPrompt === "" || isNaN(billsPrompt)) {

    //if bill are blank.
    if(billsPrompt === ""){

        //prints info to the console.
        console.log("Please do not leave blank.\nHow much do you pay monthly in bills?");

        //2nd chance prompt to add correct info.
        billsPrompt = prompt("Please do not leave blank.\nHow much do you pay monthly in bills?");

        //prints info out to the console.
        console.log("You pay $" +billsPrompt+ " in bills a month.");

        //if billsPrompt input is not a number.
    }else if(isNaN(billsPrompt)){

        //prints info out to the console.
        console.log("Please use numbers only.\nHow many much do you pay monthly in bills?");

        //2nd chance prompt if numbers are not used.
        billsPrompt = prompt("Please use numbers only.\nHow many much do you pay monthly in bills?");

        //prints info out to the console.
        console.log("You pay $" +billsPrompt+ " in bills a month.");
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
var monthlyIncome = monthlyPay(incomeInput, hoursInput) - billsPrompt;

//prins info out to the console.
console.log("Your monthly income is $" + monthlyIncome + ".");

//Function is the factory for the formula that gives the monthly pay.
function monthlyPay(incomeInput,hoursInput){
    var payByWeek = incomeInput * hoursInput;
    var payPerMonth = payByWeek * 4;
    return payPerMonth;
}

//provides credit score array.
var creditScore = [600, 700, 800];

//provides credit score based on conditionals
if(monthlyIncome >= 2000){
    console.log("Your credit score is " + creditScore[2] + ".");
    alert("Your credit score is " + creditScore[2] + ".");
}else if(monthlyIncome >= 1600){
    console.log("Your credit score is " + creditScore[1] + ".");
    alert("Your credit score is " + creditScore[1] + ".");
}else if(monthlyIncome >= 990){
    console.log("Your credit score is " + creditScore[0] + ".");
    alert("Your credit score is " + creditScore[0] + ".");
}else{
    console.log("We apologize your credit score is too low.\nYou do not qualify for financing of the listed cars.");
    alert("We apologize your credit score is too low.\nYou do not qualify for financing of the listed cars.")
}

//while loop to terminate session for unqualified customers
while(monthlyIncome < 990){
    console.log("This session is over. \nPlease restart your browser.");
    alert("This session is over. \nPlease restart your browser.");
}

//prompt to enter provided credit score.
var creditScorePrompt = prompt("What is your credit score?");

//prints credit score input to the console.
console.log(creditScorePrompt);

//provides the final payment for the customer
var finalPayment = payment(monthlyIncome,creditScorePrompt,billsPrompt);

//function that holds the prices for payments based on conditions.
function payment(monthlyIncome, creditScorePrompt, billsPrompt){
    if(monthlyIncome + creditScorePrompt - billsPrompt >= 2000){
        console.log("Your car payments will be $300 a month.");
        var alert1 = alert("Your car payments will be $350 a month.");
    }else if(monthlyIncome + creditScorePrompt - billsPrompt >= 1600){
        console.log("Your car payments will be $400 a month.");
       var alert1 = alert("Your car payments will be $400 a month.");
    }else if(monthlyIncome + creditScorePrompt - billsPrompt >= 1200){
        console.log("Your car payments will be $550 a month.");
       var alert1 = alert("Your car payments will be $550 a month.");
    }

    //this allows the alerts to come outside of the function
    return alert1;
}



/*test values

income per hour: 5       bills paid: 400        hours per week: 40

income per hour: 8       bills paid: 400        hours per week: 40

income per hour: 10      bills paid: 400        hours per week: 40

income per hour: 20      bills paid: 400        hours per week: 40


 */

