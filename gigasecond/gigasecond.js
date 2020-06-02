//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
	var msec = Date.parse(date);
	msec += 1000000000000;
	return new Date(msec)
};
