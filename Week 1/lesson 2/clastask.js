//task1
// function sumTwoNumber(a,b) {
//     return a+b;
// }
// console.log( sumTwoNumber(-2,4));

//task2
// function checknumber(a) {
//     console.log( a>0 ? 'Positive' : a<0 ? 'Negative' : 'zero');
// }
// console.log(checknumber(-8));

//task3
// function generateMultiplicationTable(num) {
//     for(let i=1;i<=10;i++){
//         console.log(num + '*' + i + '=' + num*i);
//     }
// }
// console.log(generateMultiplicationTable(5));

//task4
//    function endNine(num) {
//     if(num%10==9) {
//         return 'Yes'
//     }
//     else {
//         return 'NO'
//     }
//    }
//    console.log(endNine(149));

//task5
//   function getcenture(n) {
//     return Math.ceil(n/100)
//   }
//   console.log(getcenture(1705));

//task6
//    function longestTime(h,m,s) {
//     let hour = h*3600;
//     let minutes = m*60;
//     if(hour>minutes && hour>s) {
//         return h
//     }
//     else if (minutes>hour && minutes>s) {
//         return m;
//     }
//     else {
//         return s
//     }
//    }
//    console.log( longestTime(1, 59, 3598) );

//task7
//    function same(num) {
//     let n1 =Math.floor(num/100);
//     let n2 =Math.floor(num/10%10);
//     let n3 =Math.floor(num%10);

//     if(n1==n2 && n2==n3 && n3==n1) {
//         return 'True'
//     }
//     else if (n1!=n2 && n2!=n3 && n3!=n1) {
//         return 'False'
//     }
//     else {
//         return 'true'
//     }
//    }
//    console.log(same(669));

//task8
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
//    console.log( largestSwap(53) );

//task9
//    function addUp(num) {
//     let cnt =0
//     for(let i=1;i<=num;i++) {
//         cnt+=i
//     }
//     return cnt;
//    }
//    console.log(addUp(600));

//task10
//    function different(f,s,th) {
//     if(f!=s && f!=th) {
//         return '1'
//     }
//     else if (s!=f && s!=th) {
//         return '2'
//     }
//     else  {
//         return '3'
//     }
//    }
//    console.log(different(10,5,10));

//task11
//    function evenNum(a,b) {
//     let cnt = 0
//     for(let i=a;i<=b;i++) {
//          if(i%2==0) {
//             cnt+=i
//          }
//     }
//     return cnt;
//    }
//    console.log(evenNum(-5,-3));

//task12
// function sum(n,k) {
//    let cnt = 0;
//    for(let i=1;i<=n;i++) {
//       cnt+=i**k;
//    }
//    return cnt;
// }
// console.log(sum(5,3));

//task13
// function maxs(n) {
//       let max = -Infinity
//       for(let i=n;i>0;i=Math.floor(i/10)) {
//          if(i%10>max) max = i % 10;
//       }
//       return max;
//    }
// console.log(maxs(29));

//task14
   // function isSymmetrical(a) {
   //    let cnt ='';
   //    for(let i=a;i>0;i=Math.floor(a/10)) {
   //       cnt+= i %10;
   //    }
   //    return cnt == a;
   // }
   // console.log( isSymmetrical(44444444));

//task15
   // function addDigits(a) {
   //  let a1=Math.floor(a/10);
   //  let a2=Math.floor(a%10);
   //  let a3= a1+a2;
   //  let a4=Math.floor(a3/10)
   //  let a5=Math.floor(a3%10);
   //  let a6=a4+a5;
   //  return a6;
   // }
   // console.log(addDigits(38));

//task16
// function isPrime(a) {
//    let cnt =0;
//    for(let i=0;i<=a;i++) {
//       if (a%i==0) {
//          cnt++
//       }
//    }
//    if(cnt==2) {
//       return 'true'
//    }
//    else  {
//       return 'false'
//    }
// }
// console.log(isPrime(2));

//task17
//   function factorial(a) {
//     let cnt=1
//     for(let i=1;i<=a;i++) {
//         cnt*=i
//     }
//     return cnt
//   }
//   console.log(factorial(5));

//task18
// function sumOfDigit(a) {
//     let cnt = 0;
//     for (let i=1;i<=a;i++) {
//         cnt+=i;
//     }
//     return cnt;
// }
// console.log(sumOfDigit(5) );

//task19
// function ariphmetic(a) {
//    let cnt = 0
//    let cnt1 = 0
//    for(let i=a;i>0;i=Math.floor(i/10)){
//      cnt+=i%10
//      cnt1++
//    }
//    return cnt/cnt1
// }
// console.log( ariphmetic(5555));

//task20
// function minOrMax(n) {

//}
// console.log(minOrMax(5732));
