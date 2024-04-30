//task10
// function reverseAndNot(num) {
//     let rev=''
//     for(let i=num;i>0;i=Math.floor(i/10)) {
//         rev+=i%10
//     }
//     return `${rev}`+`${num}`
// }
// console.log(reverseAndNot(123));



//task6
// function checkEnding(str,str1) {
//     return str.includes(str1)
// }
// console.log(checkEnding("feminine", "nine"));



//task7
// function checkPalindrome(str) {
//     let reverse = ''
//     for(let i=str.length-1;i>=0;i--) {
//         reverse+=str.at(i)
//     }
//     return reverse==str
// }
// console.log(checkPalindrome("reviver"));


 //task8
// function charCount(letter, word){
//     let cnt=0;
//     for(let i=0; i<=word.length-1; i++){
//         if(word.at(i)==letter){
//             cnt++;
//         }
//     }
//     return cnt
// }
// console.log(charCount("b", "big fat bubble"));


//task9
// function capToFront(str) {
//     let small = ''
//     let big = ''
//     for(let i=0;i<str.length-1;i++) {
//         if(str[i]>='A' && str[i]<='Z') {
//             big+=str[i]
//         }
//         else {
//             small+=str[i]
//         }
//     }
//     return big+small
// }
// console.log(capToFront("shOrtCAKE"));