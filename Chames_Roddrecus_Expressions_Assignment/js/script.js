/**
 * Roddrecus Chames  4/14/15  Expressions Assignment.
 */

//Testing to see if my js file is linked to my index.html file
// Test was successful so I blocked it out using this note format.  alert("This is only a test");

//My calculator will calculate the total amount of leave days a person in the military will accumulate over a time period

//First I want to collect a name and inform the person as to why I need it.
var nameInput = prompt("Let's figure out your projected leave days. \nPlease type your name to begin");

//console.log() will help me to identify if my variable is recognized in the inspection console.
console.log(nameInput);

//this alert is just a friendly gesture before we get started.
alert("Hello " + nameInput + " I hope your day is going well! \nLet's get started");

//prompt for job type (Civilian, Navy, or Marine)
prompt("Are you labeled as a Civilian Contractor, Navy Personnel, or Marine?");

var months = prompt("How many months have you been employed?")

//These are the number days of leave earned each year by job type (choices will be: Civilian, Navy, or Marine).
var leaveEarnedByJob = [1.5 * "", 2.5 * 12, 3.5 * 12];

alert(leaveEarnedByJob[0]);

