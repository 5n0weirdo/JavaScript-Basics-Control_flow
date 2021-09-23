var answer = prompt("Are we there yet?");

// if answer does not equal "yes" or "yeah"
while (answer !== "yes" && answer !== "yeah") {
  var answer = prompt("Are we there yet?");
}

// alert this if input is "yes" or "yeah"
alert("Yay, we made it");

// Version 2
//var answer = prompt("Are we there yet?");
//
// checking if the answer contains "yes" in it
//while (answer.indexOf("yes") === -1) {
//  var answer = prompt("Are we there yet?");
//}
//
// alert this if input has "yes" in it
//alert("Yay, we made it");
