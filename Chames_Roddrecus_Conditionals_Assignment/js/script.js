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
console.log(question1);

if(question1 === serviceBranch[0]){
    console.log("The " + serviceBranch[0] + " requires a minimum of " + bombsByBranch[0] + " to be assembled to complete this evolution.");
}else if(question1 === serviceBranch[1]){
    console.log("The " + serviceBranch[1] + " requires a minimum of " + bombsByBranch[1] + " to be assembled to complete this evolution.");
}else if(question1 === serviceBranch[2]){
    console.log("The " + serviceBranch[2] + " requires a minimum of " + bombsByBranch[2] + " to be assembled to complete this evolution.");
}else{
    console.log("Please select a valid branch of service.\nWhat branch of the service are you a member of? (Navy, Marines, Airforce)");
    question1 = prompt("Please select a valid branch of service.\nWhat branch of the service are you a member of? (Navy, Marines, Airforce)");
    console.log(question1);
}


var question2 = prompt("How many bombs have you assembled for today's training?");
    console.log(question2);

if(question1 === serviceBranch[0] && question2 >= bombsByBranch[0]){
    console.log("You have successfully assembled the minimum number of bombs required for today's training evolution. Enjoy the rest of your day!");
}else if(question1 === serviceBranch[1] && question2 >= bombsByBranch[1]){
    console.log("You have successfully assembled the minimum number of bombs required for today's training evolution. Enjoy the rest of your day!");
}else if(question1 === serviceBranch[2] && question2 >= bombsByBranch[2]){
    console.log("You have successfully assembled the minimum number of bombs required for today's training evolution. Enjoy the rest of your day!");
}else{
    console.log("You have not assembled the minimum number of bombs required by your branch of service.\nPlease continue training.");
    var question2 = prompt("Please build the minimum number of bombs required by your branch of service.\nPlease enter new amount.");
    console.log(question2);
}

if(question1 === serviceBranch[0] && question2 >= bombsByBranch[0]){
    console.log("You have successfully assembled the minimum number of bombs required for today's training evolution. Enjoy the rest of your day!");
}else if(question1 === serviceBranch[1] && question2 >= bombsByBranch[1]){
    console.log("You have successfully assembled the minimum number of bombs required for today's training evolution. Enjoy the rest of your day!");
}else if(question1 === serviceBranch[2] && question2 >= bombsByBranch[2]){
    console.log("You have successfully assembled the minimum number of bombs required for today's training evolution. Enjoy the rest of your day!");
}else{
    console.log("Please contact our help desk for more assistance.");
    alert("Please contact our help desk for more assistance.");
}