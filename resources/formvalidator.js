/**
 *
 *  formvalidator.js
 *  Created 2/14/2018 by Stephanie DeFranco
 *  JavaScript class to allow custom validation to run on submission, sending user an alert mesage.
 *
 */

document.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {  // get all input elements on page and loop through.
        elements[i].oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Please enter valid input!");
                //sets a custom validity message if noValidate is disabled.
            }
        };
        elements[i].oninput = function (e) {
            e.target.setCustomValidity("");
        };
    }
});