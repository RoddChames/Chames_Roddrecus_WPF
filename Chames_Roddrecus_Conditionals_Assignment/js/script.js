/**
 * Created by Roddrecus Chames on 4/20/15.
 * Conditionals Assignment
 */

//Testing link between .js and index file
//alert("This is to test js"); Test checked good, so I turned the alert into a note.

//This calculator will tell how many bombs (minimum) need to be built daily by branch based on if they are deployed or training

/*
//Requesting military branch
var membersBranch = prompt("To allow us to better serve you please choose your military organization. (Navy, Marines, or Airforce)");

//Alert to choice of service
alert("Thank you. You chose " + membersBranch + ". Please select ok to continue.");

//minimum navy bombs while deployed
var navyBombsDeployed = 450;

//minimum navy bombs while training
var navyBombsTraining = 123;

//minimum marine bombs deployed
var marineBombsDeployed = 375;

//minimum marine bombs training
var marineBombsTraining = 150;

//minimum airforce bombs deployed
var airforceBombsDeployed = 250;

//minimum airforce bombs training
var airforceBombsTraining = 90;

//finding out if person is deployed or training
var opStatus = prompt("Are you currently involed in training evolution, or deployed?");

//ask users for number of bombs built
var prompt1 = prompt("Please enter number of bombs built.");

//verify that the opstatus variable is working
console.log(opStatus);






if((membersBranch == "Navy" && opStatus == "deployed") && prompt1 > navyBombsDeployed ) {
    console.log("You are ready for war!!!");
}

if((membersBranch == "Marines" && opStatus == "deployed") && prompt1 > marineBombsDeployed ) {
    console.log("You are ready for war!!!");
}else{
    console.log("please verify information.")
}
*/










/*New section based on goToTraining Video*/

//Testing link between .js and index file
//alert("This is to test js"); Test checked good, so I turned the alert into a note.

//This calculator will tell how many bombs (minimum) need to be built daily by branch based on if they are deployed or training

alert("This calculator will help you determine the minimum bombs required for your daily operational commitment.  To continue please click ok.");

var bombsRequired = ["450","123","375"];

var prompt1 = prompt("To allow us to better serve you please choose your military organization. (Navy, Marines, or Airforce)");
console.log(prompt1);

prompt2 = prompt("Are you currently deployed or training?");
console.log(prompt2);

if(prompt1 === "Navy" && prompt2 ==="deployed") {
    console.log(bombsRequired[0]);
   var prompt3 = prompt("How many bombs have you assembled?");
}

if(prompt3 < bombsRequired[0]){
    console.log("please assemble a minimum of " + bombsRequired[0] + " bombs to meet your operational quota for today.");
}else{
    console.log("You have met your your operational quota for today.");
}


//Airforce
if(prompt1 === "Airforce" && prompt2 ==="deployed") {
    console.log(bombsRequired[1]);
    prompt3 = prompt("How many bombs have you assembled?");
}

if(prompt3 < bombsRequired[1]){
    console.log("please assemble a minimum of " + bombsRequired[1] + " bombs to meet your operational quota for today.");
}else{
    console.log("You have met your your operational quota for today.");
}






