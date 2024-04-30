//task1
// function modifyLast(a,b) {
//    let result = a.at(-1).repeat(b-1)
//    return a+result
// }
// console.log(modifyLast('excuse me what?',5));

// //task2
// function firstLast(str) {
//    let first = str.at(0)
//    let second = str.at(-1)
//    return first + second;
// }
// console.log(firstLast("ganesh"))


//task3
// function toInt(elm){
//    if(typeof elm == 'string')  {
//      return Number(elm)
//    }
//    else {
//     return `"${elm}"`
//    }
// }
// console.log(toInt(77));


// //task4
// function isPlural(str) {
//     if(str.at(-1) == 's') {
//         return 'true'
//     }
//     else {
//         return 'false'
//     }
// }
// console.log(isPlural("dudes"));


//task5
// function reverseCapitalize(str) {
//     let rev = str.split("")
//     let rev1 = rev.toReversed().join('')
//     return rev1.toUpperCase()
// }
// console.log(reverseCapitalize("hellothere"));