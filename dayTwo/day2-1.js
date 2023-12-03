const txtFull = require('./txt').split('\n');
let sortedGames = [];
let pointsGiven;
let total = 0;
let totalPartTwo = 0;

function sortGames(txt) {
  txt.forEach((row) => {
    const splittedGames = row.split(':');
    const gameID = splittedGames[0].slice(5);
    const gameData = splittedGames[1].split(';');
    const newGameData = gameData.map((game) => game.split(','));
    let newGameDataNew = [];

    for (let i = 0; i < newGameData.length; i++) {
      const currGames = newGameData[i];

      const gmf = currGames.map((game) => {
        const numbers = game
          .split('')
          .filter((character) => !isNaN(character))
          .filter((pos) => pos !== ' ')
          .join('');

        const color = game
          .split('')
          .filter((character) => isNaN(character))
          .join('');

        return { [color]: numbers };
      });

      newGameDataNew.push(gmf);
    }

    const fullGame = {
      gameID,
      newGameDataNew,
    };

    chkIfPossible(fullGame);
    findSmallestAmount(fullGame);
  });

  console.log('Total part 1:', total);
  console.log('Total part 2:', totalPartTwo)
}

function chkIfPossible(game) {
  let possibleGame = true;
  const gameId = game.gameID;
  const sets = game.newGameDataNew;

  const maxBlue = 14;
  const maxGreen = 13;
  const maxRed = 12;

  for (const set of sets) {
    let greenPass = false;
    let bluePass = false;
    let redPass = false;

    for (const color of set) {
      if (!possibleGame) break;

      const blue = color.blue;
      const red = color.red;
      const green = color.green;

      if (green) {
        if (green <= maxGreen) {
          greenPass = true;
        } else {
          possibleGame = false;
        }
      }

      if (red) {
        if (red <= maxRed) {
          redPass = true;
        } else {
          possibleGame = false;
        }
      }

      if (blue) {
        if (blue <= maxBlue) {
          bluePass = true;
        } else {
          possibleGame = false;
        }
      }
    }
  }
  if (possibleGame) {
    total += +gameId;
  }
}

// FIND SMALLEST AMOUNT OF CUBES NEEDED
function findSmallestAmount(game) {
  const gameId = game.gameID;
  const sets = game.newGameDataNew;
  let greenArray = [];
  let redArray = [];
  let blueArray = [];
  
  for (const set of sets) {
    for (const color of set) {
      const red = color.red;
      const blue = color.blue;
      const green = color.green;

      if (green) {
        greenArray.push(green);
      }

      if (red) {
        redArray.push(red);
      }

      if (blue) {
        blueArray.push(blue);
      }
    }
  }

  const maxGreen = Math.max(...greenArray);
  const maxRed = Math.max(...redArray);
  const maxBlue = Math.max(...blueArray);
  const power = maxGreen * maxBlue * maxRed;
  totalPartTwo += power;
}

sortGames(txtFull);
