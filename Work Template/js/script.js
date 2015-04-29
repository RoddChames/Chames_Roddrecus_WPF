/**
 * Roddrecus Chames on 4/20/15
 * Functions Assignment
 */

alert("This calculator will help determine how much car payments would be for a new car.");

var carChoices = ["Dodge Charger","Chevy Camaro","Ford Mustang"];

function monthlyPay(payByHour,hoursPerWeek){
    var payByWeek = payByHour * hoursPerWeek;
    var payPerMonth = payByWeek * 4;
    return payPerMonth;
}

var totalMonthlyPay = monthlyPay(13.75,40);
console.log(totalMonthlyPay);
