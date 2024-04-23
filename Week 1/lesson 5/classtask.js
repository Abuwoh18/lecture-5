//task1
//    function strDiapozone(num) {
//         for(let i=1;i<=num;i++) {
//             console.log(i);
//         }
//    }
//    console.log(strDiapozone(5));

//task2
// function restWeak(num) {
//         if(num==7) {
//             return 'Sunday'
//         }
//         else if(num==6) {
//             return 'Saturday,Sund2ay'
//         }
//         else if(num==5) {
//             return 'Friday,Saturday,Sunday'
//         }
//         else if(num==4) {
//             return 'Thursday,Friday,Saturday,Sunday'
//         }
//         else if(num==3) {
//             return 'Wednesday,Thursday,Friday,Saturday,Sunday'
//         }
//         else if(num==2) {
//             return 'Thuesday,Wednesday,Thursday,Friday,Saturday,Sunday'
//         }
//         else {
//             return 'Monday,Thuesday,Wednesday,Thursday,Friday,Saturday,Sunday'
//         }
//    }
// console.log( restWeak(7) );



//task3
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
// console.log(isPolidromPrime(151));


//task6
// function gerDeap(a,b) {
//      let z=''
//     let i=a;
//     while (i<=b) {
//         z+=i+","
//         i++
//     }
//     return z
// }
// console.log(gerDeap(10, 12));


//task7
// function calculator(a, b, c) {
//   if ((b =='+')) {
//     return a + c;
//   } 
//   else if ((b == "*")) {
//     return a * c;
//   }
//    else if ((b == "/")) {
//     return a / c;
//   } 
//   else if ((b == "-")) {
//     return a - c;
//   } 
//   else if ((b == "%")) {
//     return a % c;
//   } 

// }
// console.log(calculator(1, "*", 3));



//task9
// function kmTOmile(a,b) {
//     if(b=="mil")
//     {
//         return (a*1,621371);
//     }
//     else if(b=="km")
//     {
//         return (a*1.60934);
//     }
// }
// console.log(kmTOmile(1000,'mil'));



//task11
// function grades(num) {
//     if(num=='5')return 'great'
//     else if(num=='4')return 'good'
//     else if(num=='3')return 'will do'
//     else if(num=='2')return 'bad'
// }
// console.log(grades(3));




//task13
// function inFloat(num) {
//     return num / Math.floor(num) != 1
// }
// console.log(inFloat(29));




//task14
// (function(str){
//     console.log(str);
// })('hello')




//task15
// function isNum(a) {
//     return a + '' === a ? false : true
// } 
// console.log(isNum(564));
