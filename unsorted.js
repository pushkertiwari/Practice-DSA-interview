function findIndices(arr, k) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i] - k)) {
            return [i, map.get(arr[i] - k)];
        }
        // Store current value with its index
        map.set(arr[i], i);
    }

    return null; // No such indices found
}
