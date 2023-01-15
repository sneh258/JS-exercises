// Q3. Write a JavaScript function (both regular and arrow) which takes a string as parameter, 
// to change the capitalization of all letters in a given string and returns the result and then print it.


let inputOne="MarRy HaD a LitTle LAmp"
let inputTwo="SneHA LaLL iT is"

function string_letter_conversion(inputOne)
{

    
    let newStr = "";
    for(let index = 0; index < inputOne.length; ++index) {
        let char = inputOne.charAt(index);
        if(char === char.toUpperCase()){
            newStr += inputOne.charAt(index).toLowerCase();
        } else {
            newStr += inputOne.charAt(index).toUpperCase();
        }
    }
    return newStr;
}



const interhangeOfCases = (inputTwo) => {
    let newStr = "";
    for(let index = 0; index < inputTwo.length; ++index) {
        let char = inputTwo.charAt(index);
        if(char === char.toUpperCase()){
            newStr += inputTwo.charAt(index).toLowerCase();
        } else {
            newStr += inputTwo.charAt(index).toUpperCase();
        }
    }
    return newStr;
}


module.exports={string_letter_conversion,interhangeOfCases};

// console.log(string_letter_conversion(inputOne))
// console.log(interhangeOfCases(inputTwo))
