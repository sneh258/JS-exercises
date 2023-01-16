const { concatenateStrings, concatenate_Strings } = require('./concatenateStrings')

test('testCaseOne', () => {
  expect(concatenateStrings("this", "is")).toBe("hiss");
});

test('testCaseTwo', () => {
  expect(concatenateStrings("this", "javaScript")).toBe("hisavaScript");

});

test('testCaseThree', () => {
  expect(concatenateStrings("love", "javaScript")).toBe("oveavaScript");

});

test('testCaseFour', () => {
  expect(concatenateStrings("Script", "done")).toBe("criptone");

});

test('testCaseFive', () => {
  expect(concatenate_Strings("well", "done")).toBe("ellone");

});

test('testCaseSix', () => {
  expect(concatenate_Strings("a", "class")).toBe("lass");

});

test('testCaseSeven', () => {
  expect(concatenate_Strings("my", "college")).toBe("yollege");

});

test('testCaseEight', () => {
  expect(concatenate_Strings("no", "preserved")).toBe("oreserved");

});
