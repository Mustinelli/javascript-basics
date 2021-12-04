const sayHello = (string) => `Hello, ${string}!`;

const uppercase = string => string.toUpperCase();

const lowercase = string => string.toLowerCase();

const countCharacters = string => string.length;

function firstCharacter(string) {
  return string[0];
}

function firstCharacters(string, n) {
  return string.slice(0, n);
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
