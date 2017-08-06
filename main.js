let input = "";
let inputsReadyToCalc = [];
let display = document.getElementById("display-text");

function calc(obj) {

	if (obj.className === "num") {
		input += obj.value;
		display.innerHTML = input;

	} else if (obj.className === "cancel") {
		input = "";
		inputsReadyToCalc = [];
		display.innerHTML = input;

	} else if (obj.className === "operator"
	&& input.length != 0) {
		display.innerHTML = obj.value;
		inputsReadyToCalc.push(parseInt(input), obj.value);
		input = "";

	} else if (obj.className === "evaluate"
	&& input.length != 0) {
		inputsReadyToCalc.push(parseInt(input), obj.value);
		total = evaluate(inputsReadyToCalc);
		display.innerHTML = total;
		input = "";
		inputsReadyToCalc = [];
		input += total;
		}

	return input;
};

function evaluate(inputsReadyToCalc) {
	for (let i = 0; i < inputsReadyToCalc.length; i += 3) {
		let term1 = inputsReadyToCalc[i];
		let op = inputsReadyToCalc[i + 1];
		let term2 = inputsReadyToCalc[i + 2];
		let total = 0;

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
		return total;
	}
};
