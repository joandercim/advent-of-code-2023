const txtFull = require('./txt').split('\n');

const txtOneWord = `31gsjtkjdvjdqnrsgnpbnxsdrzmtskfdqhd`.split('\n');

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
const newOnlyNums = [];

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
  })
  
  onlyNumsArray.forEach(numbers => {
    const sum = findFirst(numbers.join(''));
    totalPartTwo += +sum;
    console.log(sum)
  })

  console.log('Result part 2:', totalPartTwo);
}



function replaceWords(row) {
  const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let firstMatch = '';
  let secondMatch = '';
  let firstRun = '';
  let secondRun = '';
  let thirdRun = '';
  let newString = '';

  // Kör row för att hitta en första match
  for (let i = 0; i < numbers.length; i++) {
    const currNum = numbers[i];
    if (row.includes(currNum)) {
      firstRun = row.replace(currNum, i + 1);
      firstMatch = currNum;
      break;
    }
  }

  // Andra varvet
  for (let i = 0; i < numbers.length; i++) {
    const currNum = numbers[i];
    if (row.includes(currNum) && currNum !== firstMatch) {
      secondRun = row.replace(currNum, i + 1);
      secondMatch = currNum;
      break;
    }
  }

  
  // Tredje varvet
  for (let i = 0; i < numbers.length; i++) {
    const currNum = numbers[i];
    if (row.includes(currNum) && currNum !== firstMatch && currNum !== secondMatch) {
      thirdRun = row.replace(currNum, i + 1);
    }
  }

  if (firstRun === '') {
    const plainNumsFound = [findFirst(row)];
    onlyNumsArray.push(plainNumsFound);
    
  } else {
    extractNumbers(firstRun, secondRun, thirdRun);
  }

  // onlyNumsArray.push(newString);
}

function extractNumbers(str1, str2, str3) {
  // Find longest
  const longestString = Math.max(str1.length, str2.length, str3.length);
  let foundNumbers = [];

  for (let i = 0; i < longestString; i++) {
    if (i < str1.length && !isNaN(str1[i])) {
      foundNumbers.push(str1[i])
    }

    if (i < str2.length && !isNaN(str2[i])) {
      foundNumbers.push(str2[i])
    }

    if (i < str3.length && !isNaN(str3[i])) {
      foundNumbers.push(str3[i])
    }
  }
  onlyNumsArray.push(foundNumbers);
}

function findFirst(array) {
  const characters = array.split('');
  let numbers = [];
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] >= '0' && characters[i] <= '9') {
      numbers.push(characters[i]);
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

firstPart(txtFull);
secondPart(txtMoreWords)
