const { longest_element_in_array, longestElementInArray } = require('./longestStringInArray');

test('testCaseOne', () => {
  expect(longestElementInArray(["we", "love", "code", "academy"])).toBe("academy");
});

test('testCaseTwo', () => {
  expect(longest_element_in_array(["snehalall", "lall"])).toBe("snehalall");

});

test('testCaseThree', () => {
  expect(longest_element_in_array(["rose", "tulip"])).toBe("tulip");

});

test('testCaseFour', () => {
  expect(longest_element_in_array(["qwerty", "oh"])).toBe("qwerty");

});

test('testCaseFive', () => {
  expect(longestElementInArray(["aditya", "kashyap"])).toBe("kashyap");

});

test('testCaseSix', () => {
  expect(longestElementInArray(["mycodeacademy", "my", "code"])).toBe("mycodeacademy");

});

test('testCaseSeven', () => {
  expect(longestElementInArray(["hi", "there"])).toBe("there");

});

test('testCaseEight', () => {
  expect(longestElementInArray(["hi", "there", "myhouse"])).toBe("myhouse");

});
