// 함수 선언식
// function add(num1, num2) {
//     return num1 + num2
// }

// console.log(add(2, 7))

// // 함수 표현식

// const sub = function (num1, num2) {
//     return num1 - num2
// }

// console.log(sub(2,7))

// // 기본 인자
// const greeting = function (name = 'Anonymous') {
//     return `Hi ${name}`
// }

// console.log(greeting())

// // 화살표 함수
// // 1단계
// const greeting = (name) => {
//     return `Hi ${name}`
// }

// // 2단계
// const greeting = name => {
//     return `Hi ${name}`
// }

// // 3단계
// const greeting = name => `Hi ${name}`

// function (num) {return num ** 3}

// (num) => { return num ** 3}

// ((num) => num ** 3)(2)

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers[0])
// console.log(numbers[-1])
// console.log(numbers.length)
// console.log(numbers[numbers.length - 1])

// numbers.reverse()
// console.log(numbers)

// numbers.push(100)
// console.log(numbers)

// numbers.pop()
// console.log(numbers)

// console.log(numbers.includes(1))
// console.log(numbers.includes(100))

// console.log(numbers.indexOf(3))
// console.log(numbers.indexOf(100))

// console.log(numbers.join())
// console.log(numbers.join(''))
// console.log(numbers.join(' '))
// console.log(numbers.join('-'))

// console.log(typeof null)
// console.log(typeof undefined)

// const numbers = [1, 2, 3, 4, 5]
// for (const num of numbers) {
//     num = num + 10
// }

// console.log(numbers)
const numbers = [1, 2, 3, 4, 5]
// const new_arr = []
// for (const num in numbers) {
//     new_arr.push(num+10)
// }

// console.log(new_arr)

// const new_arr = []
// for (const num of numbers) {
//     if (num%2 === 1) {
//         new_arr.push(num)
//     }
// }

// console.log(new_arr)

// let result = 0
// for (const num of numbers) {
//     result = result + num
// }

// console.log(result)

for (const i = 0; i < 6; i++) {
    console.log(i)
}