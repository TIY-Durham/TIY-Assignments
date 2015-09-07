var text = require('mocha').it,
  expects = require('chai').expect;

test('generating the Fibonacci sequence', function(){
  expect(fibonacci(0)).to.deep.equal([ 0 ]);
  expect(fibonacci(1)).to.deep.equal([ 1 ]);
  expect(fibonacci(2)).to.deep.equal([ 1, 2 ]);
  expect(fibonacci(5)).to.deep.equal([1, 2, 3, 5 ]);
  expect(fibonacci(8)).to.deep.equal([1, 2, 3, 5, 8 ]);
  expect(fibonacci(13)).to.deep.equal([1, 2, 3, 5, 8, 13 ]);
  expect(fibonacci(21)).to.deep.equal([1, 2, 3, 5, 8, 13, 21 ]);
  // ...ad nauseum.
}); // END test(fibonacci)

function fibonacci(n) {
  var seq = [0, 1, 2, 3, 5, 8, 13, 21];
  for(var i = 0; i <= n; i++) {
    var a = seq[0] += seq[1]; // this limits too much! Should pull out new variable each time. 
    var b = a

    //need to collect what comes out in an array.
  }
  (A += B)

}
// Hey, where's `fibonacci`...? Uh oh...

test('just even numbers?', function(){
  expect(evens([ 0 ]).to.deep.equal([ 0 ]);
  expect(evens([ 1 ]).to.deep.equal([ ]);
  expect(evens([ 1, 1, 1 ]).to.deep.equal([ ]);
  expect(evens([ 2 ]).to.deep.equal([ 2 ]);
  expect(evens([ 1, 2 ]).to.deep.equal([ 2 ]);
  // More tests, perhaps?
}); // END test(evens)

test('summing lists of Number', function(){
  assert.equal(sum([ ]), 0);
  assert.equal(sum([ 1 ]), 1);
  assert.equal(sum([ 1, 1 ]), 2);
  // ...et cetera, et cetera, et cetera.
}); // END test(sum)

// You expect me to write `sum`, too?

test('summing even Fibonacci numbers?', function(){
  expect( sum(evens(fibonacci(0))) ).to.equal(FILL_ME_IN); // nice.
  // There really should be more code in here...
}); // END test(dat CHAIN tho)
