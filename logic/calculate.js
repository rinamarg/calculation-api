/**
 * Performs a calculation based on the specified operator and operands.
 *
 * @param {string} operator - The operator ('add', 'subtract', 'multiply', 'divide').
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The result of the calculation.
 */

const performCalculation = (operator, num1, num2) => {
	switch (operator) {
		case 'add':
			return num1 + num2;
		case 'subtract':
			return num1 - num2;
		case 'multiply':
			return num1 * num2;
		case 'divide':
      if(num2 == 0) {
        throw 'Division by zero is not allowed';
      }
			return num1 / num2;
		default:
			throw "Invalid operator";
	}
}

export default performCalculation;