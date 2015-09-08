var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

    function threes(max){
      var th = [];
      for(var i = 3; i < max; i = i + 3) {
          th.push(i);
      }
      return th;
    };

    function ten(){
      return threes(10);
    };

    function twenty(){
      return threes(20);
    };

    function fifty(){
      return threes(50);
    };

test('getting a list of multiples of 3', function () {
  expect(ten()).to.deep.equal([3, 6, 9]);
  expect(twenty()).to.deep.equal([3, 6, 9, 12, 15, 18]);
  expect(fifty()).to.deep.equal([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]);
});

// END test 3s



function fives(max){
  var fv = [];
  for(var i = 5; i < max; i = i + 5) {
      fv.push(i);
  }
  return fv;
};

function ten5(){
  return fives(10);
};

function twenty5(){
  return fives(20);
};

function fifty5(){
  return fives(50);
};

test('getting a list of multiples of 5', function () {
  expect(ten5()).to.deep.equal([5]);
  expect(twenty5()).to.deep.equal([5, 10, 15]);
  expect(fifty5()).to.deep.equal([5, 10, 15, 20, 25, 30, 35, 40, 45]);
});

function arrayAdd(fives(50), threes(50)) {
  for (var i = 0; i< fv.length; i++){
    sum.push(fv[] += th[]);
  }
}
