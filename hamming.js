/*
# Hamming

Write a program that can calculate the Hamming difference between two DNA strands.

A mutation is simply a mistake that occurs during the creation or
copying of a nucleic acid, in particular DNA. Because nucleic acids are
vital to cellular functions, mutations tend to cause a ripple effect
throughout the cell. Although mutations are technically mistakes, a very
rare mutation may equip the cell with a beneficial attribute. In fact,
the macro effects of evolution are attributable by the accumulated
result of beneficial microscopic mutations over many generations.

The simplest and most common type of nucleic acid mutation is a point
mutation, which replaces one base with another at a single nucleotide.

By counting the number of differences between two homologous DNA strands
taken from different genomes with a common ancestor, we get a measure of
the minimum number of point mutations that could have occurred on the
evolutionary path between the two strands.

This is called the 'Hamming distance'.

It is found by comparing two DNA strands and counting how many of the
nucleotides are different from their equivalent in the other string.

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

The Hamming distance between these two DNA strands is 7.

### Submitting the answer
 1. Solve the problem in the lines below
 2. When solved correctly create and push hamming.js in your github daily-challenges repo.

*/


function whichSmaller(dna1, dna2) {
  if (dna1.length !== dna2.length) {
    throw new Error('DNA strands must be of equal length.');
  }
  if (dna1.length > dna2.length) {
    return dna2;
  }
  return dna1;
}


function tester(smaller, getdna1, getdna2) {
  let count = 0;
  for (let i = 0; i < getdna1.length; i++) {
    if (getdna1[i] !== getdna2[i]) {
      count += 1;
    }
  }
  return count;
}

function compute(DNA1, DNA2) {
  const getdna1 = DNA1.split('');
  const getdna2 = DNA2.split('');
  const smaller = whichSmaller(getdna1, getdna2);
  const result = tester(smaller, getdna1, getdna2);
  return result;
}


/// -- do not edit below ---

describe('compute', function () {

  it('no difference between identical strands', function () {
    expect(compute('A', 'A')).toEqual(0);
  });

  it('complete hamming distance for single nucleotide strand', function () {
    expect(compute('A','G')).toEqual(1);
  });

  it('complete hamming distance for small strand', function () {
    expect(compute('AG','CT')).toEqual(2);
  });

  it('small hamming distance', function () {
    expect(compute('AT','CT')).toEqual(1);
  });

  it('small hamming distance in longer strand', function () {
    expect(compute('GGACG', 'GGTCG')).toEqual(1);
  });

  it('large hamming distance', function () {
    expect(compute('GATACA', 'GCATAA')).toEqual(4);
  });

  it('hamming distance in very long strand', function () {
    expect(compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
  });

  it('throws error when strands are not equal length', function() {
    expect(function() { compute('GGACGGATTCTG', 'AGGAC'); }).toThrow(
      new Error('DNA strands must be of equal length.')
    );
  });

});
