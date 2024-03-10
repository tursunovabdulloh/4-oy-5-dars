// ======== 47-masala=============//
// let upvotes = +prompt("son kiriting");
// let downvotes = +prompt("son kiriting");
// function ovozlar(plus, mines) {
//   let result = plus - mines;
//   return result;
// }
// console.log(ovozlar(upvotes, downvotes));
// ======== 48-masala=============//
// let son = +prompt("son kiriting");
// function negativ(son) {
//   if (son) {
//     let result = "-" + son;
//     return result;
//   }
// }
// console.log(negativ(son));
// ======== prompt-masala=============//
// let user = {
//   ism: "Ikrom",
//   raqam: 993932929,
//   city: "Margilan",
// };
// console.log(user);
// ======== 52-masala=============//
// let ism = +prompt("ismingizni kiriting");
// let familiya = +prompt("familyangizni kiriting");
// function kod(x, y) {
//   let result = x + y;
//   return result;
// }
// console.log(kod(ism, familiya));
// function FizzBuzz(son) {
//   if (son % 5 == 0 && son % 3 == 0) {
//     return "FizzBuzz";
//   } else if (son % 5 == 0) {
//     return "Fizz";
//   } else if (son % 3 == 0) {
//     return "Buzz";
//   } else {
//     return son;
//   }
// }
// console.log(FizzBuzz(+prompt("son:")));
function Fibonachi(n = 7, fib = [0, 1]) {
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);

  if (n == 2) {
    return fib[fib.length - 1];
  }
  return Fibonachi(n - 1, fib);
}
console.log(Fibonachi(7));
