var test = require('mocha').it,
  expect = require('chai').expect;

test('generating the Fibonacci sequence', function(){
  expect(fibonacci(0)).to.deep.equal([  ]);
  expect(fibonacci(1)).to.deep.equal([ 1 ]);
  expect(fibonacci(2)).to.deep.equal([ 1, 2 ]);
  expect(fibonacci(5)).to.deep.equal([1, 2, 3, 5 ]);
  expect(fibonacci(8)).to.deep.equal([1, 2, 3, 5, 8 ]);
  expect(fibonacci(13)).to.deep.equal([1, 2, 3, 5, 8, 13 ]);
  expect(fibonacci(21)).to.deep.equal([1, 2, 3, 5, 8, 13, 21 ]);
  // ...ad nauseum.
}); // END test(fibonacci)

function fibonacci(n) {
  var seq = [];
  var i = 1;
  var idx = 0;
  while (i <= n) {

    seq.push(i);

    if (idx == 0 ) {
      i += 1;
    }
    else {
      i += seq[idx - 1];
    }

    idx++;
  }

  return seq;
};



// Hey, where's `fibonacci`...? Uh oh...

test('just even numbers?', function(){
  expect(evens([ 0 ])).to.deep.equal([ 0 ]);
  expect(evens([ 1 ])).to.deep.equal([ ]);
  expect(evens([ 1, 1, 1 ])).to.deep.equal([ ]);
  expect(evens([ 2 ])).to.deep.equal([ 2 ]);
  expect(evens([ 1, 2 ])).to.deep.equal([ 2 ]);
  expect(evens([ 1, 2, 3, 4,])).to.deep.equal([ 2, 4]);
  expect(evens([ 1, 2, 3, 4, 5, 6])).to.deep.equal([ 2, 4, 6]);
  // More tests, perhaps?
}); // END test(evens)


function evens(inputList) {
  var seq = [];
  for (var i = 0; i < inputList.length; i ++){
    if (inputList[i] % 2 === 0)
      seq.push(inputList[i]);
  }

  return seq;
};

test('summing lists of Number', function(){
  expect(sum([ 0 ])).to.equal(0);
  expect(sum([ 1 ])).to.equal(1);
  expect(sum([ 1, 1 ])).to.equal(2);
  expect(sum([ 2, 2 ])).to.equal(4);
  expect(sum([ 3, 3 ])).to.equal(6);
  // ...et cetera, et cetera, et cetera.
}); // END test(sum)

function sum(inputList) {
  var total = 0;
  for(var i = 0; i < inputList.length; i ++) {
    total += inputList[i];
  }

  return total;
};

test('summing even Fibonacci numbers?', function(){
  expect( sum(evens(fibonacci(0))) ).to.equal(0); // nice.
  expect( sum(evens(fibonacci(2))) ).to.equal(2);
  expect( sum(evens(fibonacci(8))) ).to.equal(10);


});
  // END test(dat CHAIN tho)
