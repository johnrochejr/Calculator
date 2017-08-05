// Variable to hold input
// Need to create an empty array to push inputs to!
let input = [];

// Variable to hold inputs ready to calculate
// Select/grab where we want our info sent to (dynamically)
let display = document.getElementById("display-text");

function calc(value) {
	// create a function 'calc' to push value to input
	// ... inputed by our 1 button. "1" is a string!
	// we use parseInt to change string to integer
	// use two == as a loose equality comparison:
	// .. loose equality compares two values for equality, after
	//... converting both values to a commmon type
	// convert data type
	if (value == "1") {
		value = parseInt(value);
		input.push(value);
		display.innerHTML = input; // sets value
		// InnerHTML property sets or gets HTML syntax describing
		// the element's descendants;
		// this logs 1 to display
	} else if (value === "C") {
		// this is clear!
		input = [];
		display.innerHTML = input;
		// resets array to empty []
	} else if (value === "/" || value === "-") {
		//still working here
	} else if (value === "=") {
		input = [];
		// = resets to empty array
		display.innerHTML = "Working..."
	}
	console.log(input);
	input.push(value);
	// pushes value to input
	display.innerHTML = input
	// changes innerHTML of display to input
};
