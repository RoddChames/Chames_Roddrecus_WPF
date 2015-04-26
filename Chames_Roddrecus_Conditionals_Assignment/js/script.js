/**
 * Created by Roddrecus Chames on 4/20/15.
 * Conditionals Assignment
 */

//Testing link between .js and index file
alert("This calculator tells the minimum number of bombs that need to be assembled based on branch of service. ");

var bombsByBranch = [100,200,300];

var serviceBranch = ["Airforce","Marines","Navy"];

var prompt1 = prompt("What branch of the service are you a member of? (Navy, Marines, Airforce)");
console.log(prompt1);



if(prompt1 === "Airforce") {
    console.log("The " + serviceBranch[0] + " requires a minimum of " + bombsByBranch[0] + " bombs to be assembled.");
}else{
    console.log("Invalid entry. Please enter valid input.");
    var prompt2 = prompt("Invalid entry. Please enter valid input.");
    console.log(prompt2);
    if(prompt2 === "Airforce"){
        console.log("The " + serviceBranch[0] + " requires a minimum of " + bombsByBranch[0] + " bombs to be assembled.");
    }
}

var prompt1 = prompt("How many bombs did you assemble for today's project?");
console.log(prompt1);

if(prompt1 >= bombsByBranch[0]) {
    console.log("You have accomplished the minimum ammount of assembled bombs for today's evolution.");
    alert("You have accomplished the minimum ammount of assembled bombs for today's evolution.");
}else {
    console.log("The " + serviceBranch[0] + " requires a minimum of " + bombsByBranch[0] + " bombs to be assembled.");
    var prompt2 = prompt("You have more work to do. \nThe " + serviceBranch[0] + " requires a minimum of " + bombsByBranch[0] + " bombs to be assembled.\nPlease enter a different value");
    console.log(prompt2);
    if (prompt2 <= bombsByBranch[0]) {
        console.log("You have accomplished the minimum ammount of assembled bombs for today's evolution.");
        alert("You have accomplished the minimum ammount of assembled bombs for today's evolution.");
    }
}










