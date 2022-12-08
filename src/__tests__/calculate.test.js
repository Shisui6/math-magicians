import calculate from '../components/Calculator/logic/calculate';

describe('calculate()', () => {
  it('returns an object with null properties when the AC button is pressed', () => {
    const button = 'AC';
    const obj = {
      total: 5,
      next: 5,
      operation: '+',
    };

    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, button);

    expect(result).toStrictEqual(expected);
  });

  it('should update the total property for the = button', () => {
    const button = '=';
    const obj = {
      total: 5,
      next: 5,
      operation: '+',
    };

    const expected = {
      total: '10',
      next: null,
      operation: null,
    };
    const result = calculate(obj, button);

    expect(result).toStrictEqual(expected);
  });

  it('should update the next property for the . button and an object with null properties', () => {
    const button = '.';
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const expected = {
      total: null,
      next: '0.',
      operation: null,
    };
    const result = calculate(obj, button);

    expect(result).toStrictEqual(expected);
  });

  it('should update the next property for the +/- button and an object with a next property', () => {
    const button = '+/-';
    const obj = {
      total: null,
      next: 5,
      operation: null,
    };

    const expected = {
      total: null,
      next: '-5',
      operation: null,
    };
    const result = calculate(obj, button);

    expect(result).toStrictEqual(expected);
  });

  it('should update the next property for the 5 button and an object with truthy next and operation properties', () => {
    const button = '5';
    const obj = {
      total: null,
      next: 5,
      operation: '+',
    };

    const expected = {
      total: null,
      next: '55',
      operation: '+',
    };
    const result = calculate(obj, button);

    expect(result).toStrictEqual(expected);
  });
});
