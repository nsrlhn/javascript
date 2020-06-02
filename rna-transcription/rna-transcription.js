//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (nucleotides = []) => {

  function getRNAfromDNA(nucleotide) {
    switch (nucleotide) {
      case 'A':
        return 'U';
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      case 'T':
        return 'A';
    }
  }

  nucleotides = nucleotides.split("");
  var result = [];
  nucleotides.forEach((item, i) => {
    result.push(getRNAfromDNA(item));
  });
  return result.join("");
};
