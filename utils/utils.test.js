const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    var correct = 33 + 11;
    utils.asyncAdd(33, 11, (sum) => {
      expect(sum).toBe(correct).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(15);
    var correct = 15 * 15;

    expect(res).toBe(correct).toBeA('number');
  });

  it('should async square a number', (done) => {
    var correct = 15 * 15;
    utils.asyncSquare(15, (square) => {
      expect(square).toBe(correct).toBeA('number');
      done();
    });
  });

});


it('should set firstName and lastName', () => {
  var user = {
    age: 25,
    location: 'Philadelphia'
  };
  var res = utils.setName(user, 'Andy Mead');

  expect(user).toEqual(res);

  expect(res).toInclude({
    firstName: 'Andy',
    lastName: 'Mead'
  });
});

// it('should expect some values', () => {
//   expect(12).toNotBe(13); // passing
//   expect({name: 'Andy'}).toBe({name: 'Andy'}) // error - toBe doesn't check values
//   expect({name: 'Andy'}).toEqual({name: 'Andy'}) // passing
//   expect([2,3,4]).toInclude(5); // error
//   expect([2,3,4]).toExclude(5); // passing
//   expect({
//     name: 'Andy',
//     age: 25,
//     location: 'Philadelphia'
//   }).toExclude({
//     age: 23
//   })
// });
