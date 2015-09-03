function add(A, B){
  return A + B;
};

console.assert(add(0, 0) === 0);
console.assert(add(0, 1) === 1);
console.assert(add(0, 2) === 2);
console.assert(add(0, 3) === 3);
console.assert(add(0, 4) === 4);
console.assert(add(0, 5) === 5);
console.assert(add(0, 6) === 6);
console.assert(add(0, 7) === 7);
console.assert(add(0, 8) === 8);
console.assert(add(0, 9) === 9);

console.assert(add(1, 1) === 2);
console.assert(add(1, 2) === 3);
console.assert(add(1, 3) === 4);
console.assert(add(1, 4) === 5);
console.assert(add(1, 5) === 6);
console.assert(add(1, 6) === 7);
console.assert(add(1, 7) === 8);
console.assert(add(1, 8) === 9);
console.assert(add(1, 9) === 10);

console.assert(add(2, 1) === 3);
console.assert(add(2, 2) === 4);
console.assert(add(2, 3) === 5);
console.assert(add(2, 4) === 6);
console.assert(add(2, 5) === 7);
console.assert(add(2, 6) === 8);
console.assert(add(2, 7) === 9);
console.assert(add(2, 8) === 10);
console.assert(add(2, 9) === 11);

console.assert(add(3, 1) === 4);
console.assert(add(3, 2) === 5);
console.assert(add(3, 3) === 6);
console.assert(add(3, 4) === 7);
console.assert(add(3, 5) === 8);
console.assert(add(3, 6) === 9);
console.assert(add(3, 7) === 10);
console.assert(add(3, 8) === 11);
console.assert(add(3, 9) === 12);

console.assert(add(4, 1) === 5);
console.assert(add(4, 2) === 6);
console.assert(add(4, 3) === 7);
console.assert(add(4, 4) === 8);
console.assert(add(4, 5) === 9);
console.assert(add(4, 6) === 10);
console.assert(add(4, 7) === 11);
console.assert(add(4, 8) === 12);
console.assert(add(4, 9) === 13);

console.assert(add(5, 1) === 6);
console.assert(add(5, 2) === 7);
console.assert(add(5, 3) === 8);
console.assert(add(5, 4) === 9);
console.assert(add(5, 5) === 10);
console.assert(add(5, 6) === 11);
console.assert(add(5, 7) === 12);
console.assert(add(5, 8) === 13);
console.assert(add(5, 9) === 14);

console.assert(add(6, 1) === 7);
console.assert(add(6, 2) === 8);
console.assert(add(6, 3) === 9);
console.assert(add(6, 4) === 10);
console.assert(add(6, 5) === 11);
console.assert(add(6, 6) === 12);
console.assert(add(6, 7) === 13);
console.assert(add(6, 8) === 14);
console.assert(add(6, 9) === 15);

console.assert(add(7, 1) === 8);
console.assert(add(7, 2) === 9);
console.assert(add(7, 3) === 10);
console.assert(add(7, 4) === 11);
console.assert(add(7, 5) === 12);
console.assert(add(7, 6) === 13);
console.assert(add(7, 7) === 14);
console.assert(add(7, 8) === 15);
console.assert(add(7, 9) === 16);

console.assert(add(8, 1) === 9);
console.assert(add(8, 2) === 10);
console.assert(add(8, 3) === 11);
console.assert(add(8, 4) === 12);
console.assert(add(8, 5) === 13);
console.assert(add(8, 6) === 14);
console.assert(add(8, 7) === 15);
console.assert(add(8, 8) === 16);
console.assert(add(8, 9) === 17);

console.assert(add(9, 1) === 10);
console.assert(add(9, 2) === 11);
console.assert(add(9, 3) === 12);
console.assert(add(9, 4) === 13);
console.assert(add(9, 5) === 14);
console.assert(add(9, 6) === 15);
console.assert(add(9, 7) === 16);
console.assert(add(9, 8) === 17);
console.assert(add(9, 9) === 18);
/**
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */
// END add
function sub(A, B){
  return A - B;
};

console.assert(sub(0, 2) === -2);
console.assert(sub(0, 3) === -3);
console.assert(sub(0, 4) === -4);
console.assert(sub(0, 5) === -5);
console.assert(sub(0, 6) === -6);
console.assert(sub(0, 7) === -7);
console.assert(sub(0, 8) === -8);
console.assert(sub(0, 9) === -9);

console.assert(sub(1, 1) === 0);
console.assert(sub(1, 2) === -1);
console.assert(sub(1, 3) === -2);
console.assert(sub(1, 4) === -3);
console.assert(sub(1, 5) === -4);
console.assert(sub(1, 6) === -5);
console.assert(sub(1, 7) === -6);
console.assert(sub(1, 8) === -7);
console.assert(sub(1, 9) === -8);

console.assert(sub(2, 1) === 1);
console.assert(sub(2, 2) === 0);
console.assert(sub(2, 3) === -1);
console.assert(sub(2, 4) === -2);
console.assert(sub(2, 5) === -3);
console.assert(sub(2, 6) === -4);
console.assert(sub(2, 7) === -5);
console.assert(sub(2, 8) === -6);
console.assert(sub(2, 9) === -7);

console.assert(sub(3, 2) === 1);
console.assert(sub(3, 3) === 0);
console.assert(sub(3, 4) === -1);
console.assert(sub(3, 5) === -2);
console.assert(sub(3, 6) === -3);
console.assert(sub(3, 7) === -4);
console.assert(sub(3, 8) === -5);
console.assert(sub(3, 9) === -6);

console.assert(sub(4, 1) === 3);
console.assert(sub(4, 2) === 2);
console.assert(sub(4, 3) === 1);
console.assert(sub(4, 4) === 0);
console.assert(sub(4, 5) === -1);
console.assert(sub(4, 6) === -2);
console.assert(sub(4, 7) === -3);
console.assert(sub(4, 8) === -4);
console.assert(sub(4, 9) === -5);

console.assert(sub(5, 1) === 4);
console.assert(sub(5, 2) === 3);
console.assert(sub(5, 3) === 2);
console.assert(sub(5, 4) === 1);
console.assert(sub(5, 5) === 0);
console.assert(sub(5, 6) === -1);
console.assert(sub(5, 7) === -2);
console.assert(sub(5, 8) === -3);
console.assert(sub(5, 9) === -4);

console.assert(sub(6, 1) === 5);
console.assert(sub(6, 2) === 4);
console.assert(sub(6, 3) === 3);
console.assert(sub(6, 4) === 2);
console.assert(sub(6, 5) === 1);
console.assert(sub(6, 6) === 0);
console.assert(sub(6, 7) === -1);
console.assert(sub(6, 8) === -2);
console.assert(sub(6, 9) === -3);

console.assert(sub(7, 1) === 6);
console.assert(sub(7, 2) === 5);
console.assert(sub(7, 3) === 4);
console.assert(sub(7, 4) === 3);
console.assert(sub(7, 5) === 2);
console.assert(sub(7, 6) === 1);
console.assert(sub(7, 7) === 0);
console.assert(sub(7, 8) === -1);
console.assert(sub(7, 9) === -2);

console.assert(sub(8, 1) === 7);
console.assert(sub(8, 2) === 6);
console.assert(sub(8, 3) === 5);
console.assert(sub(8, 4) === 4);
console.assert(sub(8, 5) === 3);
console.assert(sub(8, 6) === 2);
console.assert(sub(8, 7) === 1);
console.assert(sub(8, 8) === 0);
console.assert(sub(8, 9) === -1);

console.assert(sub(9, 1) === 8);
console.assert(sub(9, 2) === 7);
console.assert(sub(9, 3) === 6);
console.assert(sub(9, 4) === 5);
console.assert(sub(9, 5) === 4);
console.assert(sub(9, 6) === 3);
console.assert(sub(9, 7) === 2);
console.assert(sub(9, 8) === 1);
console.assert(sub(9, 9) === 0);

/**
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */
// End Subtraction



function multiply(A, B){
  return A * B;
};

console.assert(multiply(0, 0) === 0);
console.assert(multiply(0, 1) === 0);
console.assert(multiply(0, 2) === 0);
console.assert(multiply(0, 3) === 0);
console.assert(multiply(0, 4) === 0);
console.assert(multiply(0, 5) === 0);
console.assert(multiply(0, 6) === 0);
console.assert(multiply(0, 7) === 0);
console.assert(multiply(0, 8) === 0);
console.assert(multiply(0, 9) === 0);

console.assert(multiply(1, 1) === 1);
console.assert(multiply(1, 2) === 2);
console.assert(multiply(1, 3) === 3);
console.assert(multiply(1, 4) === 4);
console.assert(multiply(1, 5) === 5);
console.assert(multiply(1, 6) === 6);
console.assert(multiply(1, 7) === 7);
console.assert(multiply(1, 8) === 8);
console.assert(multiply(1, 9) === 9);

console.assert(multiply(2, 1) === 2);
console.assert(multiply(2, 2) === 4);
console.assert(multiply(2, 3) === 6);
console.assert(multiply(2, 4) === 8);
console.assert(multiply(2, 5) === 10);
console.assert(multiply(2, 6) === 12);
console.assert(multiply(2, 7) === 14);
console.assert(multiply(2, 8) === 16);
console.assert(multiply(2, 9) === 18);

console.assert(multiply(3, 1) === 3);
console.assert(multiply(3, 2) === 6);
console.assert(multiply(3, 3) === 9);
console.assert(multiply(3, 4) === 12);
console.assert(multiply(3, 5) === 15);
console.assert(multiply(3, 6) === 18);
console.assert(multiply(3, 7) === 21);
console.assert(multiply(3, 8) === 24);
console.assert(multiply(3, 9) === 27);

console.assert(multiply(4, 1) === 4);
console.assert(multiply(4, 2) === 8);
console.assert(multiply(4, 3) === 12);
console.assert(multiply(4, 4) === 16);
console.assert(multiply(4, 5) === 20);
console.assert(multiply(4, 6) === 24);
console.assert(multiply(4, 7) === 28);
console.assert(multiply(4, 8) === 32);
console.assert(multiply(4, 9) === 36);

console.assert(multiply(5, 1) === 5);
console.assert(multiply(5, 2) === 10);
console.assert(multiply(5, 3) === 15);
console.assert(multiply(5, 4) === 20);
console.assert(multiply(5, 5) === 25);
console.assert(multiply(5, 6) === 30);
console.assert(multiply(5, 7) === 35);
console.assert(multiply(5, 8) === 40);
console.assert(multiply(5, 9) === 45);

console.assert(multiply(6, 1) === 6);
console.assert(multiply(6, 2) === 12);
console.assert(multiply(6, 3) === 18);
console.assert(multiply(6, 4) === 24);
console.assert(multiply(6, 5) === 30);
console.assert(multiply(6, 6) === 36);
console.assert(multiply(6, 7) === 42);
console.assert(multiply(6, 8) === 48);
console.assert(multiply(6, 9) === 54);

console.assert(multiply(7, 1) === 7);
console.assert(multiply(7, 2) === 14);
console.assert(multiply(7, 3) === 21);
console.assert(multiply(7, 4) === 28);
console.assert(multiply(7, 5) === 35);
console.assert(multiply(7, 6) === 42);
console.assert(multiply(7, 7) === 49);
console.assert(multiply(7, 8) === 56);
console.assert(multiply(7, 9) === 63);

console.assert(multiply(8, 1) === 8);
console.assert(multiply(8, 2) === 16);
console.assert(multiply(8, 3) === 24);
console.assert(multiply(8, 4) === 32);
console.assert(multiply(8, 5) === 40);
console.assert(multiply(8, 6) === 48);
console.assert(multiply(8, 7) === 56);
console.assert(multiply(8, 8) === 64);
console.assert(multiply(8, 9) === 72);

console.assert(multiply(9, 1) === 9);
console.assert(multiply(9, 2) === 18);
console.assert(multiply(9, 3) === 27);
console.assert(multiply(9, 4) === 36);
console.assert(multiply(9, 5) === 45);
console.assert(multiply(9, 6) === 54);
console.assert(multiply(9, 7) === 63);
console.assert(multiply(9, 8) === 72);
console.assert(multiply(9, 9) === 81);
/**
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */
// End multiply


function divide(A, B){
  return A / B;
};

//Zero division produces infinity
console.assert(divide(1, 1) === 1);
console.assert(divide(1, 2) === 0.5);

console.assert(divide(1, 4) === 0.25);
console.assert(divide(1, 5) === 0.2);
console.assert(divide(1, 8) === 0.125);

console.assert(divide(2, 1) === 2);
console.assert(divide(2, 2) === 1);
console.assert(divide(2, 4) === 0.5);
console.assert(divide(2, 5) === 0.4);
console.assert(divide(2, 8) === 0.25);

console.assert(divide(3, 1) === 3);
console.assert(divide(3, 2) === 1.5);
console.assert(divide(3, 3) === 1);
console.assert(divide(3, 4) === 0.75);
console.assert(divide(3, 5) === 0.6);
console.assert(divide(3, 6) === 0.5);
console.assert(divide(3, 8) === 0.375);

console.assert(divide(4, 1) === 4);
console.assert(divide(4, 2) === 2);
console.assert(divide(4, 4) === 1);
console.assert(divide(4, 5) === 0.8);
console.assert(divide(4, 8) === 0.5);

console.assert(divide(5, 1) === 5);
console.assert(divide(5, 2) === 2.5);
console.assert(divide(5, 4) === 1.25);
console.assert(divide(5, 5) === 1);
console.assert(divide(5, 8) === 0.625);

console.assert(divide(6, 1) === 6);
console.assert(divide(6, 2) === 3);
console.assert(divide(6, 3) === 2);
console.assert(divide(6, 4) === 1.5);
console.assert(divide(6, 5) === 1.2);
console.assert(divide(6, 6) === 1);
console.assert(divide(6, 8) === 0.75);

console.assert(divide(7, 1) === 7);
console.assert(divide(7, 2) === 3.5);
console.assert(divide(7, 4) === 1.75);
console.assert(divide(7, 5) === 1.4);
console.assert(divide(7, 7) === 1);
console.assert(divide(7, 8) === 0.875);

console.assert(divide(8, 1) === 8);
console.assert(divide(8, 2) === 4);
console.assert(divide(8, 4) === 2);
console.assert(divide(8, 5) === 1.6);
console.assert(divide(8, 8) === 1);

console.assert(divide(9, 1) === 9);
console.assert(divide(9, 2) === 4.5);
console.assert(divide(9, 3) === 3);
console.assert(divide(9, 4) === 2.25);
console.assert(divide(9, 5) === 1.8);
console.assert(divide(9, 6) === 1.5);
console.assert(divide(9, 8) === 1.125);
console.assert(divide(9, 9) === 1);

/**
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */
// End divide
