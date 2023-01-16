// Write a JavaScript function (both regular and arrow) 
// which takes an array of string as parameter to find the longest string from a given array


// wrong file name
// cover corner cases
//try using ternary operator
// do it using reduce


let inputOne = ['mycodeacademy', 'my', 'code'];

function longest_element_in_array(inputOne) //not element but string
{
  let max = 0;
  let index = 0;
  let store_index = index;
  let length = inputOne.length;

  while (length) {
    if (inputOne[index].length > max) {
      max = inputOne[index].length;
      store_index = index;
    }
    index++;
    length--;
  }

  return inputOne[store_index];
}


const longestElementInArray = (inputOne) => {

  let max = 0;
  let index = 0;
  let store_index = index;
  let length = inputOne.length;

  while (length) {
    if (inputOne[index].length > max) {
      max = inputOne[index].length;
      store_index = index;
    }
    index++;
    length--;
  }

  return inputOne[store_index];

};

module.exports = { longest_element_in_array, longestElementInArray };
//module.exports=longestElementInArray;

console.log(longest_element_in_array(inputOne));
console.log(longestElementInArray(inputOne));