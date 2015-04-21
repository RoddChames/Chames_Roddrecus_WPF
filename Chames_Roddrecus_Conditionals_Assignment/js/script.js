/**
 * Created by Roddrecus Chames on 4/20/15.
 * Conditionals Assignment
 */

//Testing link between .js and index file
//alert("This is to test js"); Test checked good, so I turned the alert into a note.

//This calculator will tell how many bombs need to be built daily by branch based on if they are deployed or training

//Different military branches
var militaryBranches = ["Navy", "Marines", "Airforce"];

//printed out military branches to make sure arrays worked properly
    console.log(militaryBranches);

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

//verify that the opstatus variable is working
console.log(opStatus);

//number of bombs person will assemble
var numberToAssemble = prompt("How many bombs will your unit be assembling today?");

//print numberToAssemble to ensure prompt is registered
console.log(numberToAssemble);


var p1 = prompt("Enter total");

if(p1 > navyBombsDeployed &&) {
    console.log("You are ready for battle.");
}else{
    console.log("please increase loadout.");
}


