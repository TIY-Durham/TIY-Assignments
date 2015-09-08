var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

    function multiples(num, max){
      var values = [];
      for(var i = num; i < max; i = i + num) {
          values.push(i);
      }
      return values;
    };

    function ten(){
      return multiples(3, 10);
    };

    function twenty(){
      return multiples(3, 20);
    };

    function fifty(){
      return multiples(3, 50);
    };

test('getting a list of multiples of 3', function () {
  expect(ten()).to.deep.equal([3, 6, 9]);
  expect(twenty()).to.deep.equal([3, 6, 9, 12, 15, 18]);
  expect(fifty()).to.deep.equal([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]);
});

// END test 3s

test('getting a list of multiples of 5', function () {
  expect(ten5()).to.deep.equal([5]);
  expect(twenty5()).to.deep.equal([5, 10, 15]);
  expect(fifty5()).to.deep.equal([5, 10, 15, 20, 25, 30, 35, 40, 45]);
});

function ten5(){
  return multiples(5, 10);
};

function twenty5(){
  return multiples(5, 20);
};

function fifty5(){
  return multiples(5, 50);
};
