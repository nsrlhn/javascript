//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
	var l = message.length;
	var lastChar;
	var i = l-1;
	do{
		lastChar = message[i];
		i--;
	}while (lastChar == ' ')

	var hasLetter = false;
	for (var i = 0 ; i < l ; i++) {
		var c = message.charCodeAt(i);
		if ( (c > 96 && c < 123) || (c > 64 && c < 91)){
			hasLetter = true;
			break;
		}
	}
	var hasNumber = false;
	for (var i = 0 ; i < l ; i++) {
		var c = message.charCodeAt(i);
		if (c > 47 && c < 58){
			hasNumber = true;
			break;
		}
	}
	if (hasLetter == false) {
		var isCapital = false;
	} else {
		var isCapital = true;
		for (var i = 0 ; i < l ; i++) {
			var c = message.charCodeAt(i);
			if (c > 96 && c < 123) {
				isCapital = false;
				break;
			}
		}
	}

	if (lastChar == '?') {
		if (isCapital) {
			return 'Calm down, I know what I\'m doing!';
		} else {
			return 'Sure.';
		}
	} else {
		if (!(hasLetter || hasNumber)) {
			return 'Fine. Be that way!';
		} else {
			if (isCapital) {
				return 'Whoa, chill out!';
			} else {
				return 'Whatever.';
			}
		}
	}

};
