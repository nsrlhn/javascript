//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (input) => {
	const error1 = "Unknown operation";
	const error2 = "Syntax error";/*
	if (input.charAt(input.length-1) != "?") {
		throw new Error(error2);
	}
	*/var input_splitted = input.substr(0,input.length-1).split(" ");/*
	if (input_splitted[0] != "What" || input_splitted[1] != "is" || isNaN(input_splitted[2])) {
		throw new Error(error2);
	}*/
	input_splitted.shift();
	input_splitted.shift();

	var result = Number(input_splitted[0]);
	if (isNaN(result)){
		throw error2;
	}
	input_splitted.shift();
	while(input_splitted.length != 0){
		switch(input_splitted[0]){
			case 'plus':
				if (!isNaN(input_splitted[1])) {
					result += Number(input_splitted[1]);
					input_splitted.shift();input_splitted.shift();
					break;
				}throw error2;
			case 'minus':
				if (!isNaN(input_splitted[1])) {
					result -= Number(input_splitted[1]);
					input_splitted.shift();input_splitted.shift();
					break;
				}throw error2;
			case 'multiplied':
				if (!isNaN(input_splitted[2])) {
					result *= Number(input_splitted[2]);
					input_splitted.shift();input_splitted.shift();input_splitted.shift();
					break;
				}throw error2;
			case 'divided':
				if (!isNaN(input_splitted[2])) {
					result /= Number(input_splitted[2]);
					input_splitted.shift();input_splitted.shift();input_splitted.shift();
					break;
				}throw error2;
			default:
				throw new Error(error1);
		}
	}
	return result;
};