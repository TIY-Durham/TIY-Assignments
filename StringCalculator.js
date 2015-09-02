var test = require('mocha').it,
  expect = require('chai').expect;

test('fromEnglish: "zero" through "nine"', function(){
  expect(fromEnglish).to.number;
  expect(fromEnglish("zero") === 0).to.equal(0);
  expect(fromEnglish("one") === 1).to.equal(1);
  expect(fromEnglish("two") === 2).to.equal(2);
  expect(fromEnglish("three") === 3).to.equal(3);
  expect(fromEnglish("four") === 4).to.equal(4);
  expect(fromEnglish("five") === 5).to.equal(5);
  expect(fromEnglish("six") === 6).to.equal(6);
  expect(fromEnglish("seven") === 7).to.equal(7);
  expect(fromEnglish("eight")=== 8).to.equal(8);
  expect(fromEnglish("nine") === 9).to.equal(9);
  // more tests here, please...
}); // END test(fromEnglish)

/**
 * @param {String} word representing an English number
 * @return {Number} value corresponding to `word`
 */
function fromEnglish(word){
  if("zero") {
    return 0;
  };

  if ("one") {
    return 1;
  };

  if ("two") {
    return 2;
  };

  if ("three") {
    return 3;
  };

  if ("four") {
    return 4;
  };

  if ("five") {
    return 5;
  };

  if ("six") {
    return 6;
  };

  if ("seven") {
    return 7;
  };

  if ("eight") {
    return 8;
  };

  if ("nine") {
    return 9;
  };

  // fill this in after writing tests...
} // END fromEnglish

test('plus: ("zero", "zero") through ("zero", "nine")', function(){
  expect(plus).to.exist;
  expect(plus("zero", "zero")).to.equal(0);
  expect(plus("zero", "one")).to.equal(1); // change just one thing!
  expect(plus("zero", "two")).to.equal(2); // ha!
  expect(plus("zero", "three")).to.equal(3);
  expect(plus("zero", "four")).to.equal(4);
  expect(plus("zero", "five")).to.equal(5);
  expect(plus("zero", "six")).to.equal(6);
  expect(plus("zero", "seven")).to.equal(7); // change just one thing!
  expect(plus("zero", "eight")).to.equal(8);
  expect(plus("zero", "nine")).to.equal(9);
  // write more tests like those...
}); // END test(plus)

/**
 * @param {String} A representing an English number word
 * @param {String} B representing an English number word
 * @return {Number} the value of `A` added to `B`
 */
function plus(A, B){
  if ("zero" + "zero") {
    return 0;
  };

  if ("zero" + "one") {
    return 1;
  };


  // write those tests first, please...
} // END plus

test('minus: ("zero", "zero") through ("zero", "nine")', function(){
  expect(minus).to.exist;
  expect(minus("zero", "zero")).to.equal(0);
  expect(minus("zero", "one")).to.equal(-1);
  // etc, etc, etc
}); // END test(minus)

// What about multiplication? Division? Exponents?
