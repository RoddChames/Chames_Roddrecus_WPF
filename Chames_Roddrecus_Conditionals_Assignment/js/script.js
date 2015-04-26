/**
 * Created by Roddrecus Chames on 4/20/15.
 * Conditionals Assignment
 */

//Testing link between .js and index file
alert("This calculator tells the minimum number of bombs that need to be assembled based on branch of service. ");

//Minimum bombs required to be assemble for each branch (Airforce: 100, Marines: 200, Navy: 300.).
var bombsByBranch = [100,200,300];

//These are the 3 military branches I chose to work with.
var serviceBranch = ["Airforce","Marines","Navy"];

//Prompt will find out what branch of service the user is in.
var question1 = prompt("What branch of the service are you a member of? (Navy, Marines, Airforce)");

//prints out input from question 1.
console.log(question1);

//////////// Start of conditional coding for Airforce. ////////////

//Ensures user enters Airforce in prompt.
if(question1 === serviceBranch[0]) {

    //based on the user's input this prints out how many bombs are required for their respective branches.
    console.log("The " + serviceBranch[0] + " requires a minimum of " + bombsByBranch[0] + " bombs to be assembled.");

//If user enters anything other than Airforce in the prompt then the following code will initialize.
}else{

    //prints out that an invalid entry was entered in the prompt.
    console.log("Invalid entry. Please enter valid input.");

    //This is a second chance for user to input valid info.
    var prompt2 = prompt("Invalid entry. Please enter valid input.");

    //This prints out the input of the above prompt.
    console.log(prompt2);

    //This ensures that after a second attempt to input valid information user is able to pick up where they left off.
    if(prompt2 === serviceBranch[0]){

        //Based on the user's input this prints out how many bombs are required for their respective branches.(initiated on second try).
        console.log("The " + serviceBranch[0] + " requires a minimum of " + bombsByBranch[0] + " bombs to be assembled.");
    }
}

//The user inputs how many bombs they assembled.
var question2 = prompt("How many bombs did you assemble for today's project?");

//Prints out the number the user inputs
console.log(question2);

//This conditional tracks whether the user has assembled the minimum required bombs.
if(question2 >= bombsByBranch[0]) {

    //Logs the input from the prompt.
    console.log("You have accomplished the minimum amount of assembled bombs for today's evolution.");

    //This alert is triggered when the user inputs a sufficient amount of bombs.
    alert("You have accomplished the minimum amount of assembled bombs for today's evolution.");

//The else statement is only initialized if the user doesn't put in the minimum number required by the branch of service.
}else {

    //This will print only when the user inputs a number below the minimum required.
    console.log("The " + serviceBranch[0] + " requires a minimum of " + bombsByBranch[0] + " bombs to be assembled.");

    //This prompt is the second chance for the user to input more bombs if needed.
    var prompt2 = prompt("You have more work to do. \nThe " + serviceBranch[0] + " requires a minimum of " + bombsByBranch[0] + " bombs to be assembled.\nPlease enter a different value");

    //This prints the amount when a second chance is given to the user.
    console.log(prompt2);

    //This ensures that the second chance given to the user is greater than or equal to the minimum bomb assembly required. This line also prints out that the user has completed the daily tasks, and alerts the user that they have completed the daily tasks.
    (prompt2 <= bombsByBranch[0]) ?  console.log("You have accomplished the minimum amount of assembled bombs for today's evolution.") : alert("You did not complete todays evolution");

}

