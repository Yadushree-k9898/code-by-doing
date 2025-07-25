function removeDuplicates(arr){
    if(arr.length === 0) return [];

    let result = [arr[0]];

    for(let i = 1; i <arr.length; i++){
        if(arr[i] !== arr[i-1]){
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 5, 5]));



function RC(arr){
    if(arr.length === 0 ) return [];

    let result = [arr[0]];

    for(let i =1 ; i < arr.length; i++){
        if(arr[i] != arr[i-1] ){
            result.push(arr[i])
        }
    }
    return result
}

console.log(RC([1, 1, 2, 3, 3, 4, 5, 5]));




function removeD(arr){
    if(arr.length === 0) return [];

    let result = [arr[0]];

    for(let i =1; i < arr.length; i++){
        if(arr[i] !== arr[i-1]){
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeD([1, 1, 2, 3, 3, 4, 5, 5]));




function removeDup(nums){
    if(nums.length === 0 ) return [];

    let i = 0;

    for(let j = 1; j < nums.length; j++){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i+1
}

let arr = [1, 1, 2, 3, 3, 4, 5, 5];
let newLength = removeDup(arr);
console.log(arr.slice(0, newLength));



function removeDuplicates(nums){
    if(nums.length === 0) return [];

    let i = 0;

    for(let j = 1; j < nums.length; j++){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1

}


let arrs = [1, 1, 2, 3, 3, 4, 5, 5];
let nLengths = removeDuplicates(arrs);
console.log(arrs.slice(0, nLengths));

