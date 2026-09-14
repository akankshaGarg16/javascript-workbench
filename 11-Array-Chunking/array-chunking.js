function chunkArray(arr, n) {
    let a = [...arr];
    let finalArr = [];
    while (a.length != 0) {
        finalArr.push(a.splice(0, n));
    }
    return finalArr
}
console.log(chunkArray([1, 2, 3, 4], 2))
console.log(chunkArray([1, 2, 3, 4, 5], 2))
console.log(chunkArray([], 3))
console.log(chunkArray([1, 2, 3], 5))