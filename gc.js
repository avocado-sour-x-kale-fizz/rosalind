module.exports = { parseFasta, gcContent, maxGcContent };


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const allInput = [];

reader.on('line', (input) => {
  allInput.push(input);
});

reader.on('close', () => {
  const parseContent = parseFasta(allInput.join('\n'))
  const maxGc = maxGcContent(parseContent);
  const formatted = maxGc.join('\n');
  console.log(formatted);
});


function parseFasta(input) {
  const fastaStrings = input.split('>').slice(1).map((strings) => {
    return strings.replace('\n', ',').replace(/\n/g,'').split(',');
  });

  const dict = {};
  for(const arrayOfLabelAndValue of fastaStrings) {
    const label = arrayOfLabelAndValue[0];
    const value = arrayOfLabelAndValue[1];
    dict[label] = value;
  }

  return dict;
}

function gcContent(dnaString) {
  const gcMatches = dnaString.match(/[GC]/g);
  const gcLength = gcMatches ? gcMatches.length : 0;
  const totalStingLength = dnaString.length;
  return (gcLength/totalStingLength)*100;
}

function maxGcContent(dict) {
  const highestKey = Object.keys(dict).reduce((keyOfMax, currentKey) => gcContent(dict[keyOfMax]) > gcContent(dict[currentKey]) ? keyOfMax : currentKey);

  return [highestKey,gcContent(dict[highestKey]).toString()];
}




// function max(numbers) {
//   let maxNum = 0;
//   for(const num of numbers){
//     if(num > maxNum){
//       maxNum = num;
//     }
//   }
//   return maxNum;
// }
