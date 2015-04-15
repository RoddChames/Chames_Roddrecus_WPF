/**
 * Created by Roddrecus Chames  on 4/14/15.
 */

//Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”  Calculate how old Sparky the pit bull is in dog years based on his actual age.

//Givens:
//Sparky’s age.

//Result Variable: Sparky’s age in dog years.


//Result to Print: “Sparky is X human years old which is X in dog years.

var humanYears = 4;                                                                                       //This is Sparkies age in human years. (I gave him this age since it wasn't told to us)

var dogYears = humanYears * 7;                                                                            //We were told that each year for a human is seven years for a dog.  So humanYears x 7 will give us the product.

var finalAgeDogYears = dogYears;                                                                          //This variable defines the final age already calculated together.

console.log("Sparky is " + humanYears + " human years, which is " + dogYears + "  dog years.");          //This prints out "Sparky is 4 human years, which is 28 dog years."




//Slice of Pie part 1

//A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)

//Given:
// Number of slices per pizza. (12)
//Number of people at the party. (22)
//Number of pizzas ordered. (7)

//Result Variables: Number of slices per person. (Can be a decimal or floating point).

//Result to Print: “Each person ate X slices of pizza at the party.”


var slicesPerBox = 12;                                                          //Slices in each box.

var numberOfPeople = 22;                                                        //Number of people at the party.

var pizzasOrdered = 7;                                                          // Number of pizzas ordered.

var slicesPerPerson = pizzasOrdered * slicesPerBox / numberOfPeople;            //Number of slices each person gets.

var roundDown = Math.floor(slicesPerPerson);                                    //If you should choose to round down this is the variable I've defined for that.

console.log("Each person ate " + slicesPerPerson + " \"slices of pizza at the party.\""); //Each person ate 3.8181818181818183 "slices of pizza at the party."

console.log("Each person ate " + roundDown + " \"slices of pizza at the party.\""); //Each person ate 3 "slices of pizza at the party."




//At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?

//Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)

//Given: Don’t make new given variables/constants for this. Instead use the givens you set up for Slice of Pie I.

//Result Variables: Number of slices Sparky gets to eat.

//Result to Print: “Sparky got X slices of pizza.”


var leftOvers = numberOfPeople  * .8181818181818183;                            //.8181818181818183 comes from the remainder of pizza left over by each guest....since the number I originally came up with was a decimal.

console.log("sparky got " + leftOvers + " slices of pizza." );                  //Sparky got 18.000000000000004 slices of pizza.




//You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the items in the array to calculate the average amount spent on groceries.

//Please note: there should only be one given for this problem set, the array holding the five weekly totals.  You should be able to access the array using the array access notation discussed earlier in the course.

//Givens: An array with five weekly grocery totals.

//  Result Variable:
    //Total amount spent on groceries.
    //Average weekly grocery spending.

    //Result to Print: “You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week” Discounts


var fiveWeeksGrocery = [73.20, 88.43, 68.67, 93.71, 69.51];

var totalAmount = fiveWeeksGrocery[0] + fiveWeeksGrocery[1] + fiveWeeksGrocery[2] + fiveWeeksGrocery[3] + fiveWeeksGrocery[4];                          //Total spent on groceries over 5 weeks.

var averageSpent = totalAmount / 5;         // Average amount spent on groceries over  5 weeks.

console.log("You have spent an average of $" + totalAmount + " on groceries over 5 weeks. That is an average of $" + averageSpent + " a week.");       //You have spent an average of $393.52 on groceries over 5 weeks. That is an average of $78.704 a week.



//Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)
//  Givens:
    //Original price
    // Discount percentage (20% would be 20, for example)
    //  Description of item
    // Sales tax percentage

// Result Variables:
    //  Price of the item with tax
    //  Price of the item without tax

// Result to Print: “Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.”


var priceOriginal = 7.99;           //original price.

var discountPercent = 10;           //10% discount.

var itemName = "Case of water";     //item is case of water

var salesTax = 0.06;                //sales tax is 6%.

var priceWithTax = priceOriginal * salesTax + priceOriginal; //7.99 x 0.06 = 0.4794 (which is the total sales tax) so add the original price on to that and you will have $8.4694.

var decimal2 = priceWithTax.toFixed(2);  //method used to make the final outcome two decimal spaces instead of four.

console.log("Your " + itemName + " was originally S" + priceOriginal + " , but after a " + discountPercent + "% discount, it is now $" + priceOriginal + " without tax, and $" + decimal2 + " with tax." ); //Your Case of water was originally S7.99 , but after a 10% discount, it is now $7.99 without tax, and $8.47 with tax.


//I don't understand how to work this problem.





