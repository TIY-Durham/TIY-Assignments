var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var email = document.getElementById("email");
var country = document.getElementById("country");
var bio = document.getElementById("bio");
var phone = document.getElementById("phone");
var affiliations = document.getElementById("affiliations");
var occupation = document.getElementById("occupation");
var catName = document.getElementById("cat_name");
var gagdet = document.getElementById("gagdet");
var talent = document.getElementById("talent");
var drink = document.getElementById("drink");
var power = document.getElementById("power");
var weapon = document.getElementById("weapon");
var comments = document.getElementById("comments");

// This connects the button to the variable "submit" 
var submit = document.querySelector("input.cbp-mc-submit");

// This makes an array of all the form fields and then console.log them
// when you click "Submit".

var clickAction = function (objectEvent) {
  var data = [firstName.value, lastName.value, email.value, country.value, bio.value, phone.value, affiliations.value, occupation.value, catName.value, gagdet.value, talent.value, drink.value, power.value, weapon.value, comments.value];
  console.log(data);
};

// These save what is placed into the form fields
firstName.addEventListener('input', clickAction);
lastName.addEventListener('input', clickAction);
email.addEventListener('input', clickAction);
country.addEventListener('input', clickAction);
bio.addEventListener('input', clickAction);
phone.addEventListener('input', clickAction);
affiliations.addEventListener('input', clickAction);
occupation.addEventListener('input', clickAction);
catName.addEventListener('input', clickAction);
gagdet.addEventListener('input', clickAction);
talent.addEventListener('input', clickAction);
drink.addEventListener('input', clickAction);
power.addEventListener('input', clickAction);
weapon.addEventListener('input', clickAction);
comments.addEventListener('input', clickAction);

// This allows the submit button to console.log the fields when clicked
submit.addEventListener('click', clickAction);
