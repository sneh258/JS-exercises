// Q2. Write a JavaScript function (both regular and arrow) 
// which takes a number as param to check whether all the digits in a given number are the same or not,
// and print true or false. Consider numbers to have 2 digits or more.


// Regular function

function is_same_digits(number)
{

  let last_digit=number%10;

  while(number!=0)
  {
    let current_digit=number%10;

    number=Math.floor(number/10);

    if(last_digit!=current_digit)
    {
      return 'False';
    }

  }

  return 'True';
}

// Arrow function

const isSameDigit=(number)=>{

  let last_digit=number%10;

  while(number!=0)
  {
    let current_digit=number%10;

    number=Math.floor(number/10);

    if(last_digit!=current_digit)
    {
      return 'False';
    }

  }

  return 'True';
};

module.exports={isSameDigit,is_same_digits};

// console.log("Regular function result for number 222 : ",is_same_digits(222));
// console.log("Arrow function result for number 232: ",isSameDigit(232));