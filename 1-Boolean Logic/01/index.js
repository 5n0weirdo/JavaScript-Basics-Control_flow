// Boolean Logic:
//            == vs. ===
var x = 99;

//it is true because '==' does not take into account the type difference
x == "99" //true

//it is false because of the variable type difference
x === "99" //false

console.log(x);

//variable is set to a null value
var y = null;

y == undefined //true

y === undefined //false
