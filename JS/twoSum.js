function twoSum(nums, target){
    const map = {};
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if(map[diff] !== undefined){
            return [map[diff], i]
        }
        map[nums[i]] = i
    }
}


console.log(twoSum([2, 7, 9, 11], 11));



function twoSum(nums, target){
    const map = {};
    for(let i = 0; i <nums.length; i++){
        const diff = target - nums[i];
        if(map[diff] !== undefined){
            return [map[diff], i]
        }
        map[nums[i]] = i
    }
}

console.log(twoSum([2, 7, 9, 11], 11));



function twoSum(nums, target){
    const map = {};
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if(map[diff] !== undefined){
            return [map[diff] , i]
        }
        map[nums[i]] = i
    }
}

console.log(twoSum([2, 7, 9, 11], 11));



function twoSum(nums, target){
    const map = {};
    for(let i =0; i < nums.length; i++){
        const diff = target - nums[i];
        if(map[diff] !== undefined){
            return [map[diff], i]
        }
        map[nums[i]] = i
    }
}

console.log(twoSum([2, 7, 9, 11], 11));



function twoSum(nums, target){
    const map = {};
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if(map[diff] !== undefined){
            return [map[diff], i]
        }
        map[nums[i]] = i
    }
}

console.log(twoSum([2, 7, 9, 11], 11));