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
