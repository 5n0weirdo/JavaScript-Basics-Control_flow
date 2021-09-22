console.log("Print all numbers between -10 and 19");
var num = -10;

while (num <= 19) {
  console.log(num);
  num++;
}

console.log("Print all even numbers between 10 and 40");
var evenNum = 10;

while (evenNum <= 40) {
  if (evenNum % 2 === 0){
    console.log(evenNum);
  }
  evenNum++;
}

console.log("Print all odd numbers between 300 and 333");
var oddNum = 300;

while (oddNum <= 333) {
  if (oddNum % 2 !== 0){
    console.log(oddNum);
  }
  oddNum++;
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
var divisible = 5;

while (divisible <= 50) {
  if (divisible % 5 === 0 && divisible % 3 === 0){
  console.log(divisible);
  }
  divisible++;
}
