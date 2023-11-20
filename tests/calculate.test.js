import performCalculation from "../logic/calculate";

describe('performCalculation function', () => {
  it('should perform addition correctly', () => {
    const result = performCalculation('add', 5, 3);
    expect(result).toBe(8);
  });

  it('should perform subtraction correctly', () => {
    const result = performCalculation('subtract', 10, 4);
    expect(result).toBe(6);
  });

  it('should perform multiplication correctly', () => {
    const result = performCalculation('multiply', 6, 7);
    expect(result).toBe(42);
  });

  it('should perform division correctly', () => {
    const result = performCalculation('divide', 20, 5);
    expect(result).toBe(4);
  });

  it('should throw an error for division by zero', () => {
    expect(() => {
      performCalculation('divide', 10, 0);
    }).toThrow('Division by zero is not allowed');
  });

  it('should throw an error for an invalid operator', () => {
    expect(() => {
      performCalculation('unknown', 5, 2);
    }).toThrow('Invalid operator');
  });
});