const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(f => f.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(f =>
    f
      .split('')
      .reverse()
      .join('')
  );
};

const onlyEven = numbers => {
  return numbers.filter(f => f % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const newArray = array.slice();
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const vowelCheck = /^[aeiouAEIOU]/i;
  const newArray = strings.filter(Strings => vowelCheck.test(Strings));
  return newArray;
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  let total = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total;
};

const sortByLastLetter = strings => {
  strings.sort((a, b) => {
    if (a.slice(-1) < b.slice(-1)) {
      return 1;
    }
    return 0;
  });
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
