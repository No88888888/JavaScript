const colors = ['red', 'blue', 'green']

const printClr = function (color) {
    console.log(color)
}

// 1.
colors.forEach(printClr)

// 2.
colors.forEach(function (color) {
    console.log(color)
})

// 3.
colors.forEach((color) => {
    console.log(color)
})

// 4.
colors.forEach((color) => console.log(color))