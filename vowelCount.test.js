const { vowelCount, vowel_Count } = require('./vowelCount')

test('testCaseOne', () => {
  expect(vowelCount("this")).toBe(1);
});

test('testCaseTwo', () => {
  expect(vowelCount("javaScript")).toBe(3);

});

test('testCaseThree', () => {
  expect(vowelCount("lovejavaScript")).toBe(5);

});

test('testCaseFour', () => {
  expect(vowelCount("Scriptdone")).toBe(3);

});

test('testCaseFive', () => {
  expect(vowel_Count("welldone")).toBe(3);

});

test('testCaseSix', () => {
  expect(vowel_Count("class")).toBe(1);

});

test('testCaseSeven', () => {
  expect(vowel_Count("my college")).toBe(3);

});

test('testCaseEight', () => {
  expect(vowel_Count("preserved")).toBe(3);

});
