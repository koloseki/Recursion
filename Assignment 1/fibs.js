

function fibs_iteration(n){
    const array = [0,1]

    if (n <= 0) return "Please enter a valid number to return a Fibonacci Sequence "
    if (n === 0) return 0
    if (n === 1) return array
    for (let i = 2; i < n; i++) {
        array.push( array[array.length-2]+array[array.length-1] )
    }
    return array;

}



console.log(fibs_iteration(8))