//task1
// function calculator(str) {
//     let res=eval(str)
//     return res
// }
// console.log(calculator("13+2-5*2"));



//task2
// function stringInt(str) {
//     return +str
// }
// console.log(stringInt('1000'));



//task3
// function comp(str,str1) {
//     return str.length == str1.length
// }
// console.log(comp("AB", "CD"));


//task4
// function repeatString(str,num) {
//     if(typeof str !== 'string') {
//         return 'Not A String'
//     }
//     else {
//         return str.repeat(num)
//     }
// }
// console.log(repeatString("Mubashir", 2));



//task5
// function capitalLetters(str) {
//     let cnt = 0;
//     for(let i=0;i<str.length;i++) {
//         if(str[i] == str[i].toUpperCase()) {
//             cnt++
//         }
//     }
//     return cnt
// }
// console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc"));


//task6
// function makeTitle(str){
//     let toArray = str.split(' ')
//     let result = ''
//     for(let i=0; i<toArray.length; i++){
//         result+=toArray[i].at(0).toUpperCase()+toArray[i].slice(1) + ' '
//     }
//     return result
//     } 
//     console.log(makeTitle("capitalize every word"));