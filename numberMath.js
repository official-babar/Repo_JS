let score = 450;
//console.log(score);

let balance = new Number(50655.5656);
//console.log(balance);

let newBalance = balance.toFixed(2);
//console.log(newBalance);

//console.log(Math.round(balance));

//console.log(Math.ceil(balance));

//console.log(Math.floor(balance));

// console.log(Math.min(5,6,10,2,8,20));
// console.log(Math.max(5,6,10,2,8,20));

let rand = Math.ceil(Math.random() * 10);
if (rand === 5) {
  console.log("Congrats Number is " + rand + " and You Win The Game...");
} else {
  console.log("Try Again...");
}
