function isPowerOfTwo(n){
    if(n < 1) return false;
    if(n === 1) return true;
    return n % 2 === 0 && isPowerOfTwo(n / 2)
}


console.log(isPowerOfTwo(3))


function P(n){
    if(n < 1 ) return false;
    if(n === 1) return true;
    return n % 2 === 0 && P(n /2)
}

console.log(P(4))


function Po(n){
    if(n < 1) return false;
    if(n === 1) return true
    return n % 2 === 0 && Po(n / 2)
}

console.log(Po(5))


function Power(n){
    if(n < 1) return false;
    if(n === 1) return true;
    return n % 2 === 0 && Power(n / 2)
}


console.log(Power(1))


function Powerr(n){
    return n > 0 && (n & (n - 1)) === 0;
}

console.log(Powerr(2))


function p(n){
    return n > 0 && (n & (n -1)) === 0;
}

console.log(p(4))


function pw(n){
    return n > 0 && (n &(n-1)) === 0
}

console.log(pw(8))