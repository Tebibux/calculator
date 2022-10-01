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
// Used to retrieve the equal sign
const equalSign = document.querySelector('.equalSign');
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
		if (operation !== '') return;
		else {
			operation = e.target.innerText;
			previousBox.innerText = currentBox.innerText;
			previousBox.innerText += operation;
			num = ''
			currentBox.innerText = num;
		}
	});
});
// parsing equal sign
equalSign.addEventListener('click', () => {
	if (currentBox.innerText === '') return;
	else {
		calculate()
	}
})
// function to calculate the operation
function calculate(command) {
	let firstNum = previousBox.innerText.slice(0, -1);
	let secondNum = currentBox.innerText;
	if (operation === '*') {
		result = parseFloat(secondNum) * parseFloat(firstNum);
		tempClear();
	}
	if (operation === '/') {
		result = parseFloat(secondNum) / parseFloat(firstNum);
		tempClear();
	}
	if (operation === '-') {
		result = parseFloat(secondNum) - parseFloat(firstNum);
		tempClear();
	}
	if (operation === '+') {
		result = parseFloat(secondNum) + parseFloat(firstNum);
		tempClear();
	}

}
// for temporary clearance
function tempClear() {
	currentBox.innerText = result;
	previousBox.innerText = '';
	operation = '';
}