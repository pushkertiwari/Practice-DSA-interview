
let x = [10, 20] 
function secondLargest(items) {
    if (items.length < 2) return 'less array values';
    let largest = -Infinity; secondLargest = -Infinity;
    for (let i = 0; i < items.length; i++){
        if (items[i] > largest) {
            secondLargest = largest;
            largest = items[i];
        } else if (items[i] < largest && items[i] > secondLargest) {
            secondLargest = items[i];
       }
    }
    return secondLargest === -Infinity ? "No second largest found" : secondLargest;
}
console.log(secondLargest(x));
