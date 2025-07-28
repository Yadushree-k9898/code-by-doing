function factorial(n){
    if ( n=== 0 || n === 1) return 1;
    return n * factorial(n -1)
}

console.log(factorial(5))

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n -1)
}

console.log(factorial(10))


function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n - 1)
}

console.log(factorial(15))


function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n -1)
}

console.log(factorial(20))



function factorial(n) {
     if(n === 0 || n === 1) return 1;

     let result = 1;
     for(let i = 2; i <= n ; i++){
        result *= i
     }
     return result

}

console.log(factorial(8));


function factorial(n){
    if(n === 0 || n === 1) return 1;

    let result = 1;
    for(let i = 2; i <=n ; i++){
         result *= i;

    }
    return result
}

console.log(factorial(5));



function factorial(n){
    if(n ===0 || n ===1) return 0;

    let result = 1;
    for(let i = 2; i <= n ; i++){
        result *= i
    }
    return result
}

console.log(factorial(6));



const memo = {};

function factorialMemo(n){
     if(n === 0 || n === 1) return 1;
     if(memo[n]) return memo[n];

     return memo[n] = n * factorialMemo(n -1)
}

console.log(factorialMemo(5));





const memo1 = {}
function factoriala(n){
    if(n === 0 || n === 1) return 1;
    if(memo1[n]) return memo1[n];

    return memo1[n] = n * factoriala(n - 1)
}


console.log(factoriala(9));




const memow = {};

function factorail(n){
    if(n === 0 || n === 1) return 1;
    if(memow[n]) return memow[n];

    return memow[n] = n * factorail(n - 1)
}


console.log(factorail(6));
