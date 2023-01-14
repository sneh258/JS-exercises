// Write a JavaScript function (both regular and arrow) 
// which takes an array of string as parameter to find the longest string from a given array

let inputOne=["we", "love", "code", "academy"]

function longest_element_array(inputOne)
{
    let max=0
    let index=0
    let length=inputOne.length

    while(length)
    {
        if(inputOne[index].length>max)
        {
            max=index;
        }
        index++;
        length--;
    }

    return inputOne[max];
}


const longestElementArray=(inputOne)=>
{

    let max=0
    let index=0
    let length=inputOne.length

    while(length)
    {
        if(inputOne[index].length>max)
        {
            max=index;
        }
        index++;
        length--;
    }

    return inputOne[max];

}

console.log(longest_element_array(inputOne))
console.log(longestElementArray(inputOne))