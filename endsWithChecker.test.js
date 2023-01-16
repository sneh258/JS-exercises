const { ends_With, endsWith } = require('./endsWithChecker')

test('testCaseOne', () => {
  expect(endsWith("i am learning javaScript")).toBe("True");
});

test('testCaseTwo', () => {
  expect(endsWith("this is javaScript")).toBe("True");

});

test('testCaseThree', () => {
  expect(endsWith("i love javaScript")).toBe("True");

});

test('testCaseFour', () => {
  expect(endsWith("Script")).toBe("True");

});

test('testCaseFive', () => {
  expect(ends_With("this is well done")).toBe("False");

});

test('testCaseSix', () => {
  expect(ends_With("a class")).toBe("False");

});

test('testCaseSeven', () => {
  expect(ends_With("my college is kiit")).toBe("False");

});

test('testCaseEight', () => {
  expect(ends_With("no preserved")).toBe("False");

});
