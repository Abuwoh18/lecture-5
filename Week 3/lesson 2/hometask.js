//task1
// function getFirstValue(arr) {
//     return arr[0]
// }
// console.log(getFirstValue([-500,0,50]));



//task2
// function makePair(...arr) {
//     let res = [...arr];
//     return res
// }
// console.log(makePair(1, 2));



//task3
// function reverse(arr) {
//     return arr.toReversed()
// }
// console.log(reverse([9, 9, 2, 3, 4]));



//task4
// function incrementItems(arr) {
//     return arr.map((el) => {
//         return el+1
//     })
// }
// console.log(incrementItems([0, 1, 2, 3]));




//task5
// function getLastItem(arr) {
//     return arr.slice(-1)
// }
// console.log(getLastItem(["cat", "dog", "duck"]));




//task6
// function arrayToString(arr) {
//     return arr.join('')
// }
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));



//task7
// function check(arr,a) {
//     return arr.includes(a)
// }
// console.log(check([1, 2,3, 4, 5], 3));


// //task8
// function findIndex(arr,a) {
//     return arr.indexOf(a)
// }
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "Green"));



//task9
// function concat(arr,arr1) {
//     return arr.concat(arr1)
// }
// console.log(concat([1, 3, 5], [2, 6, 8]));



//task10
function toNumberArray(arr) {
    return arr.map((el) => {
        return el*1
    })
}
console.log(toNumberArray(["9.4", "4.2"]));