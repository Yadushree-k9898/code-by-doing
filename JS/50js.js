function twoSumBrute(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i +1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    return []
}

function twoSumOptimised(nums, target){
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(nums[i], i)
    }
    return []
}


function maxSubArrayBrute(nums){
    let maxSum = -Infinity;
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = i; j < nums.length; j++){
            sum += nums[j];
            maxSum = Math.max(maxSum, sum)
        }
    }
    return maxSum
}

function maxSubArrayOptimised(nums){
    let maxSum = nums[0]
    let currentSum = nums[0]
    for(let i = 1; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}


function maxProfitBrute(prices){
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++){
        for(let j = i+1; j < prices.length; j++){
            maxProfit = Math.max(maxProfit, prices[j] - prices[i])
        }
    }
    return maxProfit
}

function maxProfitOptimised(prices){
    let minPrice = Infinity
    let maxProfit = 0;
    for(let price of prices){
        minPrice = Math.min(minPrice, price)
        maxProfit = Math.max(maxProfit, price - minPrice)
    }
    return maxProfit
}

function findDuplicate(nums){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]) return nums[i]
        }
    }
    return -1
}

function findDuplicateOPtimised(nums){
    let slow = nums[0]
    let fast = nums[0]

    do{
        slow = nums[slow]
        fast = nums[nums[fast]]
    }while(slow !== fast)

    slow = nums[0]
    while(slow !== fast){
        slow = nums[fast]
        fast = nums[fast]
    }
    return slow
}