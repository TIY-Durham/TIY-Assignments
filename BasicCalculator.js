console.assert(add(0, 0),===0);
console.assert(add(0, 1),===1);
console.assert(add(0, 2),===2);
console.assert(add(0, 3),===3);
console.assert(add(0, 4),===4);
console.assert(add(0, 5),===5);
console.assert(add(0, 6),===6);
console.assert(add(0, 7),===7);
console.assert(add(0, 8),===8);
console.assert(add(0, 9),===9);
console.assert(add(1, 1),===2);
console.assert(add(1, 2),===3);
console.assert(add(1, 3),===4);
console.assert(add(1, 4),===5);
console.assert(add(1, 5),===6);
console.assert(add(1, 6),===7);
console.assert(add(1, 7),===8);
console.assert(add(1, 8),===9);
console.assert(add(1, 9),===10);
console.assert(add(2, 2),===4);
console.assert(add(2, 3),===5);
console.assert(add(2, 4),===6);
console.assert(add(2, 5),===7);
console.assert(add(2, 6),===8);
console.assert(add(2, 7),===9);
console.assert(add(2, 8),===9);
console.assert(add(2, 9),===11);
console.assert(add(3, 3),===6);
console.assert(add(3, 4),===7);
console.assert(add(3, 5),===8);
console.assert(add(3, 6),===9);
console.assert(add(3, 7),===10);
console.assert(add(3, 8),===11);
console.assert(add(3, 9),===12);
console.assert(add(4, 4),===8);
console.assert(add(4, 5),===9);
console.assert(add(4, 6),===10);
console.assert(add(4, 7),===11);
console.assert(add(4, 8),===12);
console.assert(add(4, 9),===13);
console.assert(add(5, 5),===10);
console.assert(add(5, 6),===11);
console.assert(add(5, 7),===12);
console.assert(add(5, 8),===13);
console.assert(add(5, 9),===14);
console.assert(add(6, 6),===12);
console.assert(add(6, 7),===13);
console.assert(add(6, 8),===14);
console.assert(add(6, 9),===15);
console.assert(add(7, 7),===14);
console.assert(add(7, 8),===15);
console.assert(add(7, 9),===16);
console.assert(add(8, 8),===16);
console.assert(add(8, 9),===17);
console.assert(add(9, 9),===18);

/**
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */
function add(A, B){
  return (A + B)
} // END add

console.assert(minus(0, 0),===0);
console.assert(minus(0, 1),===-1);
console.assert(minus(0, 2),===-2);
console.assert(minus(0, 3),===-3);
console.assert(minus(0, 4),===-4);
console.assert(minus(0, 5),===-5);
console.assert(minus(0, 6),===-6);
console.assert(minus(0, 7),===-7);
console.assert(minus(0, 8),===-8);
console.assert(minus(0, 9),===-9);
console.assert(minus(1, 1),===0);
console.assert(minus(1, 2),===-1);
console.assert(minus(1, 3),===-2);
console.assert(minus(1, 4),===-3);
console.assert(minus(1, 5),===-4);
console.assert(minus(1, 6),===-5);
console.assert(minus(1, 7),===-6);
console.assert(minus(1, 8),===-7);
console.assert(minus(1, 9),===-8);
console.assert(minus(2, 2),===0);
console.assert(minus(2, 3),===-1);
console.assert(minus(2, 4),===-2);
console.assert(minus(2, 5),===-3);
console.assert(minus(2, 6),===-4);
console.assert(minus(2, 7),===-5);
console.assert(minus(2, 8),===-6);
console.assert(minus(2, 9),===-7);
console.assert(minus(3, 3),===0);
console.assert(minus(3, 4),===-1);
console.assert(minus(3, 5),===-2);
console.assert(minus(3, 6),===-3);
console.assert(minus(3, 7),===-4);
console.assert(minus(3, 8),===-5);
console.assert(minus(3, 9),===-6);
console.assert(minus(4, 4),===0);
console.assert(minus(4, 5),===-1);
console.assert(minus(4, 6),===-2);
console.assert(minus(4, 7),===-3);
console.assert(minus(4, 8),===-4);
console.assert(minus(4, 9),===-5);
console.assert(minus(5, 5),===0);
console.assert(minus(5, 6),===-1);
console.assert(minus(5, 7),===-2);
console.assert(minus(5, 8),===-3);
console.assert(minus(5, 9),===-4);
console.assert(minus(6, 6),===0);
console.assert(minus(6, 7),===-1);
console.assert(minus(6, 8),===-2);
console.assert(minus(6, 9),===-3);
console.assert(minus(7, 7),===0);
console.assert(minus(7, 8),===-1);
console.assert(minus(7, 9),===-2);
console.assert(minus(8, 8),===0);
console.assert(minus(8, 9),===-1);
console.assert(minus(9, 9),===0);



/**
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */
function minus(A, B){
  return A - B
} // END add



