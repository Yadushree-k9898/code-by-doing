function palindrome(str){
    reversed = str.split('').reverse().join('')
    return str === reversed

}
console.log(palindrome("racecar"));


function palindrome(str){
    reversed = str.split('').reverse().join('')
    return str === reversed
}

console.log(palindrome("hello"));

function palindrome(str){
    reversed = str.split('').reverse().join('')
    return str === reversed
}
console.log(palindrome("madam"));



function palindrome(num){
    const str = num.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed
}

console.log(palindrome(12321));


function palindrome(num){
    const str = num.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed
}

console.log(palindrome(12345));
