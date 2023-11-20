/**
 * Validation logic for calculation inputs.
 * Checks if inputs are valid for calculation.
 *
 * @param {string} operator - The arithmetic operator ('add', 'subtract', 'multiply', 'divide').
 * @param {number} num1 - The first number for the operation.
 * @param {number} num2 - The second number for the operation.
 * @throws {string} - Throws an error message if validation fails.
 * @returns {boolean} - Returns true if the inputs are valid for the specified operator.
 * @throws {string} - Throws an error message if validation fails.
 */

const validateCalculation = (operator, num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    throw 'Invalid numbers provided';
  }

  switch (operator) {
    case 'add':
    case 'subtract':
    case 'multiply':
      return true;
    case 'divide':
      if (num2 === 0) {
        throw 'Division by zero is not allowed';
      }
      return true;
    default:
      throw 'Invalid operator';
  }
};

export {
  validateCalculation
};