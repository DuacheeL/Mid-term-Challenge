// website loaded?
// console.log("Okay");


// ColorKit Library 
// https://codepen.io/manikoth/pen/NPKVOxm.js

// ✅ Add External ColorKit Library
// Color Kit Library
// https://codepen.io/manikoth/pen/NPKVOxm.js

// Get Stuff

// Set variable for HTML `body` element

// ✅ Check-Check: log out the `body` element in the console

// ✅ Check-Check: get and attach the node for the background color with `.style.backgroundColor`

// Set Stuff

// ✅ Check-Check: assign a background color to "hard code it"
// Hint: Is the color a string, number, or boolean?

// dynamically set backgound color with `colorkit.random()` function/method

// Sparkle effect for funzies
// replace❓ with variable for the `body` element
// colorkit.sparkle( ❓);

// -----------------------
// console.log(colorkit);

// console.log("body");
// document.querySelector("body");

const elemBody = document.querySelector("body");

console.log(document.querySelector(".style.backgroundColor"));

// elemBody.style.backgroundColor = "red";

const randomColor = (elemBody.style.backgroundColor = colorkit.random());

colorkit.sparkle(elemBody);
