function rotate(arr, k){
    const n = arr.length;
    k = k % n
    for(let i = 0;i < n; i++){
        const last = arr.pop()
        arr.unshift(last)
    }
    return arr
}

console.log(rotate([1, 2, 3, 4, 5 , 6, 7], 3));

function rotate(arr, k){
    const n = arr.length
    k = k % n
    
    reverse(arr, 0, n-1)
    reverse(arr, 0, k-1)
    reverse(arr, k, n-1)

    return arr
}

function reverse(arr, start, end){
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7], 3));


function isPalindrome(str){
    const reversed = str.split('').reverse().join('')
    return str === reversed
}

console.log(isPalindrome('racecar'));


function isPalindrome(str){
    let left = 0
    let right = str.length - 1

    while(left < right){
        if(str[left] < str[right]){
            return false
        }
        left++
        right--
    }
    return true
}

console.log(isPalindrome('racecar'));


function intersect(arr1, arr2){
    const result = []
    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i]) && !result.includes(arr1[i])){
            result.push(arr1[i])
        }
    }
    return result
}

console.log(intersect([1, 2, 2, 1], [2, 2]))

function intersect(arr1, arr2){
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)
    const result = []

    for(let num of set1){
        if(set2.has(num)){
            result.push(num)
        }
    }
    return result
}
console.log(intersect([1, 2, 2, 1], [2, 2]))