

const input = "AAAACCCGGT"

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  terminal: false
});

reader.on('line', (input) => {
  const output = reverseComplement(input);
  console.log(output)
});

function reverseComplement (input) {
  const convertToArray = input.split('');
  const reverseArray = convertToArray.reverse();
  const complement = reverseArray.map(complementDna);
  return complement.join('');
}

function complementDna (nucleotide) {
  switch (nucleotide) {
    case "A": return "T";
    case "T": return "A";
    case "G": return "C";
    case "C": return "G";
    default:
      return "💩"
  }
}