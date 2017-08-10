const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz-buzz', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const fizzBuzz = [
      {a: 15, expected: "fizz-buzz"},
      {a: 30, expected: "fizz-buzz"},
      {a: -15, expected: "fizz-buzz"}
    ];
    fizzBuzz.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should return buzz', function() {
    const buzz = [
      {a: 5, expected: "buzz"},
      {a: 10, expected: "buzz"},
      {a: -5, expected: "buzz"}
    ];
    buzz.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    })
  });

  it('should return fizz', function() {
    const fizz = [
      {a: 3, expected: "fizz"},
      {a: 6, expected: "fizz"},
      {a: -3, expected: "fizz"}
    ];
    fizz.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should return the input', function() {
    const inputReturn = [
      {a: 1, expected: 1},
      {a: 14, expected: 14},
      {a: -22, expected: -22}
    ];
    inputReturn.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = ['a','1'];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.throw(Error)});
    });
  });