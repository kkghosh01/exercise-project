// const sum = (a, b) => a + b ;
// const sub = (a, b) => a - b;
// const times = (a, b) => a * b;
// const div = (a, b) => a / b;
// const mod = (a, b) => a % b;

// const funcArray = [sum, sub, times, div, mod];

// funcArray.forEach(item => console.log(`${item.name}(2, 3) = ${item(2, 3)}`));

// // for(let i = 0; i < funcArr.length; i++){
// //     // console.log(`${funcArr[i].name} = ${funcArr[i](12, 10)}`);
// // }


// // const poinTable = [
// //     [0, 0],
// //     [3, 5],
// //     [5, 7],
// //     [10, 23]
// // ];

// // for(let i = 0; i < poinTable.length; i++){
// //     // console.log(`point= ${i}, x= ${poinTable[i][0]} y= ${poinTable[i][1]}`)
// // }

// // const matrixA = [
// //     [1, 0],
// //     [0, 2],
// //     [3, 1]
// // ];

// // const matrixB = [
// //     [1, 2],
// //     [2, 5],
// //     [7, 1]
// // ];

// // const matixSum = (matrixA, matrixB) => {
// //     const result = []
// //     for(let i = 0; i < matrixA.length; i++){
// //         let row = []
// //         for(let j = 0; j < matrixA[i].length; j++){
// //             row.push(matrixA[i][j] + matrixB[i][j])
// //         }
// //         result.push(row)
// //     }
// //     return result
// // }

// // const matrixC = matixSum(matrixA, matrixB);
// // console.log(matrixC)

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
// let acc = {}
// for(let fruit of fruits){
//     acc[fruit] = (acc[fruit] || 0) + 1 
// }

// console.log(acc)


// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Alice', age: 35 },
// ];

// const groupByName = people.reduce((acc, person) =>{
//     if(!acc[person.name]){
//         acc[person.name] = []
//     }
//     acc[person.name].push(person.age)
//     return acc 
// }, {}) 

// console.log(groupByName)

let empty = {}

console.dir(empty)