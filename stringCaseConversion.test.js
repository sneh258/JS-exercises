const { string_letter_conversion, interhangeOfCases } = require('./stringCaseConversion');
test('testCaseOne', () => {
  expect(string_letter_conversion("Sneha")).toBe("sNEHA");

});
test('testCaseTwo', () => {
  expect(string_letter_conversion("RahuL")).toBe("rAHUl");

});
test('testCaseThree', () => {
  expect(string_letter_conversion("SAatwiK")).toBe("saATWIk");

});
test('testCaseFour', () => {
  expect(string_letter_conversion("MarRy HaD a LitTle LAmp")).toBe("mARrY hAd A lITtLE laMP");

});
test('testCaseFive', () => {
  expect(interhangeOfCases("SneHA LaLL iT is")).toBe("sNEha lAll It IS");

});
test('testCaseSix', () => {
  expect(interhangeOfCases("a QuiCk Brown fox")).toBe("A qUIcK bROWN FOX");

});
test('testCaseSeven', () => {
  expect(interhangeOfCases("I am HYDroPHObic")).toBe("i AM hydROphoBIC");

});
test('testCaseEight', () => {
  expect(interhangeOfCases("Hi")).toBe("hI");

});



