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


function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum += num
    }
    return sum
}

console.log(sumArray([10, 20, 30, 40, 50]));



function sumArray(arr){
    let sum = 0;

    for(let num of arr){
        sum += num
    }
    return sum
}


console.log(sumArray([1, 2, 3, 4, 5]));



function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum += num
    }
    return sum
}


console.log(sumArray([1, 2, 3]));



const sumArrayReduce = arr => arr.reduce((sum, curr) => sum + curr, 0)
console.log(sumArrayReduce([10, 2, 3]));



const sumArray1 = arr => arr.reduce((acc, curr) => acc+curr, 0)

console.log(sumArray1([1, 2, 3]));



function sumArray2(arr, i = 0){
    if( i === arr.length) return 0;
    return arr[i] +sumArray2(arr, i + 1)
}


console.log(sumArray2([1, 2, 3]))


function sumArr(arr, i = 0){
    if(i === arr.length) return 0;

    return arr[i] + sumArr(arr, i+1)
}


console.log(sumArr([2, 3, 4, 5]))


function sumArra(arr, i = 0){
    if(i === arr.length) return 0;
    return arr[i] + sumArra(arr, i+1)
}

console.log(sumArra([1, 3, 5]))