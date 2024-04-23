
//task1
//    function flip(a) {
//         if(a==1) {
//             return '0'
//         }
//         else if(a==0) {
//             return '1'
//         }
//         else {
//             return '0'
//         }
//    }
//    console.log(flip(0));


//task2
//    function equation(a,b) {
//         let x =0;
//         return x=b/a
//    }
//    console.log(equation(4,5));


//task4
    // function isPow(a) {
    //     if(a%2==0) {
    //         return 'true'
    //     }
    //     else {
    //         return 'false'
    //     }
    // }
    // console.log( isPow(16) );



//task5
//    function largestSwap(a) {
//         let a1 = Math.floor(a/10);
//         let a2 = Math.floor(a%10);
//         let a3=a2+''+a1;
        
//         if(a3>a) {
//             return 'false'
//         }
//         else {
//             return 'true'
//         }
//    }
//    console.log(largestSwap(27) );



//task6
//    function countFood(a,b,c,d) {

//    }
//    console.log(countFood(1,70,3,80));


//task7
    // function triangle(a,b,c) {
    //         let result=''
    //         if(a<b && b<c){
    //             result += (a+2)+ ' ' + (b+2)+' ' + (c+2);
    //         }
    //         else{
    //             result+=(-a) + ' ' + (-b) + ' '+(-c)
    //         }
    //         return result
    //     }
    // console.log(triangle(3,-2,8));


// task8
//   function nextEvenandPrev(a) {
//     let result=0
//    if(a%2==0) {
//         result='next:'+" "+(a+2)+ "   "+ 'prev:'+(a-2);
//    }
//    else {
//     result='next:'+" "+(a+1)+ "   "+ 'prev:'+(a-1);
//    }
//    return result;
//   }
//   console.log( nextEvenandPrev(5) );


//task9
//    function subtractNum(a) {
//     if(a>0) {
//         return a-2;
//     }
//     else if (a==0) {
//         return 10;
//     }
//     else {
//         return a+1
//     }
//    }
//    console.log(subtractNum(-2) );


//task10
//    function leastCommonMultiple(a,b) {

//     }
//    console.log( leastCommonMultiple(3,8));


//task11
// function isPerfectNumber(num) {
//     let sum = 0;
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === num;
// }
// console.log(isPerfectNumber(496));


//task12
    // function hasUniqueDigits(a) {
      
    // }
    // console.log(hasUniqueDigits(2211));



//task15
// function reverseOfDigitInFactorial(a){
//     let result=1
//     for(let i=1; i<=a; i++){
//         result=result*i
//     }
//     let reverse=''
//     for(let i=result; i>0; i=Math.floor(i/10)){
//         if(i%10!=0){
//             reverse+=i%10
//         }
//     }
//     return reverse
// }
// console.log(reverseOfDigitInFactorial(5));



//task16
//   function fibonachi(num) {
//     let f0 = 0;
//     let f1 = 1;
//     let fnum = null;

//     for(let i = 2;i<=num;i++) {
//         fnum = f0 + f1;
//         f0 = f1;
//         f1 = fnum;
//     }
//     return f1
//   }
//   console.log(fibonachi(8));

