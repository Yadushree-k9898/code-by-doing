function findMinMax(arr){
    let min = arr[0], max = arr[0];
    for(let i =1; i <arr.length; i++){
        if(arr[i] < min) min = arr[i]
        if(arr[i] > max) max = arr[i]
    }
    return {min, max}
}

console.log(findMinMax([3, 5, 1, 8, -2, 7])) 

function getMinMax(arr, low, high){
    if(low === high) return {min: arr[low], max:arr[low]}
    if(high === low + 1){
        return arr[low] < arr[high] ? {min: arr[low], max: arr[high]} : {min: arr[high], max: arr[low]}
    }
    let mid = Math.floor((low + high) / 2);
    let left = getMinMax(arr, low, mid)
    let right = getMinMax(arr, mid+1, high)

    return {
        min: Math.min(left.min, right.min),
        max:Math.max(left.max, right.max)
    }
}

let arr = [3, 1, 9, 7, 5];
console.log(getMinMax(arr, 0, arr.length - 1));

function reverseArray(arr){
    let res = [];
    for(let i = arr.length - 1; i >= 0; i--){
        res.push(arr[i])
    }
    return res
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace(arr){
    let left = 0, right = arr.length - 1;
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--
    }
    return arr
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));


function kthSmallest(arr, k){
    arr.sort((a, b) => a - b)
    return arr[k - 1]
}

function kthLargest(arr, k){
    arr.sort((a, b) => b - a)
    return arr[k - 1]
}

let arr1 = [7, 10, 4, 3, 20, 15];
console.log(kthSmallest(arr1, 3));

function kthSm(arr, k){
    let heap = []
    for(let num of arr){
        heap.push(num)
        heap.sort((a, b) => b - a)
        if (heap.length > k) heap.shift()
    }
return heap[0]
}
let arr2 = [7, 10, 4, 3, 20, 15];
console.log(kthSm(arr2, 3));