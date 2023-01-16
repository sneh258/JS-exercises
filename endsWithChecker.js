// Write a JavaScript function ( both regular and arrow function) 
// which takes a string as parameter 
// to test whether a string end with "Script"(case-sensitive). The string length must be greater or equal to 6.

function endsWith(inputOne)
{

  return inputOne.endsWith('Script') ? 'True' : 'False';

}

console.log(endsWith('I am Learning JavaScript'));

const ends_With=(inputOne)=>inputOne.endsWith('Script') ? 'True' : 'False';



console.log(ends_With('I am Learning Java'));

module.exports={endsWith,ends_With};



