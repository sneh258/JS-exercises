// Write a JavaScript program to replace every character in a given string
// with the character following it in the alphabet.

function replaceCharacter(inputOne)
{

    for(let i=0;i<inputOne.length;i++)
    {
        let char = inputOne.charCodeAt(inputOne[i]);
        console.log(char)
        let char1=String.fromCharCode(char+1)
        console.log(char1)
        //inputOne.replace(inputOne[index],char)
        
    }

    return inputOne;
}

console.log(replaceCharacter("sneha"))