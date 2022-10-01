// Constant Variable declaration
// display boxes
const currentBox = document.querySelector('.currentBox');
const previousBox = document.querySelector('.previousBox');
// Used to delete the last variable entered
const btnDelete = document.querySelector('.btnDelete')
// Used to clear all the entered value
const btnClear = document.querySelector('.btnClear');
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
	if (currentBox.innerText === '' && previousBox.innerText === '') return;
	else{
		calculate()
		previousBox.innerText = '';
	}
})
// function to calculate the operation
function calculate(command) {
	let firstNum = previousBox.innerText.slice(0, -1);
	let secondNum = currentBox.innerText;
	if (operation === '*') {
		result = parseFloat(firstNum) * parseFloat(secondNum);
		tempClear();
	}
	else if (operation === '/') {
		result = parseFloat(firstNum) / parseFloat(secondNum);
		tempClear();
	}
	else if (operation === '-') {
		result = parseFloat(firstNum) - parseFloat(secondNum);
		tempClear();
	}
	else if (operation === '+') {
		result = parseFloat(firstNum) + parseFloat(secondNum);
		tempClear();
	}

}
// for temporary clearance
function tempClear() {
	currentBox.innerText = '';
	currentBox.innerText = result;
	previousBox.innerText = '0';
	operation = '';
}

// for deleting the last element
btnDelete.addEventListener('click', ()=>{
	if(currentBox.innerText === '') return;
	else if(result){
		num = '';
		currentBox.innerText = currentBox.innerText.slice(0,-1);
	}
	else{
		// let tempCurrent = '';
		// tempCurrent = currentBox.innerText.slice(0, -1);
		// currentBox.innerText = '';
		// currentBox.innerText = tempCurrent;
		num = num.slice(0, -1);
		currentBox.innerText = num;
	}
});
btnClear.addEventListener('click', () =>{
	previousBox.innerText = '0';
	currentBox.innerText = '0';
	num = '';
	operation = '';
});