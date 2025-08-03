function reverseDigits(num){
    const isNegative = num < 0;
    const reversedStr = Math.abs(num).toString().split('').reverse().join('')
    const reversedNum = parseInt(reversedStr)

    return isNegative ? -reversedNum : reversedNum
}

console.log(reverseDigits(12345)); 


function reversedNumer(num){
    const isNegative = num < 0;
    const reversedStr = Math.abs(num).toString().split('').reverse().join('');
    const reversedNum = parseInt(reversedStr);


    return isNegative ? -reversedNum : reversedNum
}
console.log(reverseDigits(-12345)); 


function reversedNumber(num){
    const isNegative = num < 0;
    const reversedStr = Math.abs(num).toString().split('').reverse().join('');
    const reversedNum = parseInt(reversedStr);

    return isNegative ? -reversedNum : reversedNum
}

console.log(reversedNumber(6789000));



function reverse(x){
    let rev = 0;
    let num = Math.abs(x);


    while(num > 0){
        let digit = num % 10;
        rev = rev * 10 + digit
        num = Math.floor(num / 10)
    }

    if(rev > 2 ** 31 - 1) return 0;

    return x < 0 ? -rev : rev
}

console.log(reverse(12345));



function reverseN(x){
    let rev = 0;
    let num = Math.abs(x);

    while(num > 0){
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }

    if( rev > 2 ** 31 - 1) return 0;

    return x < 0 ? -rev : rev
}


console.log(reverseN(-12345));


function reverseNum(x){
    let rev = 0;
    let num = Math.abs(x);

    while(num > 0){
        let digit = num % 10;
        rev = rev * 10 + digit
        num = Math.floor(num / 10)
    }

    if(rev > 2 ** 31 -1) return 0;

    return x < 0 ? -rev : rev
}


console.log(reverseNum(12345));


function reverseDigits2(x){
    let rev = 0;
    let num = Math.abs(x);

    while(num > 0){
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num/ 10)
    }

    if( rev > 2 ** 31 -1) return 0;

    return x < 0 ? -rev : rev
}

console.log(reverseDigits2(-12345));




function rv(str){
    if(str === "") return "";
    return rv(str.slice(1)) + str[0]
}

console.log(rv("yadu"))


function r(str){
    if(str === "") return "";
    return r(str.slice(1)) + str[0]
}

console.log(r("yadushree"));



function rsv(str){
    if(str === "") return "";
    return rsv(str.slice(1)) + str[0]
}

console.log(rsv("engineer"))