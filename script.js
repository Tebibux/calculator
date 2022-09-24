class Calculator {
	constructor(previousOperation, newOperation) {
		this.previousOperation = previousOperation;
		this.newOperation = newOperation;
		this.clearAll();
	}
	clearAll() {
		this.previousOperation = '';
		this.newOperation = '';
		this.calculate = undefined;
	}
	deleteOperand() {

	}
	appendOperand(value) {
	}
	calculate() {

	}

	display(value) {
		this.previousOperation = value;
		console.log(this.previousOperation)
	}
};

const newOperation = document.querySelector('.newOperation');
const previousOperation = document.querySelector('.previousOperation');
const clear = document.getElementsByClassName('allClear-delete');
const operation = document.querySelector('.op');
const numbers = document.querySelectorAll('.number');

// instantiation here
const calculator = new Calculator(previousOperation, newOperation);


numbers.forEach(number => {
	number.addEventListener('click', () => {
		// console.log(number.innerText);
		calculator.display(number.innerText);
	}
	)
});