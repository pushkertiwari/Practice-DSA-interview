
 let arr = [4, 5, 1, 3, 9];

 function selectionSort(nums){
    let n = nums.length;
    for(let i = 0; i<n-1; i++){
        let minIndex = i;
        for(let j = i+1; j<n; j++){
            if(nums[j] < nums[minIndex]){
                minIndex = j;
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return nums;
 }

 console.log(selectionSort(arr));

//  TC: O(n^2)
//  SC: O(1)   