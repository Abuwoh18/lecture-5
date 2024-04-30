// task 1
// function doubleChar(str) {
//   let str1 = "";
//   if (typeof str == "number") {
//     return "Not a string";
//   }
//   for (let i = 0; i < str.length; i++) {
//     str1 += str[i].repeat(2);
//   }
//   return str1;
// }
// console.log(doubleChar("string"));




// task 3
// function removeNumber(str){
//     let str1 = ''
//     for(let i=0; i<str.length; i++){
//         if(str[i]>=1 && str[i]<=9){
//         }
//         else{
//             str1+=str[i]
//         }
//     }
//     return str1
// }
// console.log(removeNumber('12ma23t6'));




// task 4
// function reverse(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//       rev += str[i].toLowerCase();
//     } else if (str[i] >= "b" && str[i] <= "z") {
//       rev += str[i].toUpperCase();
//     }
//   }
//   return rev;
// }
// console.log(reverse("rev eRse"));




//task 5
// function unrepeated(str) {
//   let str1 = "";
//   for (let i = 0; i < str.length; i++)
//     if (str[i] != str[i + 1]) {
//       str1 += str[i];
//     }
//   return str1;
// }
// console.log(unrepeated("hellol"));




// task 7
// function sumOfNumber(num) {
//   let res = 0;
//   return () => {
//     for (let i = num; i > 0; i = Math.floor(i / 10)) {
//       res += i % 10;
//     }
//     return res;
//   };
// }
// let sum = sumOfNumber(12345);
// console.log(sum());




// task 8
// function sumCubes(num) {
//   let res = 0;
//   for (let i = 1; i <= num; i++) {
//     res += i ** 3;
//   }
//   return res;
// }
// console.log(sumCubes(9));




// task 9
// function factFact(num){
//     let f = 1
//     for(let i=num; i>0; i--){
//         for(let j=1; j<=i; j++){
//             f*=j
//         }
//     }
//     return f
// }
// console.log(factFact(6));