
function fibsRec(n){
    if (n <= 0) return "Please enter a valid number to return a Fibonacci Sequence "
    if (n === 1) return 0
    if (n === 2) return 1
    return   fibsRec(n - 1) + fibsRec(n - 2)

}

console.log(fibsRec(8));