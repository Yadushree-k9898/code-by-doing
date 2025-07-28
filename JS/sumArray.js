function sumArray(arr, i=0){
    if(i === arr.length) return 0;
    return arr[i] + sumArray(arr, i+1)
}


console.log(sumArray([1, 2, 3, 4,5]))


function sumArray(arr, i = 0){
    if(i === arr.length) return 0;
    return arr[i] + sumArray(arr, i+ 1);
}

console.log(sumArray([9, 10, 11, 12, 13]))


function sumArray(arr, i = 0){
    if(i === arr.length) return 0;
    return arr[i] + sumArray(arr, i+1)

}

console.log(sumArray([10, 20, 30, 40, 50]))



function sumArray(arr, i = 0){
    if(i === arr.length) return 0;
    return arr[i] + sumArray(arr, i+1);
}


console.log(sumArray([2, 4, 6, 8, 10]))