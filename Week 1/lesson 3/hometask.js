//task1
// function isPolidromPrime(number) {
//   let cnt = 0;
//   let cnt2 = "";
//   for (let i = 0; i <= number; i++) {
//     if (number % i == 0) {
//       cnt++;
//     } 
//   }
//   for (let j = number; j > 0; j = Math.floor(j / 10)) {
//     cnt2 += j % 10;
//   }
//   if (cnt == 2 && cnt2 == number) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPolidromPrime(121));

///task3
// function isPow(a) {
//    if(a%2==0) {
//     return 'true'
//    }
//    else  {
//     return 'false'
//    }
// }
// console.log( isPow(9) );

//task7
//    function largestSwap(num) {
//     let n1 = Math.floor(num/10%10);
//     let n2 = Math.floor(num%10);
//     let n3 = n2*10+n1;

//     if(n3<num) {
//         return 'true'
//     }
//     else {
//         return 'False'
//     }
//    }
//    console.log( largestSwap(27) );

//8
// function sum(a){
//     if(a<=1)return false
//     if(a<=3)return true
//     if(a%2==0  a%3==0)return false
//     let i=5
//     while(i*i<=a){
//         if(a%i==0  a%(i+2))return false
//         i+=6
//     }
//     return true
// }

//task9
// function numbersSquares(a) {
//   let cnt = 0;
//   for (let i = 0; i <= a; i++) {
//     for (let j = 1; j <= a - i; j++) {
//       for (let m = 1; m <= a - i; m++) {
//         cnt++;
//       }
//     }
//   }
//   return cnt;
// }
// console.log(numbersSquares(2));

//task10
// function solveForExp(a,b) {
//     let cnt = 0
//     for(let i=b;i>1;i=Math.floor(i/a)){
//         cnt++
//     }
//     return cnt
// }
// console.log(solveForExp(2,1024));

//task12
//    function largestSwap(num) {
//     let n1 = Math.floor(num/10%10);
//     let n2 = Math.floor(num%10);
//     let n3 = n2*10+n1;

//     if(n3<num) {
//         return 'true'
//     }
//     else {
//         return 'False'
//     }
//    }
//    console.log( largestSwap(43) );

//task13
//    function factorial(a) {
//     let cnt = 1;
//     for(let i=1;i<=a;i++) {
//         cnt*=i;
//     }
//     return cnt;
//    }
//    console.log(factorial(5) );

//task14
// function sumOfNumbers(a) {
//     let cnt = 0
//     for(let i=a;i>0;i=Math.floor(i/10)) {
//         cnt+=i%10
//     }
//     return cnt;
// }
// console.log(sumOfNumbers(12345));

//task15
//   function nTablesPlusOne(num) {
//     let cnt= 0;
//     for(let i=1;i<=10;i++) {
//         console.log(i*num+1);;
//     }
//   }
//   console.log(nTablesPlusOne(7));
