/**
 * The function `reverse` computes the reversal
 * of a given `String` (don't copy-pasta!)
 *
 * @param {String} S to reverse
 * @return {String}
 */
function reverse(S){
  var empty = "";
  for (var i = S.length - 1; i >= 0; i--) {
    empty += S[i]; }
return empty;

};
    // YOUR CODE HERE: NO INTERNET COPY-PASTA!

// console.assert(reverse("") === ""); // Really?

console.assert(reverse("A") === "A"); // Jerk.

console.assert(reverse("cat") === "tac");

console.assert(reverse("ward") === "draw");

console.assert(reverse("books") === "skoob"); // Rokey, dokey...

console.assert(
  reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew"
);

/**
 * Function `encode` accepts a `String` and produces
 * the appropriate ROT13 "encoded" version, i.e. every
 * character in `phrase` is "rotated" ahead by 13 characters.
 *
 * @see String.prototype.charCodeAt
 * @see String.prototype.fromCharCode
 * @see http://en.wikipedia.org/wiki/ROT13
 *
 * // Start with just `phrase`...
 * @param {String} phrase to encode
 * // Add `N` in part 2!
 * // @param {Number} N rotation to apply, default 13
 * @return {String} encoded with ROT13
 */



function encode(phrase, N){
  var code = phrase.split("");
  for (var i=0; i < code.length; i++) {
    code[i] = code[i].charCodeAt() + N;
    if (code[i] > 122) {
      code[i] = String.fromCharCode(code[i] - 26);
    } else {
      code[i] = String.fromCharCode(code[i]);
    }
  }
  return code.join("");
}


// console.assert(encode("hello", 2) === "106", "103", "110", "110", "113");
// console.assert(encode("a") === 97);
/**
 * Function `decode` accepts a `phrase` and `N` and
 * decoded it appropriately, i.e. every _word_ character
 * in `phrase` is rotated backward by `N` characters.
 *
 * @param {String} phrase to decode
 * @param {Number} N rotation to apply, default 13
 * @return {String} decoded by ROT-N
 */
function decode(phrase, N){
 var code = phrase.split("");
 for (var i=0; i < code.length; i++) {
   code[i] = code[i].charCodeAt() - N;
   if (code[i] < 97) {
     code[i] = String.fromCharCode(code[i] + 26);
   } else {
     code[i] = String.fromCharCode(code[i]);
   }
 }
 return code.join("");
}


// Produce more examples, please...

// console.assert(encode("hello") === "uryyb"); ADDED N VALUE
// console.assert(encode("uryyb") === "hello"); ADDED N VALUE
console.assert(encode("bye", 2) === "dag")
console.assert(encode("hello", 2) === "jgnnq")
console.assert(decode("jgnnq", 2) === "hello")
console.assert(decode("dag", 2) === "bye")
