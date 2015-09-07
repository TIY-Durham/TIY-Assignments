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
  var seqn = x = 0, y = 1, z = 1 // 0+1= 1 this is how to start the sequence
  for(var i = 0; i <= n; i++) { //start at 0 then run n times.
    var a = x += y;  // 0+1 var a = 1
    var b = a; // need x to be equal to result?
    var c = a 

    //need to collect what comes out in an array. Use .push()?
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

//TODO: To get even numbers run through a function where n % 2 === 0

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
