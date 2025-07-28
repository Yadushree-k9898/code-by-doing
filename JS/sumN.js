function sumN(n){
    if(n === 0) return 0;
    return n + sumN(n-1)
}

console.log(sumN(5))


function sumN(n){
    if(n===0) return 0;
    return n + sumN(n-1)
}

console.log(sumN(3));



function sumN(n){
    if(n === 0) return 0;
    return n + sumN(n-1)
}

console.log(sumN(6))


function sumN(n){
    if(n === 0) return 0;
    return n + sumN(n-1)
}

console.log(5)


function sumN(n){
    return (n * ( n + 1)) / 2;
}

console.log(sumN(10));



function sumN(n){
    return (n * (n+1)) / 2
}


console.log(sumN(13));


function sumN(n){
    return (n * (n + 1)) / 2
}

console.log(sumN(12));


function SumIterartive(n){
    let sum = 0
    for(let i = 1; i <=n ; i++){
        sum += i
    }
    return sum
}

console.log(SumIterartive(10));



function sumIt(n){
    let sum = 0;

    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum
}


console.log(sumIt(9));



function sumI(n){
    let sum = 0;

    for(let i = 1; i <= n; i++){
        sum += i
    }
    return sum
}


console.log(sumI(7));
