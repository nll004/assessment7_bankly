const convertTimeIntoWords = require('./timeWord');

describe('Testing convertTimeIntoWords function', () => {
  test('it is a function', () => {
    expect(typeof convertTimeIntoWords).toBe('function');
  });

  test('It returns a string', () => {
    expect(typeof convertTimeIntoWords('02:27')).toBe('string');
  })

  test('Function returns correct words', () => {
    expect(convertTimeIntoWords('04:36')).toEqual('Four Thirty Six AM');
    expect(convertTimeIntoWords('23:59')).toEqual('Eleven Fifty Nine PM');
    expect(convertTimeIntoWords('12:00')).toEqual('Twelve Oh clock PM');
    expect(convertTimeIntoWords('00:00')).toEqual('Twelve Oh clock AM')
    expect(convertTimeIntoWords('00:01')).toEqual('Twelve Oh One AM')
    expect(convertTimeIntoWords('10:10')).toEqual('Ten Ten AM')
    expect(convertTimeIntoWords('8:15')).toEqual('Eight Fifteen AM')
    expect(convertTimeIntoWords('16:19')).toEqual('Four Nineteen PM')
  })
});
