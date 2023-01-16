const { getLargestEven, get_largest_even } = require('./largestEvenNumFinder');
test('testCaseOne', () => {
  expect(get_largest_even([1, 5, 7, 9])).toBe(-1);

});
test('testCaseTwo', () => {

  expect(get_largest_even([1, 2, 3, 4, 5])).toBe(4);
});
test('testCaseThree', () => {

  expect(get_largest_even([1, 2, 3, 4, 5, 6])).toBe(6);
});
test('testCaseFour', () => {

  expect(get_largest_even([1, 2, 3, 4, 5, 8])).toBe(8);
});
test('testCaseFive', () => {

  expect(getLargestEven([1, 2, 3, 4, 5, 92])).toBe(92);
});
test('testCaseSix', () => {

  expect(getLargestEven([1, 1, 3, 7, 9])).toBe(-1);
});
test('testCaseSeven', () => {

  expect(getLargestEven([1, 33, 77, 99])).toBe(-1);
});
test('testCaseEight', () => {

  expect(getLargestEven([1, 2, 3, 4, 5, 100])).toBe(100);
});
