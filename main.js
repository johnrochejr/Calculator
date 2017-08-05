// Variable to hold input
// Need to create an empty array to push inputs to!
let input = [];

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
		// value = parseInt(obj);
		input.push(parseInt(obj.value));
		// display.innerHTML = input; // sets value
		console.log(obj.value);
		// InnerHTML property sets or gets HTML syntax describing
		// the element's descendants;
		// this logs 1 to display
	} else if (obj.className === "cancel") {
		// this is clear!
		input = [];
		display.innerHTML = input;
		// resets array to empty []
	} else if (obj === "/" || obj === "-") {
		//still working here
	} else if (obj === "=") {
		input = [];
		// = resets to empty array
		display.innerHTML = "Working..."
		console.log(display.innerHTML);
	}
	display.innerHTML = input;
	return input;
	// console.log(input);
	// input.push(value);
	// pushes value to input
	// display.innerHTML = input
	// changes innerHTML of display to input
};
