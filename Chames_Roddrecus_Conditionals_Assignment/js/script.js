/**
 * Created by Roddrecus Chames on 4/20/15.
 * Conditionals Assignment
 */

//Testing link between .js and index file
alert("This calculator tells the minimum number of bombs that need to be assembled based on branch of service. ")

var bombsByBranch = [100,200,300];

var serviceBranch = ["Airforce","Marines","Navy"];

var prompt1 = prompt("What branch of the service are you a member of? (Navy, Marines, Airforce)");
console.log(prompt1);


if(prompt1 === serviceBranch[0]||"airforce"){
    console.log("The " +serviceBranch[0]+ " requires a minimum of " +bombsByBranch[0]+ " bombs to be assembled.");
    alert("The " +serviceBranch[0]+ " requires a minimum of " +bombsByBranch[0]+ " bombs to be assembled.");
}else{
    prompt1 = prompt("This entry is not valid");
    console.log("Entry not valid");
}


