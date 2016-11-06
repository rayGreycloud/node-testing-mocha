const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`);
  }
});

it('should square a number', () => {
  var res = utils.square(15);
  var actual = 15 * 15;
  if (res !== actual) {
    throw new Error(`Expected ${actual}, but got ${res}.`);
  }
});
