const { replaceCharWithNext, replaceChar_withNext } = require('./moveCharToNext')

test('testCaseOne', () => {
  expect(replaceCharWithNext("this")).toBe("uijt");
});

test('testCaseTwo', () => {
  expect(replaceCharWithNext("javaScript")).toBe("kbwbTdsjqu");

});

test('testCaseThree', () => {
  expect(replaceCharWithNext("lovejavaScript")).toBe("mpwfkbwbTdsjqu");

});

test('testCaseFour', () => {
  expect(replaceCharWithNext("Scriptdone")).toBe("Tdsjquepof");

});

test('testCaseFive', () => {
  expect(replaceChar_withNext("welldone")).toBe("xfmmepof");

});

test('testCaseSix', () => {
  expect(replaceChar_withNext("class")).toBe("dmbtt");

});

test('testCaseSeven', () => {
  expect(replaceChar_withNext("my college")).toBe("nz!dpmmfhf");

});

test('testCaseEight', () => {
  expect(replaceChar_withNext("preserved")).toBe("qsftfswfe");

});
