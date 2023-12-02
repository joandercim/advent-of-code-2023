const txtFull = require('./txt').split('\n')

const txt = `two1nine`.split('\n');

let total = 0;
const onlyNums = [];

const newOnlyNums = [];

function init(txt) {

    txt.forEach((row) => {
        // const sum = findFirst(row);
        replaceWords(row);
        // console.log(row)
      
        // total += +sum;
      });
}

function replaceWords(row) {

    const numbers = ['one', 'two', 'three']

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (row.includes(numbers[i])) {
            console.log(i)
        }
        
    }
    let newString;
        if (row.includes('one')) {
            newString = row.replace('one', '1');
        }
        
        // if (newString.includes('two')) {
        //     newString = newString.replace('two', '2')
        // }


    // if (newString.includes('three')) {
    //     newString = newString.replace('three', '3')
    // }

    // if (newString.includes('four')) {
    //     newString = newString.replace('four', '4')
    // }

    // if (newString.includes('five')) {
    //     newString = newString.replace('five', '5')
    // }

    // if (newString.includes('six')) {
    //     newString = newString.replace('six', '6')
    // }

    // if (newString.includes('seven')) {
    //     newString = newString.replace('seven', '7')
    // }

    // if (newString.includes('eight')) {
    //     newString = newString.replace('eight', '8')
    // }

    // if (newString.includes('nine')) {
    //     newString = newString.replace('nine', '9')
    // }

    
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


init(txt)


