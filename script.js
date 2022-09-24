class Calculator {
	constructor(newOperation, previousOperation) {
		this.previousOperation = previousOperation;
		this.newOperation = newOperation;
		// console.log(this.newOperation.innerText)
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
		if (value === '.' && this.newOperation.includes('.')) return;
		this.newOperation = this.newOperation.toString() + value;
		// console.log(this.newOperation);
	}
	calculate() {

	}

	display() {
		// console.log(this.previousOperation)
		newOperation.innerText = this.newOperation;
	}
};

const newOperation = document.querySelector('.newOperation');
const previousOperation = document.querySelector('.previousOperation');
const clear = document.getElementsByClassName('allClear-delete');
const operation = document.querySelector('.op');
const numbers = document.querySelectorAll('.number');

// instantiation here
const calculator = new Calculator(newOperation, previousOperation);


numbers.forEach(number => {
	number.addEventListener('click', () => {
		// console.log(number.innerText);
		calculator.appendOperand(number.innerText)
		calculator.display();
	}
	);
});