//
//  3. From there, I am going to select nodes with JS to add functionality to each
//  button. Using functions and algorithsm, I need to creat code for:
//    A. 'Clear' - Clears whatever content has been input into the calculator, causing
//      the 'results screen' to revert back to the value 0.
//    B. 'Results screen' - Whatever numbers or actions are taken, the resulting
//      information will show up here. I need to figure out how to link the screen
//      to all the other buttons, and ensure the info is logged correctly.
//    C. Number buttons 1 - 9: Much like blackjack calculator, the values of these
//      buttons correspond directly to the number.
//    D. Math buttons (division, mult., sub, add) - Action buttons that will perform
//      a task on whatver numbers are put into the calculator
//    E. Equals - button that totals whatver math action that has been put in the
//      system
//    F. Decimal - adds a decimal to numbers.
//
//
//
//  4. Once I have statically created each button with HTML, I will use JS to add
//    event listeners for click and keyboard input (using number pad, /, X, -, +, =, .)
//
//
//
//  5. I have to devise algorithms that actually accomplish whatever math action
//    has been taken
//
//
//
//   I am having a tough time mapping out which nodes I need to select and how
//   dynamic content needs to be added to my calculator
//

//   I just spoke with Gavin:
//   For now - focus on getting the '1 button' to listen to a click, and then
//   log its value to the display screen

//   for all buttons, one event listener  with a for loop
//   iterate through the buttons.length

//   for event listener: click, then function

// button.addEventListener("click", calc(button.value));
// select buttons so
// I can add event listener

// simple test to see if selector is working corretly
// console.log(button);

function calc(buttonInfo) {
	let value = buttonInfo.value;
	let type = buttonInfo.name;
	let display = document.querySelector('.display');

	console.log(type);

	if (type === 'num') {
		display.textContent = value;
	} else if (type === 'clear') {
		display.textContent = '';
	} else {
		return;
	}

	// We are saying that "this" is now buttonInfo
	// let button = document.querySelector("button");
	// console.log(buttonInfo.value);

	// now making sure objects are sent to display screen

	// create variable for value

	// query select the display

	// changing the display text content to become
	// buttonInfo.value

	// we need to distinguich between numbers and operators
	// because we are using the numbers to do something

	// console.log(display);


//  button.addEventListener("click", callBack => {
//
// })
// the callback function will execute when the event
// is triggered

// for loop through all buttons

//
