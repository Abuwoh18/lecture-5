//task9
// function sumOfEvenDigits(num) {
//   let cnt = 0;
//   for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     if(i%2==0) {
//         cnt+=i%10
//     }
//   }
//   return cnt;
// }
// console.log(sumOfEvenDigits(2468642));

//task10;
// function factorial(num) {
//   let cnt = 1;
//   for (let i = 1; i <= num; i++) {
//     cnt *= i;
//   }
//   return cnt;
// }
// console.log(factorial(4));

//task7
// function fib(num) {
//   let f0 = 0;
//   let f1 = 1;
//   let fnum = null;
//   for (let i = 2; i <=num; i++) {
//     fnum = f0 + f1;
//     f0 = f1;
//     f1 = fnum;
//   }
//   return f1;
// }
// console.log(fib(3));

//task4
//   function sumCubes(num) {
//     let cnt=0
//     for(let i=1;i<=num;i++) {
//         cnt+=i**3
//     }
//     return cnt
//   }
//   console.log(sumCubes(3));

//task3
// function addDigit(num) {
//   let cnt = 0;
//   for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     cnt += i % 10;
//   }
//   return cnt
// }
// console.log(addDigit(38));






//task1
// function count(num) {
//   let cnt = 0;
//   for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     if (i%10%2==0) {
//       cnt++;
//     }
//   }
//   return cnt;
// }
// console.log(count(13579));

//task2
//   function sevenBoom(num) {
//     for(let i=num;i>0;i=Math.floor(i/10)) {
//         if(i%10==7) {
//             return 'Boom'
//         }
//     }
//     return 'there is no 7 in the arguments'
//   }
//   console.log(sevenBoom(9));

//task6
// function maxs(n) {
//   let max = -999999999;
//   for (let i = n; i > 0; i = Math.floor(i / 10)) {
//     if (i % 10 > max) max = i % 10;
//   }
//   return max;
// }
// console.log(maxs(29));

//task5
// function isSymmetrical(a) {
//    let cnt ='';
//    for(let i=a;i>0;i=Math.floor(a/10)) {
//       cnt+= i %10;
//    }
//    return cnt == a;
// }
// console.log( isSymmetrical(44444444));



// function sum(a){
//     for(let i=a;i>0;i=Math.floor(i/10)) {
//         if((i%100)%11==0) {
//             return 'true'
//         }
//     }
//     return 'false'

// }
// console.log(sum(122345));

// function sum(params) {
//     let cnt = params
//     for(;;){
//         if(cnt<10){
//             return cnt
//         }
//         cnt = Math.floor(cnt/10+cnt%10)
//     }
// }
// console.log(sum(38));