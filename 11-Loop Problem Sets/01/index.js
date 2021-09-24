console.log("print all numbers between -10 and 19");
for (var i = -10; i <= 19; i++) {
  console.log(i);
}

console.log("print all even numbers between 10 and 40");
for (var j = 10; j <= 40; j+=2) {
  console.log(j);
}

console.log("print all odd numbers between 300 and 333");
for (var k = 300; k <= 333; k++) {
  if(k % 2 !== 0) {
    console.log(k);
  }
}

console.log("print all numbers divisible by 5 and 3 between 5 and 50")
for (var count = 5; count <= 50; count++) {
  if (count % 5 === 0 && count % 3 === 0){
    console.log(count);
  }
}
