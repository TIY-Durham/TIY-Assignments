var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc



test('getting a list of multiples of 3', function () {
  expect(ten(10)).to.be(0, 3, 6, 9);
  expect(twenty(20)).to.be();
  expect(thirty(30)).to.be();
});


function ten(){
  var count = 0;
  for(var i = 0; i < 10; i ++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};
// END test 3s
