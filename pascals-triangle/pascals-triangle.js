//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (num) => {
	var result = [];
	for (var i = 0 ; i < num; i++) {
		result.push(new Array(i+1).fill(1));
	}
	if (num < 3) {
		return result;
	} else {
		for (var i = 2; i < num; i++) {
			for (var j = 1; j < i; j++) {
				result[i][j] = result[i-1][j-1]+result[i-1][j];
			}
		}
		return result;
	}
};
