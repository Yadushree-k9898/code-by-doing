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



function palindrome(str){
    let left = 0;
    let right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true
}

console.log(palindrome("level"));



function palindrome1(str){
    let left = 0;
    let right = str.length-1

    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true
}


console.log(palindrome1("deifid"));



function palindrome2(str){
    let left = 0, right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--
    }
    return true
}

console.log(palindrome2("noon"));

function palindrome3(str){
    let left = 0; 
    let right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return false
}


console.log(palindrome3("hello"));


function numberPalindrome(x){
    if(x < 0) return false;
    let reversed = 0;
    let original = x;

    while( x > 0){
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x/ 10)
    }

    return original === reversed
}


console.log(numberPalindrome(121));



function NP(x){
    if(x < 0) return false;

    let reversed = 0;
    let original = x;

    while(x >0){
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10)
    }

    return reversed === original 
}


console.log(NP(12321));




function NP2(x){
    if( x< 0) return false;

    let reversed = 0;
    let original = x;

    while(x > 0){
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10)
    }

    return reversed=== original
}

console.log(NP2(1234321));
