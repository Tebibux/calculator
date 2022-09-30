// Constant Variable declaration
// Used to retrieve all the operation buttons
const operationBtn = document.querySelectorAll('.operation');
// Used to retrieve all the delete buttons
const deleteBtn = document.querySelectorAll('.btnDelete');
// Used to retrieve all the number buttons
const numberBtn = document.querySelectorAll('.numberBtn');


// console.log(currentNumber.join(''));
// let i = currentNumber.join('');
// console.log(parseInt(i))
numberBtn.forEach(number => {
	number.addEventListener('click', (e) => {
		console.log(e)
	})
});

