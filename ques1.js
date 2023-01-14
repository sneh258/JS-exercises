// Write a JavaScript function (both regular and arrow) 
// which takes an array of integers as paramater, to get the largest even number. Return -1 if no even numbers are found.


// Regular function....

const numbers=[1, 2, 3, 4, 5]
const num=[1,5,7,9]

function isLargestEven(numbers)
{ // inputOne
    // function name based on objective
    let max = -1

    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]>max && numbers[i]%2==0)
        {
            max=numbers[i]

        }
    }
    
    return max;
    
}


// arrow function

const is_largest_even=(num)=>{

    let max = -1

    for(let i=0;i<num.length;i++)
    {
        if(num[i]>max && num[i]%2==0)
        {
            max=num[i]

        }
    }

    return max;
    

}

console.log('for regular function the result is : ',isLargestEven(numbers));

console.log('for arrow function the result is : ',is_largest_even(num));