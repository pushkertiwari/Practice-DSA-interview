let nums = [1,5,4,3,5,5,5,4];

function count(arr) {
    let map = new Map();
    for(let i = 0; i <arr.length; i++){
        if(map.has(arr[i])){
             map.set(arr[i], map.get(arr[i]) + 1);
        }else {
            map.set(arr[i], 1);
        }
    }
    let obj = {};
    map.forEach((val,key) => {
        if(val > 1) {
            obj[key] = val;
        }
    });
    return obj;
}
console.log(count(nums));
