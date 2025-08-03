function factorials(n){
    if(n === 0  || n === 1) return 1;
    return n *factorials(n - 1)
}

console.log(factorials(5))


function fact(n){
    if(n === 0 || n === 1) return 1;
    return n * fact(n - 1)
}

console.log(fact(7))


function factorial(n){
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1)
}

console.log(factorial(3))


//iterative 

function fact(n){
    let result = 1;
    for(let i = 2; i <= n ; i++){
        result *= i;
    }
    return result
}


console.log(fact(6))


function ft(n){
    let result = 1;
    for(let i = 2; i <=n; i++){
        result *= i
    }
    return result
}

console.log(ft(5))


function f(n){
    let result = 1;
    for(let i = 2; i <=n; i++){
        result *= i
    }
    return result
}


console.log(f(7))