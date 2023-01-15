// Q7. Write a JavaScript function ( both regular and arrow function) which takes an array of 2 strings as parameter 
// to concatenate two strings except their first character.

function concatenateStrings(text1,text2)
{
    return text1.slice(1).concat(text2.slice(1));
}

console.log(concatenateStrings("Sneha","Lall"))


// Arrow Function

const concatenate_Strings=(text1,text2)=>text1.slice(1).concat(text2.slice(1));


console.log(concatenate_Strings("hi","there"))

module.exports={concatenateStrings,concatenate_Strings};