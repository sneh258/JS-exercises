// Q3. Write a JavaScript function (both regular and arrow) which takes a string as parameter, 
// to change the capitalization of all letters in a given string and returns the result and then print it.


let inputOne="MarRy"

function string_letter_conversion(inputOne)
{

    

    for(let index=0;index<inputOne.length;index++)
    {

        if(inputOne[index]==inputOne[index].toLocaleUpperCase())
        {
            inputOne[index]=inputOne[index].toLocaleLowerCase();
            
        }

        else{
            inputOne[index]=inputOne[index].toLocaleUpperCase();
        }
    } 
    return inputOne;
}

console.log(string_letter_conversion(inputOne))

//console.log(inputOne[0].toLocaleUpperCase())

//console.log(inputOne.replace(inputOne[0],inputOne[0].toLocaleLowerCase()))