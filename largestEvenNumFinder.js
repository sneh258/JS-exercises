// Write a JavaScript function (both regular and arrow) 
// which takes an array of integers as paramater, to get the largest even number. Return -1 if no even numbers are found.


// Regular function....

const inputOne=[-1, -2, -3, -4, -5];
const inputTwo=[1,5,7,9];

function getLargestEven(numbers)
{ 
  // function name based on objective

    
  let max = Number.MIN_SAFE_INTEGER;

  for(let i=0;i<numbers.length;i++)
  {
    if(numbers[i]>max && numbers[i]%2==0)
    {
      max=numbers[i];

    }
  }
    
  return max==Number.MIN_SAFE_INTEGER?-1:max;
    
}


// arrow function

const get_largest_even=(numbers)=>{
  let max = Number.MIN_SAFE_INTEGER;

  for(let i=0;i<numbers.length;i++)
  {
    if(numbers[i]>max && numbers[i]%2==0)
    {
      max=numbers[i];

    }
  }
    
  return max==Number.MIN_SAFE_INTEGER?-1:max;
};
module.exports = {getLargestEven, get_largest_even};

console.log(get_largest_even(inputTwo));
console.log(getLargestEven(inputOne));
