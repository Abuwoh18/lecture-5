//task1
// function mergeArrays(...arr) {
//     let res = []
//     return res.concat(...arr)
// }
// console.log(mergeArrays([15, 4], [2, 3],[5,7]));




//task2
// function findIndex(arr,arr2) {
//     return arr.indexOf(arr2)
// }
// console.log(findIndex([1, 2, 3],2));




//task 3
// function removeDuplicates(arr) {
//     let res=arr.filter((el,ind)=>{
//         return arr.indexOf(el) == ind
//     })
//     return res;
// }
// console.log( removeDuplicates([1, 2, 2, 3, 4, 4]));



//task 4
// function removeNegatives(arr) {
//     let res=arr.filter((el)=> {
//        return el>0
//     })
//     return res
// }
// console.log(removeNegatives([-1, 2, -3, 4, -5]));



//task5
// function calculateAverage(arr) {
//     let cnt = 0;
//     let res = arr.length
//     arr.forEach((el) => {
//         cnt+=el;
//     })
//     return cnt/res
// }
// console.log(calculateAverage([2, 4, 6, 8, 10]));




//task 6
//     function isPalindromeArray(arr) {
//     let rev = arr.toReversed().join()
//     return rev == arr
// }
// console.log(isPalindromeArray([1,2,3,2,1]));




//task7
// function arrBetween(a,b,arr) {

// }
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));




//task9
// function arrayValuesTypes(arr) {
//   return arr.map((el) => {
//     return typeof el;
//   });
// }
// console.log(
//   arrayValuesTypes([21.1, "float", "array", ["I’m array"], true, 214])
// );



//task10
// function wordLengths(arr) {
//     return arr.map((el)=>{
//       return el.length
//     });
// }
// console.log(wordLengths(["hello","world","halloween"]));



//task13
// function getMultipliedArr(arr) {
//     return arr.map((el) => {
//         return el*2
//     })
// }
// console.log(getMultipliedArr([1, 86, -5]));



//task14
// function sumFive(arr) {
//     let cnt = 0;
//     return arr.filter(el => {
//         if(el>5) {
//             cnt+=el
//         }
//     })
//     return cnt
// }
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));




//task15
// function filterArray(arr) {
//     let res = []
//     return arr.filter((el) => {
//         if(typeof el == 'number') {
//             return el
//         }
//     })
// }
// console.log(filterArray([1,2,3,'a',4,5,6,'s']));