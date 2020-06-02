//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  str = str.split("");
  for (var i = 65; i < 91; i++) {
    if (str.includes(String.fromCharCode(i))) {
      continue;
    }else if (str.includes(String.fromCharCode(i+32))) {
      continue;
    }else {
      return false;
    }
  }
  return true;
};
