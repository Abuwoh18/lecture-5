//task1
// function multiplyNUms(str) {
//     let arr = str.split(',')
//     let result = 1;
//     for(let i=0;i<arr.length;i++) {
//         result*=arr[i]
//     }
//     return result
// }
// console.log(multiplyNUms('2,3'));


// //task2
// function numberSyllables(str) {
//     let hijo = str.split('-')
//     return hijo.length
// }
// console.log(numberSyllables('on-o-mat-o-poe-ai'));



// //task3
// function checkEnding(str,str1) {
//     return str.includes(str1)
// }
// console.log(checkEnding("abc", "bc"));



// //task4
// function hasSpace(str) {
//     return str.includes(" ")
// }
// console.log(hasSpace('hello, word'));



//task5
// function hello(str) {
//     return `${'HELLO'}` + `${str}`
// }
// console.log(hello('Shukriyajon'))




// //task6
// function getMiddle(str) {
//    let mobayn = Math.floor(str.length / 2)
//    for(let i=0;i<str.length-1;i++) {
//     if(str[i] % 2 == 1 ) {
//         return str.at(mobayn)
//     }
//     else {
//         return str.slice(mobayn - 1 , mobayn + 1)
//     }
//    }
// }
// console.log(getMiddle('testdoma'));



//task7
// function doubleLetter(str) {
//     for(let i=0;i<str.length-1;i++) {
//         if(str[i] == str[i+1]) {
//             return 'true'
//         }
//     }
//     return 'false'
// }
// console.log(doubleLetter('loop'));



//task8
// function findNemo(str) {
//     let arr = str.split(' ')
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i] == 'Nemo') {
//             return 'I found Nemo at ' + (i+1) 
//         }
//     }
//     return 'I cant found Nemo'
// }
// console.log(findNemo('I am finding Nemo !'));

//task9
// function reverse(str) {
//     let rev = ''
//     for(let i=str.length-1;i>=0;i--) {
//         rev+=str.at(i)
//     }
//     return rev
// }
// console.log(reverse('abubakr'));



//task10
// function dashed(str) {
//     let new_str=''
//     for(let i=0;i<=str.length-1;i++) {
//         if(str[i]=='A' || str[i]=='a' || str[i]=='E' || str[i]=='e' || str[i]=='O' || str[i]=='o' || str[i]=='I' || str[i]=='i' || str[i]=='U' || str[i]=='u'  ) {
//             new_str+='-'+str[i]+'-'
//         }
//         else {
//             new_str+=str[i]
//         }
//     }
//     return new_str
// }
// console.log(dashed('Fight for your right to party!'));




//task12
// function checkPalindrome(str) {
//     let rev= ''
//     for(let i=str.length-1;i>=0;i--) {
//         rev+=str.at(i)
//     }
//     return rev==str
// }
// console.log(checkPalindrome("reviver"));



// //task13
// function charCount(str1, str){
//     let cnt=0;
//     for(let i=0; i<=str.length; i++){
//         if(str.at(i)==str1){
//             cnt++;
//         }
//     }
//     return cnt
// }
// console.log(charCount("b", "big fat bubble"));



// // //task15
// function reverseAndNot(num) {
//     let rev=''
//     for(let i=num;i>0;i=Math.floor(i/10)) {
//         rev+=i%10
//     }
//     return `${rev}`+`${num}`
// }
// console.log(reverseAndNot(123));