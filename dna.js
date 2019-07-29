// Reads DNA data from standard input e.g: cat rosalind_dna.txt | node dna.js

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  terminal: false
});

reader.on('line', (input) => {
	let countA = input.replace(/[^A]/g, "").length;
	let countC = input.replace(/[^C]/g, "").length;
	let countG = input.replace(/[^G]/g, "").length;
	let countT = input.replace(/[^T]/g, "").length;
	console.log( countA, countC, countG, countT)
});

// Expected output format: 20 12 17 21