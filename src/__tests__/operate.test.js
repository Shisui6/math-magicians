import operate from '../components/Calculator/logic/operate';

describe('Testing Operate function', () => {
  // Check if the addition is correct
  describe('Addition', () => {
    test('1 + 2 == 3 ? ', () => {
      // Arrange
      const numberOne = 1;
      const numberTwo = 2;
      const operation = '+';

      // Act
      const result = operate(numberOne, numberTwo, operation);

      //Assert
      expect(result).toBe('3');
    });

    test('145 + 273 == 418 ? ', () => {
      // Arrange
      const numberOne = 145;
      const numberTwo = 273;
      const operation = '+';

      // Act
      const result = operate(numberOne, numberTwo, operation);

      //Assert
      expect(result).toBe('418');
    });
  });

  // Check if the subtraction is correct
  describe('Subtraction', () => {
    test('-142 - 2 == -144 ? ', () => {
      // Arrange
      const numberOne = -142;
      const numberTwo = 2;
      const operation = '-';

      // Act
      const result = operate(numberOne, numberTwo, operation);

      //Assert
      expect(result).toBe('-144');
    });

    test('14.08 - 7.42  ==  6.66 ? ', () => {
      // Arrange
      const numberOne = 14.08;
      const numberTwo = 7.42;
      const operation = '-';

      // Act
      const result = operate(numberOne, numberTwo, operation);

      //Assert
      expect(result).toBe('6.66');
    });
  });

  // Check if the multiplication is correct
  describe('Multiplication', () => {
    test('1000 * 0 == 0 ? ', () => {
      // Arrange
      const numberOne = 1000;
      const numberTwo = 0;
      const operation = 'x';

      // Act
      const result = operate(numberOne, numberTwo, operation);

      //Assert
      expect(result).toBe('0');
    });

    test('7248 * 4789 == 34710672 ? ', () => {
      // Arrange
      const numberOne = 7248;
      const numberTwo = 4789;
      const operation = 'x';

      // Act
      const result = operate(numberOne, numberTwo, operation);

      //Assert
      expect(result).toBe('34710672');
    });
  });

  describe('Division', () => {
    // Check if the division is correct
    test('80 / 0 = It should return Can\'t divide by 0. ? ', () => {
      // Arrange
      const numberOne = 80;
      const numberTwo = 0;
      const operation = '÷';

      // Act
      const result = operate(numberOne, numberTwo, operation);

      //Assert
      expect(result).toBe('Can\'t divide by 0.');
    });

    // Check if the division by 0 is correct
    test('75 / 26  = 2.88461538461538461538 ? ', () => {
      // Arrange
      const numberOne = 75;
      const numberTwo = 26;
      const operation = '÷';

      // Act
      const result = operate(numberOne, numberTwo, operation);

      //Assert
      expect(result).toBe('2.88461538461538461538');
    });
  });

  // Check if the Modulo is correct
  describe('Modulo', () => {
    test('15 % 7 == 1 ? ', () => {
      // Arrange
      const numberOne = 15;
      const numberTwo = 7;
      const operation = '%';

      // Act
      const result = operate(numberOne, numberTwo, operation);

      //Assert
      expect(result).toBe('1');
    });

    // Check if the division by 0 is correct
    test('8 % 0 == It should return Can\'t find modulo as can\'t divide by 0. ? ', () => {
      // Arrange
      const numberOne = 8;
      const numberTwo = 0;
      const operation = '%';

      // Act
      const result = operate(numberOne, numberTwo, operation);

      //Assert
      expect(result).toBe('Can\'t find modulo as can\'t divide by 0.');
    });
  });

  // Check if the Random operation is throwing error
  describe('Random operation', () => {
    // Check if the division by 0 is correct
    test(' 7 $ 5 == It should throw an error Unknown operation $', () => {
      // Arrange
      const numberOne = 7;
      const numberTwo = 5;
      const operation = '$';

      // Act
      const result = () => {operate(numberOne, numberTwo, operation)};

      //Assert
      expect(result).toThrowError('Unknown operation \'$\'');
    });
  })
});
