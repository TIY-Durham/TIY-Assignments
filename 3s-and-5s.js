var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc



test(/*'getting a list of multiples of 3', */function () {
  expect(ten()).to.be(0, 3, 6, 9);
  expect(twenty()).to.be(0, 3, 6, 9, 12, 15, 18);
  expect(thirty()).to.be(0, 3, 6, 9, 12, 15, 18, 21, 24, 27);
});


function ten(){
  var count = 0;
  var values = '';
  for(var i = 0; i < 10; i ++) {
    if (i % 3 === 0) {
      values += (i); 
    }
  }
  return values;
};

function twenty(){
  var count = 0;
  for(var i = 0; i < 20; i ++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};

function thirty(){
  var count = 0;
  for(var i = 0; i < 30; i ++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};

// END test 3s
