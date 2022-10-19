const numbers = [1, 2, 3, 4, 5]

const doubleElement = function (number) {
    return number * 2
}

const newArry = numbers.map(doubleElement)

console.log(newArry)

// 2.
const newArray = numbers,map(function (number) {
    return number * 2
})

console.log(newArry)

// 3.
const newArray = numbers.map((number) => {
    return number * 2
})

console.log(newArry)

// 4.
const newArray = numbers.map((number) => number * 2)

console.log(newArry)
