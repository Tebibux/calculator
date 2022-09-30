// Constant Variable declaration
// display boxes
const currentBox = document.querySelector('.currentBox');
const previousBox = document.querySelector('.previousBox');
// Used to retrieve all the operation buttons
const operationBtn = document.querySelectorAll('.operation');
// Used to retrieve all the delete buttons
const deleteBtn = document.querySelectorAll('.btnDelete');
// Used to retrieve all the number buttons
const numberBtn = document.querySelectorAll('.numberBtn');

// variable result is used to store result after multiplication
let result;
// temp variable for number to store clicked number
let num = '';
numberBtn.forEach(number => {
	number.addEventListener('click', (e) => {
		if (e.target.innerText === '.' && num.includes('.')) return;

		else {
			if (e.target.innerText === '.' && currentBox.innerText === '') {
				num = 0;
			};
			num += e.target.innerText;
			currentBox.innerText = num;
		}

	})
});
// temp variable for storing an operation
let operation = '';
operationBtn.forEach(opCommand => {
	opCommand.addEventListener('click', (e) => {

		if ((e.target.innerText === '*' && operation.includes('*')) ||
			(e.target.innerText === '/' && operation.includes('/')) ||
			(e.target.innerText === '+' && operation.includes('+')) ||
			(e.target.innerText === '-' && operation.includes('-'))
		) return;
		else {
			operation = e.target.innerText;
			previousBox.innerText += num;
			previousBox.innerText += operation;
			num = '';
			calculate(operation);
			operation = '';
		}
	})
});
// function to calculate the operation
function calculate(command) {
	let firstNumber = '';
	let secondNumber = '';
	secondNumber = currentBox.innerText;
	firstNumber = previousBox.innerText;
	firstNumber.slice(0, -1);
	secondNumber.slice(0, -1);
	console.log(secondNumber);
	if(command === '*'){
		result = parseFloat(firstNumber) * parseFloat(secondNumber);
		currentBox.innerText = '';
		currentBox.innerText = result;
	}
}