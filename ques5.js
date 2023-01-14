// Write a JavaScript function ( both regular and arrow function) which takes year as parameter 
// to determine and print whether a given year is a leap year or not. Try using ternary operator

function checkLeapYear(year)
{
    let theYear="abc"
    
    if((year%4==0)&&(year%100!=0))
    {
        theYear="leap"
    }

    return theYear=="leap" ? "yes" : "no";
}


console.log(checkLeapYear(2000));

const check_leap_Year=(year)=>
{
    let theYear="abc"
    
    if((year%4==0)&&(year%100!=0))
    {
        theYear="leap"
    }

    return theYear=="leap" ? "yes" : "no";

}

console.log(check_leap_Year(2004));
