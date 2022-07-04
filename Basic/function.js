function demo(a, b){
    console.log(a + b)
    console.log(a - b)
}
demo(1, 2)

function choice (a, b) {
    if(a > b) {
        console.log("A is Large")
    } else if(b > a) {
        console.log("B is Large")
    } else {
        console.log("Both Are Same")
    }
}
choice(10, 5)
choice(5, 10)
choice(10, 10)