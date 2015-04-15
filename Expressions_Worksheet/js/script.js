/**
 * Created by Roddrecus Chames  on 4/14/15.
 */

//Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”  Calculate how old Sparky the pit bull is in dog years based on his actual age.

//Givens:
//Sparky’s age.

//Result Variable: Sparky’s age in dog years.


//Result to Print: “Sparky is X human years old which is X in dog years.

var humanYears = 4;                 //This is Sparkies age in human years. (I gave him this age since it wasn't told to us)
var dogYears = humanYears * 7;      //We were told that each year for a human is seven years for a dog.  So humanYears x 7 will give us the product.
var finalAgeDogYears = dogYears;    //This variable defines the final age already calculated together.
console.log("Sparky is " + humanYears + " human years, which is " + dogYears + "  dog years.");          //This prints out "Sparky is 4 human years, which is 28 dog years."




//Slice of Pie part 1

//A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)

//Given:
// Number of slices per pizza. (12)
//Number of people at the party. (22)
//Number of pizzas ordered. (7)

//Result Variables: Number of slices per person. (Can be a decimal or floating point).

//Result to Print: “Each person ate X slices of pizza at the party.”


var slicesPerBox = 12;                  //Slices in each box.
var numberOfPeople = 22;                //Number of people at the party.
var pizzasOrdered = 7;                  // Number of pizzas ordered.
var slicesPerPerson = pizzasOrdered * slicesPerBox / numberOfPeople;            //Number of slices each person gets.
var roundDown = Math.floor(slicesPerPerson);    //If you should choose to round down this is the variable I've defined for that.
console.log("Each person ate " + slicesPerPerson + " \"slices of pizza at the party.\""); //Each person ate 3.8181818181818183 "slices of pizza at the party."







