// Write a JavaScript function ( both regular and arrow function) which takes year as parameter 
// to determine and print whether a given year is a leap year or not. Try using ternary operator

function checkLeapYear(year)
{

  return year%4==0 && year%100!=0 ? 'yes' : 'no';
}


console.log(checkLeapYear(2000));

const check_leap_Year=(year)=>year%4==0 && year%100!=0 ? 'yes' : 'no';


console.log(check_leap_Year(2004));

module.exports={check_leap_Year,checkLeapYear};
