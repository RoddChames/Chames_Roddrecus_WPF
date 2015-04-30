/**
 * Roddrecus Chames on 4/20/15
 * Functions Assignment
 */

alert("This calculator will help determine how much car payments would be for a new car.");

var question1 = prompt("Please enter your name to help us better serve you");
console.log(question1);

var question2 = prompt("Hello " +question1+ " what kind of car would you like to purchase?\n(Dodge Charger, Chevy Camaro, Ford Mustang)").toLowerCase();
console.log(question2);

if(question2 === "dodge charger" ){
    console.log("The price the selected car is $" +42,500+ ".");
}else if(question2 === "chevy camaro"){
    console.log("The price the selected car is $" +38,200+ ".");
}else if(question2 === "ford mustang"){
    console.log("The price the selected car is $" +37,800+ ".");
}

while(){

}


/*var carChoices = ["Dodge Charger","Chevy Camaro","Ford Mustang"];

function monthlyPay(payByHour,hoursPerWeek){
    var payByWeek = payByHour * hoursPerWeek;
    var payPerMonth = payByWeek * 4;
    return payPerMonth;
}
*/
