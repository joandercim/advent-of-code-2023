const txtFull = require('./txt').split('\n');

const txtOneWord = `31gsjtkjdvjdqnrsgnpbnxsdrzmtskfdqhd`.split('\n');
const txtOneWord2 = `eightwothree
two1nine`.split('\n');

const txtMoreWords = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
31gsjtkjdvjdqnrsgnpbnxsdrzmtskfdqhd`.split('\n');

let total = 0;
let totalPartTwo = 0;
const onlyNumsArray = [];

function firstPart(txt) {
  txt.forEach((row) => {
    const sum = findFirst(row);
    total += +sum;
  });
  console.log('Result part 1:', total);
}

function secondPart(txt) {
  txt.forEach(row => {
    replaceWords(row);
  });
  
  onlyNumsArray.forEach(num => {
    const sum = findFirst(num);
    console.log(sum)
    totalPartTwo += +sum;
  })
  console.log('Result part 2:', totalPartTwo);
}

function replaceWords(row) {
  const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  const numbersObj = {
    'one': 'o1e',
    'two': 't2o',
    'three': 't3e',
    'four': 'f4r',
    'five': 'f5e',
    'six': 's6x',
    'seven': 's7n',
    'eight': 'e8t',
    'nine': 'n9e',
  }
  
  let newString = '';
  let finalString = row;

  Object.keys(numbersObj).forEach(num => {
    const regex = new RegExp(num, 'g');
    finalString = finalString.replace(regex, numbersObj[num]);
  });

  for (const char of newString) {
    if (!isNaN(char)) {
      finalString += char;
    }
  }

  if (finalString === '') {
    const plainNumsFound = findFirst(row);
    onlyNumsArray.push(plainNumsFound);
  } else {
    onlyNumsArray.push(finalString);
  }
}

function findFirst(array) {
  let numbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= '0' && array[i] <= '9') {
      numbers.push(array[i]);
    }
  }

  let first = numbers[0];
  let last;
  if (numbers.length <= 1) {
    last = first;
    numbers.push(last);
  } else {
    last = numbers[numbers.length - 1];
  }
  return first + last;
}

secondPart(txtFull);