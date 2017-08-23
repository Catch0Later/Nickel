/* jshint esversion: 6 */
/* Purpose */
/* Day 1: 0.05 and every day increments every 24hours by 0.05 */
/* Example */
/* Day 1:  0.05             
   Day 2:  0.10     
   Day 10: 0.50
   Day 25: 1.25
   ...
*/
/* Formula */
/*
    Compounding Formula
    A = P(1+(r/n)^(nf))

    P = principal amount (the initial amount you borrow or deposit)
    r  = annual rate of interest (as a decimal)
    t  = number of years the amount is deposited or borrowed for.
    A = amount of money accumulated after n years, including interest.
    n  =  number of times the interest is compounded per year 

    Simple Interest Formula
    A = P(1 + rt)

    A = Total Accrued Amount (principal + interest)
    P = Principal Amount
    I = Interest Amount
    r = Rate of Interest per year in decimal; r = R/100
    R = Rate of Interest per year as a percent; R = r * 100
    t = Time Period involved in months or years
*/

/* Using the formula won't work, let's try recursion! */
/* Let's figure out: 
    How much I should contribute that day
    How much I should have saved before that day
*/
// We are contributing 0.05 * days
// So on the 23ed day we will contribute 23 * 0.05 = 1.15
// Day 1 = 0.05
// So we need to add the total of the preceeding day together

function nickelValue(day){
    let dayValue = day * 0.05;

    if(day === 1){
        return dayValue;
    }
    else{
        return (dayValue + nickelValue(day-1));
    }
}
console.log(nickelValue(365));

const appendValue = function(){
    document.getElementById('answer_box').value = "";
    day = document.getElementById('inputValue').value;
    day = parseInt(day);
    document.getElementById('answer_box').value = nickelValue(day);
};