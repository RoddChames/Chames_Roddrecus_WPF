/**
 * Roddrecus Chames  4/14/15  Expressions Assignment.
 */

//This line collects user name
var userName = prompt('Welcome to Game-Khana!!!\nPlease type in your name for us to better serve you.');

//This line puts out user name within friendly text
alert('Hello ' + userName + ' please select number of video game products.');

//prompt to see how many games the customer would like to purchase
var numberOfGames = prompt("How many video games would you like to purchase " + userName + "?");

//each video game costs 69.99
var videoGame = 69.99 * numberOfGames;

//prompt to see how many controllers customer would like
var numberOfControllers = prompt("How many controllers would you like to purchase " + userName + "?");

//each Controller costs 35.00
var gameController = 35.00 * numberOfControllers;

//prompt to see how many controllers customer would like
var numberOfConsoles = prompt("How many game consoles would you like to purchase " + userName + "?");

//Each game console costs 499.00
var gameConsole = 499.00 * numberOfConsoles;

//This is the grand total
var result = videoGame + gameController + gameConsole;

//This was used to check the grand total of all items purchased.
var grandTotal = console.log("Your grand total comes out to $" + result + " \nThank you for shopping with Game-Khana!");

//This alert box gives the grand total of all items purchased.
alert(grandTotal);










