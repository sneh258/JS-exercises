// Write a JavaScript program to replace every character in a given string
// with the character following it in the alphabet.

function replaceChar_withNext(inputOne)
{

    
  let newStr = '';
  for(let i = 0; i < inputOne.length ; ++i) {
    if(inputOne[i] === 'z')
      newStr += 'a';
    else if(inputOne[i] === 'Z')
      newStr += 'A';
    else 
      newStr += String.fromCharCode(inputOne.charCodeAt(i) + 1);
  }
  return newStr;
    
}

console.log(replaceChar_withNext('my college'));

const replaceCharWithNext=(inputOne)=>
{

    
  let newStr = '';
  for(let i = 0; i < inputOne.length ; ++i) {
    if(inputOne[i] === 'z')
      newStr += 'a';
    else if(inputOne[i] === 'Z')
      newStr += 'A';
    else 
      newStr += String.fromCharCode(inputOne.charCodeAt(i) + 1);
  }
  return newStr;
    
};

console.log(replaceCharWithNext('preserved'));

module.exports={replaceCharWithNext,replaceChar_withNext};
