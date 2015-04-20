/**
 * Created by Webmaster on 4/20/15.
 */


//weight required for contest
var reqWeight = 250;

//weight of contestant
var contestantWeight = 251;

//if contestant does not weigh a minimum of 250 lbs then they cannot participate in contest
if(contestantWeight < reqWeight) {
    console.log("No contest for you!");
}else {
    console.log("You are ready for the contest!");
}
