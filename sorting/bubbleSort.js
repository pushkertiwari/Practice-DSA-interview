// Time Complexity: O(n) (Best Case) when array is already sorted (optimized with isSwapped).

// Worst Case: O(n2) When array is in reverse order.

// Space Complexity: O(1) In-place sorting, no extra space used.
let arr = [4,5,1,3,9];

function bubbleSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n-1; i++) {
      let isSwapped = false;
      for(let j = 0; j < n-1-i; j++) {
        if(arr[j]>arr[j+1]) {
          let temp=arr[j]
          arr[j]=arr[j+1];
          arr[j+1]=temp;
          isSwapped=true;
        }
      }
      if(!isSwapped)
        break;
    }
    return arr;
}

console.log(bubbleSort(arr));