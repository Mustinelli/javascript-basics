function sayHello(string) {
  string = 'Hello, world!';
  return string;
}

function uppercase(string) {
  return string.toUppercase();
}

function lowercase(string) {
  return string.toLowercase();
}

function countCharacters(string) {
  return string.length();
}

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
}