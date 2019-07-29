const gc = require('../gc.js');

test('parse input', () => {
  const input = `>Rosalind_6404
CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCC
TCCCACTAATAATTCTGAGG
>Rosalind_5959
CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCT
ATATCCATTTGTCAGCAGACACGC
>Rosalind_0808
CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGAC
TGGGAACCTGCGGGCAGTAGGTGGAAT`
  const output = {
    'Rosalind_6404': 'CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCCTCCCACTAATAATTCTGAGG',
    'Rosalind_5959': 'CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCTATATCCATTTGTCAGCAGACACGC',
    'Rosalind_0808': 'CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGACTGGGAACCTGCGGGCAGTAGGTGGAAT',
  };
  expect(gc.parseFasta(input)).toEqual(output);
});

test('gcContent yields 100 for a string of all G', () => {
  expect(gc.gcContent("GG")).toEqual(100);
});
test('gcContent yields 0 for a string of all A', () => {
  expect(gc.gcContent("AA")).toEqual(0);
});
test('gcContent yields 50 for a string of half AT and half GC', () => {
  expect(gc.gcContent("ATGC")).toEqual(50);
});

test('yields gcContent of value for library of single dna string', () => {
  const library = {
    'Rosalind_0001': 'ACGT',
  };
  const expectedMax = ["Rosalind_0001", "50"];
  expect(gc.maxGcContent(library)).toEqual(expectedMax);
});
test('yields gcContent of string with highest gcContent for library of multiple dna strings', () => {
  const library = {
    'Rosalind_0001': 'ACGT',
    'Rosalind_0002': 'CCCC',
  };
  const expectedMax = ["Rosalind_0002", "100"];
  expect(gc.maxGcContent(library)).toEqual(expectedMax);
});
