// Array Declaration
var arr = [1, 2, 5, 4, 3]

console.log("Array:", arr)
console.log("Position:", arr[1])
console.log("Length:", arr.length)

console.log("Sorting:", arr.sort())
console.log("Reverse:",arr.reverse())

console.log("Insert:", arr.push(6))
console.log("Last Position Remove: ", arr.pop())

// Filter
const result = arr.filter((item) => {
    return item >= 2
})
console.log("Filter:", result)