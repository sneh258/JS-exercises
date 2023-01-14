// Write a JavaScript function ( both regular and arrow function) 
// which takes a string as parameter to count the number of vowels in a given string.

function vowelCount(inputOne)
{

    let vowelCount=0

    const vowels=['a','e','i','u','o']
    for(let index=0;index<inputOne.length;index++)
    {
        if(vowels.includes(inputOne[index]))
        
        {
            vowelCount++;
        }
}

return vowelCount;
    
}

console.log(vowelCount("hi this is sneha"))

// Arrow Function

const vowel_Count=(inputOne)=>
{

    let vowelCount=0

    const vowels=['a','e','i','u','o']
    for(let index=0;index<inputOne.length;index++)
    {
        if(vowels.includes(inputOne[index]))
        
        {
            vowelCount++;
        }
}

return vowelCount;
    
}

console.log(vowel_Count("hi this is me"))