const {isSameDigit,is_same_digits} = require('./ques2');
test('testCaseOne', () => {
    expect(isSameDigit(222)).toBe("True");
    
  });
test('testCaseTwo', () => {
    expect(isSameDigit(223)).toBe("False");
    
  });
test('testCaseThree', () => {
    expect(isSameDigit(2212)).toBe("False");
    
  });
test('testCaseFour', () => {
    expect(isSameDigit(122)).toBe("False");
    
  });
test('testCaseFive', () => {
    expect(is_same_digits(11)).toBe("True");
    
  });
test('testCaseSix', () => {
    expect(is_same_digits(10)).toBe("False");
    
  });
test('testCaseSeven', () => {
    expect(is_same_digits(22222)).toBe("True");
    
  });
test('testCaseEight', () => {
    expect(is_same_digits(1111)).toBe("True");
    
  });

  

