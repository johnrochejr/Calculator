// Variable to hold input
// Need to create an empty array to push inputs to!
// let input = [];
let input = "";
let inputsReadyToCalc = [];
// Variable to hold inputs ready to calculate
// Select/grab where we want our info sent to (dynamically)
let display = document.getElementById("display-text");

function calc(obj) {
	// create a function 'calc' to push value to input
	// ... inputed by our 1 button. "1" is a string!
	// we use parseInt to change string to integer
	// use two == as a loose equality comparison:
	// .. loose equality compares two values for equality, after
	//... converting both values to a commmon type
	// convert data type
	if (obj.className === "num") {
		// addition assignment adds the value of the
		// ... right operand to a variable and assigns
		// ... the result to the variable
		input += obj.value;
		display.innerHTML = input; // sets value
		console.log(input);
		// value = parseInt(obj);
		// input.push(parseInt(obj.value));
		// console.log(obj.value);
		// InnerHTML property sets or gets HTML syntax describing
		// the element's descendants;
		// this logs 1 to display
	} else if (obj.className === "cancel") {
		// this is clear!
		input = "";
		inputsReadyToCalc = [];
		display.innerHTML = input;
		// resets array to empty []
	} else if (obj.className === "operator"
	&& input.length != 0) {
		// Display operator but doesn't save
		display.innerHTML = obj.value;
		// console.log(obj.value);
		// Save last input and the operator that was
		// ... put in
		inputsReadyToCalc.push(parseInt(input), obj.value);
		// reset input
		input = "";
		// if an operator button is clicked
		// and something has been input
		// inputsReadyToCalc.push(input, obj.value)
		// push the input and value of parameter to empty
		// array
		console.log(inputsReadyToCalc);
	} else if (obj.className === "evaluate"
	&& input.length != 0) {
		inputsReadyToCalc.push(parseInt(input), obj.value);
		total = evaluate(inputsReadyToCalc);
		// The eval() function evaluates JavaScript code
		// ... represented as a string.
		display.innerHTML = total;
		input = "";
		inputsReadyToCalc = [];
		input += total;
		}


	return input;
		// input = [];
		// = resets to empty array
		// display.innerHTML = "Working..."
		// console.log(display.innerHTML);
};
	// display.innerHTML = input;

	// console.log(input);
	// input.push(value);
	// pushes value to input
	// display.innerHTML = input
	// changes innerHTML of display to input


function evaluate(inputsReadyToCalc) {
	for (let i = 0; i < inputsReadyToCalc.length; i += 3) {
		let term1 = inputsReadyToCalc[i];
		let op = inputsReadyToCalc[i + 1];
		let term2 = inputsReadyToCalc[i + 2];
		let total = 0;
//
// 		// calculate value:
// 		// The switch statement evaluates an expression,
// 		// matching the expression's value to a case clause,
// 		// and executes statements associated with that case.
		switch (op) {
			case "+":
				total = term1 + term2;
				break;
			case "-":
				total = term1 - term2;
				break;
			case "/":
				total = term1 / term2;
				break;
			case "*":
				total = term1 * term2;
				break;
			default:
				null;
		}
		console.log(total);
		return total;
	}
};

































//
