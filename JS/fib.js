function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));


function fibo(n){
    if(n <= 1) return n;
    return fibo(n-1) + fibo(n-2);
}

console.log(fibo(20));


function fibon(n){
    if( n <= 1) return n;
    return fibon(n - 1) + fibon(n-2)
}

console.log(fibon(15));


function fib(n, memo = {}){
    if(n in memo) return memo[n];
    if(n <= 1) return n;
    return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}

console.log(fib(10))

function fib(n, memo = {}){
    if(n in memo) return memo[n];
    if(n <= 1) return n;
    return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}

console.log(fib(11));
