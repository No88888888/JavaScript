const numbers = [90, 80, 70, 100]

// 총합

// const sumNum = numbers.reduce(function (result, number) {
//     return result + number
// })

// console.log(sumNum)


// const sumNum = numbers.reduce(function (result, number) {
//     return result + number
// }, 0)

// console.log(sumNum)

// const sumNum = numbers.reduce((result, number) => {
//     return result + number
// }, 0)

// console.log(sumNum)

const sum = numbers.reduce((res, number) => res + number, 0) / numbers.length
console.log(sum)
