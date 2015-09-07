var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc



test(/*'getting a list of multiples of 3', */function () {
  expect(ten()).to.be("0","3", "6", "9");
  expect(twenty()).to.be("0","3", "6", "9", "12", "15", "18");
  expect(fifty()).to.be("0", "3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36", "39", "42", "45", "48");
});


function ten(){
  var count = 0;
  var values = "";
  for(var i = 0; i < 10; i ++) {
    if (i % 3 === 0) {
      values += (i);
    }
  }
  return values.split("");
};

function twenty(){
  var count = 0;
  var values = "";
  for(var i = 0; i < 20; i ++) {
    if (i % 3 === 0) {
      values += (i);
    }
  }
  return values.split(" "); // splits 12 into '1', '2'
};

function fifty(){
  var count = 0;
  var values = "";
  for(var i = 0; i < 50; i ++) {
    if (i % 3 === 0) {
      values += (i);
    }
  }
  return values.split(""); //TODO figure out how NOT to split double digits.
};

// END test 3s
test('getting a list of multiples of 5', function () {
  expect(ten()).to.be("0","5");
  expect(twenty()).to.be("0","5", "10", "15");
  expect(fifty()).to.be("0", "5", "10", "15", "20", "25", "30", "35", "40", "45");
});

function ten(){
  var count = 0;
  var values = "";
  for(var i = 0; i < 10; i ++) {
    if (i % 5 === 0) {
      values += (i);
    }
  }
  return values.split("");
};

function twenty(){ //TODO make this iterate from 10 and set the split to 2 digits. Repeat for 50.
  var count = 0;
  var values = "";
  for(var i = 0; i < 20; i ++) {
    if (i % 5 === 0) {
      values += (i);
    }
  }
  return values.split(" "); 
};

function fifty(){
  var count = 0;
  var values = "";
  for(var i = 0; i < 50; i ++) {
    if (i % 5 === 0) {
      values += (i);
    }
  }
  return values.split("");
};
