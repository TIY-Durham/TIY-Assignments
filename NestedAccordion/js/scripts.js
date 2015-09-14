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
/*
var heading = document.querySelector('.cbp-nttrigger');

heading.addEventListener('click', function(){
  document.querySelector("li").className= "cbp-ntopen";
});

// WORKING CODE FOR MAKING IT CLOSE
{
var openAcc = document.querySelector("li").className="cbp-ntopen";

heading.addEventListener('click', function(){
  document.querySelector("li").className=" ";
});

*/


  // WORKS FOR BOTH OPEN AND CLOSE FOR ONE!
  /*
var heading = document.querySelector('.cbp-nttrigger');

heading.addEventListener('click', function(){
  if (document.querySelector("li").className === "cbp-ntopen"){
    document.querySelector("li").className= "";
  } else{
    document.querySelector("li").className= "cbp-ntopen";
  };

});
*/
// CODE FOR ALL UPPER LEVEL ACCORDIONS:
//Should work. Have syntax error somewhere. GRRR!

var heading = document.querySelectorAll('h3.cbp-nttrigger');

for (var i = 0; i < heading.length; i++) {
  heading[i].addEventListener('click', function(){
    var parent = this.parentElement;
    if (parent.className !== "cbp-ntopen"){
      parent.className= "cbp-ntopen";
    } else {
      parent.className= "";
    }
  });
}



// TESTING FOR LOOPS
/*
var heading = document.querySelectorAll('h3.cbp-nttrigger');

for (var i = 0; i < heading.length; i++) {
 //loops through the nodelist for class cbp-nttrigger
  heading[i].addEventListener('click', function(){

      var openAcc = document.querySelectorAll("li.cbp-ntopen");
      if (openAcc.length > 0){
        for (var i=0; i<openAcc.length; i++) {
          openAcc[i].className= "";
        }

      } else{
        document.querySelectorAll("li").className= "cbp-ntopen";
      }

    })

};
*/


// LOOPS THROUGH HEADINGS BUT DOESN'T ADD NTOPEN TO LI
/*
var heading = document.querySelectorAll('h3.cbp-nttrigger');
var liOat = document.getElementById('cbp-ntaccordion').firstChild;
var liBears = liOats.nextSibling;
var liJelly = liBears.nextSibling;
var liDanish = liJelly.nextSibling;
var liJujubes = document.getElementById('cbp-ntaccordion').lastChild;

// var openAcc = document.querySelectorAll("li.cbp-ntopen");

function makeClickHandler(i) {
    if (liOat.className === "cbp-ntopen"){
      liOat.className= "";
    } else{
      liOat.className= "cbp-ntopen";
    }

    if (liBears.className === "cbp-ntopen") {
      liBears.className= "";
    } else{
      liBears.className= "cbp-ntopen";
    }

  }


for (var i = 0; i < heading.length; i++) {
  heading[i].addEventListener('click', makeClickHandler(i));
}





// EXAMPLE FOR FUNCTION OUTSIDE OF LOOP
