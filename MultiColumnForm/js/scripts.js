/*
1.) Make variables for all of the elements I will be manipulating
    a. start with the form element and one type within the form
    b. make variable for one of each type of form elements
    c. make them all!

2.) Make functions for every(maybe) form element.
    a. make a function that will console.log for the form
    b. make a function for one
    c. then make function for one of each type of form element
    d. then make them all! muwahahaha


3.) Make eventListeners
    a. make eventListener for form
    b. make eventListeners as needed
*/

// var form = document.getElementByTag('form');
/*
var firstName = document.getElementById('first_name');

var lastName = document.getElementById('last_name');

var email = document.getElementById('email');

var country = document.getElementById("country");

var bio = document.getElementById("bio");

var phone = document.getElementById("phone");

var affilitaion = document.getElementById("affiliations");

var occupation = document.getElementById("occupation");

var catName = document.getElementById("cat_name");

var gadget = document.getElementById("gagdet");

var talent = document.getElementById("talent");

var drink = document.getElementById("drink");

var power = document.getElementById("power");

var weapon = document.getElementById("weapon");

var comments = document.getElementById("comments");
*/
// function logForm () {
//   console.log (this.input);
// }

// var data = {
//   casualName: "firstName.value",
//   sirName: "lastName.value",
//   mail:
// }


/*

var info = [];
info.push(firstName.value);
info.push(lastName.value);

function first () {
  info.push(firstName.value);
}

function last () {
  info.push(lastName.value);
}

function mail () {
  info.push(email.value);
}


function log () {
  // var info = [ ]; //empty array info
  // info.push(this.value); //pushing this.value into info array
  console.log(info); //console.logging array

}
//MISC EVENT LISTENERS THAT NEED THEIR FUNCTIONS UPDATED

// form.addEventListener('submit', logForm, false);

firstName.addEventListener('input', first, false);

lastName.addEventListener('input', last, false);

email.addEventListener('input', mail, false);         //stopped here

country.addEventListener('input', first, false);

bio.addEventListener('input', first, false);

phone.addEventListener('input', first, false);

affiliation.addEventListener('input', first, false);

occupation.addEventListener('input', first, false);

catName.addEventListener('input', first, false);

gadget.addEventListener('input', first, false);

talent.addEventListener('input', first, false);

drink.addEventListener('input', first, false);

power.addEventListener('input', first, false);

weapon.addEventListener('input', first, false);

comments.addEventListener('input', first, false);


*/



// WORKING CODE!!!!!!



// var info = document.getElementsByClassName("cbp-mc-submit-wrap"); //not working (submit button)
var firstName = document.getElementById('first_name');

var lastName = document.getElementById('last_name');

var email = document.getElementById('email');

var country = document.getElementById("country");

var bio = document.getElementById("bio");

var phone = document.getElementById("phone");

var affilitaions = document.getElementById("affiliations");

var occupation = document.getElementById("occupation");

var catName = document.getElementById("cat_name");

var gadget = document.getElementById("gagdet");

var talent = document.getElementById("talent");

var drink = document.getElementById("drink");

var power = document.getElementById("power");

var weapon = document.getElementById("weapon");

var comments = document.getElementById("comments");

function collectedInfo () {
 var data = [firstName.value, lastName.value, email.value, country.value, bio.value, phone.value,
 affiliations.value, occupation.value, catName.value, gadget.value, talent.value, drink.value, power.value,
 weapon.value, comments.value];//console.log prints values as they are typed.
 console.log(data);
};

firstName.addEventListener('input', collectedInfo);
lastName.addEventListener('input', collectedInfo);
email.addEventListener('input', collectedInfo);
country.addEventListener('input', collectedInfo);
bio.addEventListener('input', collectedInfo);
phone.addEventListener('input', collectedInfo);
affiliations.addEventListener('input', collectedInfo);
occupation.addEventListener('input', collectedInfo);
catName.addEventListener('input', collectedInfo);
gadget.addEventListener('input', collectedInfo);
talent.addEventListener('input', collectedInfo);
drink.addEventListener('input', collectedInfo);
power.addEventListener('input', collectedInfo);
weapon.addEventListener('input', collectedInfo);
comments.addEventListener('input', collectedInfo);

// info.addEventListener('submit', giveInfo); //not working
