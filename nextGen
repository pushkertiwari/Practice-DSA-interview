// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

let prices = [10, 22, 5, 75, 65, 80]
// Output: 5

function makeProfit(nums) {
    let n = nums.length-1;
    let ans = 0;
    let buy = Number.MAX_SAFE_INTEGER;
    let buyIndx = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < buy) {
            buy = nums[i];
            buyIndx = i;
        }
    }
    if(n === buyIndx) return 0;
    let sell = 0;
    for(let i = buyIndx+1; i < nums.length; i++){
       if(nums[i] > sell) {
           sell = nums[i];
       }
    }
    
    return sell - buy;
}

console.log(makeProfit(prices))
