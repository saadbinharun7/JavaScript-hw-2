/*4.Create a function canVote that takes two parameters: age and citizenship
* If age is 18 or older and citizenship is "Bangladeshi", print "You are eligible to vote."
* Otherwise, print "You are not eligible to vote." */

function canVote(age, citizenship){
    if(age > 17 && citizenship == "Bangladeshi"){
        return "You are eligiable to vote";
    }
    else{
        return "You are not eligible to vote";
    }
}

let result = canVote(18, "Bangladeshi");
console.log(result);