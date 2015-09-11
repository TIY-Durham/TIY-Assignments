/*
 On this page:
* JavaScript adds the class "cbp-ntopen" to the li element when it is clicked. This allows the element to
  "accordion" out and show more text. The accordion function is the javascript which is responsible for adding and
  removing the class if it is clicked on while open. The CSS rules that apply to the rest of the div class the li is in
  apply to the styling of the text that is revealed when the "cbp-ntopen" class is added by javascript.

  I don't really understand DOMs however I imagine that a window object would be called for in this case
  because the page is open in a tab on my browser which is a window.

  Also the document object would be the entry point into the web pages' content i.e. it helps return HTML elements
  in the browser.
  */
/*
  document.getElementById("cbp-ntaccordion").firstChild.class= "cbp-ntopen"; //adds class 'cbp-ntopen' to first li element in ul "cbp-ntaccordion"

  document.getElementById("cbp-ntaccordion").childNodes[1].class= "cbp-ntopen";//adds class 'cbp-ntopen' to second li element

  document.getElementById("cbp-ntaccordion").childNodes[2].class= "cbp-ntopen";//adds class 'cbp-ntopen' to third li element

  document.getElementById("cbp-ntaccordion").childNodes[3].class= "cbp-ntopen";//adds class 'cbp-ntopen' to fourth li element

  document.getElementById("cbp-ntaccordion").childNodes[4].class= "cbp-ntopen";//adds class 'cbp-ntopen' to fifth li element
*/

// What does it do?
// When I click
//   on a heading...

// WORKING FUNTION FOR MAKING ACCORDION OPEN
// !!!!!!!!!!!!!!!!!DO NOT REMOVE!!!!!!!!!!!!!!!!!!!!

var heading = document.querySelector('.cbp-nttrigger');

heading.addEventListener('click', function(){
  document.querySelector("li").className= "cbp-ntopen";
});







/*

// Testing function to remove class
var openAcc = document.querySelector("li").className="cbp-ntopen";
function removeClass ("cbp-ntopen", "li"){
  heading.addEventListener('click', function(){
    var rxp = new RegExp( "s?b"+"cbp-ntopen"+"b", "g" );
    cn = cn.replace( rxp, '' );
    openAcc.className= " ";
  });
};
*/

/*
// Testing If/Else Statement
var heading = document.querySelector('.cbp-nttrigger');
var openAcc = document.querySelector("li").className="cbp-ntopen";


  // if openAcc {
  //   heading.addEventListener('click', function(){
  //     openAcc.className= " ";
  //   });
  // };
  //
  // else{
  var heading = document.querySelector('.cbp-nttrigger');

    heading.addEventListener('click', function(){
      document.querySelector("li").className="cbp-ntopen";
    });
  // };
*/
// function removeClass( classname, element ) {
//     var cn = element.className;
//     var rxp = new RegExp( "s?b"+classname+"b", "g" );
//     cn = cn.replace( rxp, '' );
//     element.className = cn;
// }



var heading = document.querySelector('.cbp-nttrigger');

heading.addEventListener('click', function(){
  document.querySelector("li").className= "cbp-ntopen";
});
