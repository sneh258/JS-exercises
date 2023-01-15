const {check_leap_Year,checkLeapYear}=require('./ques5.js')

test('testCaseOne', () => {
    expect(checkLeapYear(1880)).toBe("yes");
  });

test('testCaseTwo', () => {
    expect(checkLeapYear(1912)).toBe("yes");
    
  });

test('testCaseThree', () => {
    expect(checkLeapYear(1940)).toBe("yes");
    
  });

test('testCaseFour', () => {
    expect(checkLeapYear(2020)).toBe("yes");
    
  });

test('testCaseFive', () => {
    expect(check_leap_Year(2021)).toBe("no");
    
  });

test('testCaseSix', () => {
    expect(check_leap_Year(2022)).toBe("no");
    
  });

test('testCaseSeven', () => {
    expect(check_leap_Year(2023)).toBe("no");
    
  });

  test('testCaseEight', () => {
    expect(check_leap_Year(2019)).toBe("no");
    
  });
