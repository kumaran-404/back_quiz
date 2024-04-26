

import data from "./questions.json"

const numberOfEasy = data.filter(item=> item.tag=="easy").length;

const numberOfMedium = data.filter(item=> item.tag=="medium").length ;

const numberOfHard = data.filter(item=> item.tag=="hard").length ;

const pickEasy = 8;

const pickMedium = 12;

const pickHard = 10;

const easy = [...Array(numberOfEasy + 1).keys()].slice(1);

const medium = [...Array(numberOfEasy + numberOfMedium + 1).keys()].slice(
  numberOfEasy + 1
);

const hard = [
  ...Array(numberOfEasy + numberOfMedium + numberOfHard + 1).keys(),
].slice(numberOfEasy + 1 + numberOfMedium);

console.log(numberOfEasy,numberOfMedium,numberOfHard)

console.log(easy,medium,hard)



function getShuffledArr(arr) {
  return [...arr].map((_, i, arrCopy) => {
    var rand = i + Math.floor(Math.random() * (arrCopy.length - i));
    [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]];
    return arrCopy[i];
  });
}

function pickRandomElements(array, numElements) {
  const result = [];
  const arrayCopy = array.slice();

  for (let i = 0; i < numElements; i++) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    result.push(arrayCopy.splice(randomIndex, 1)[0]);
  }

  return result;
}

function helper() {
  const questions = pickRandomElements(easy, pickEasy).concat(
    pickRandomElements(medium, pickMedium),
    pickRandomElements(hard, pickHard)
  );

  console.log(questions)

  return getShuffledArr(questions);
}

console.log(helper)

