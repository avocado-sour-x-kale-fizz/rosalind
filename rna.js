const readline = require('readline');
const regex = /t/gi;

const reader = readline.createInterface({
  input: process.stdin,
  terminal: false
});

reader.on('line', (input) => {
	const output = transcribeToRna(input);
	console.log(output)
});

function transcribeToRna (input) {
	const rna = input.replace(regex, "U");
	return rna;
}