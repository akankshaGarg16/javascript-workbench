function addStuff(a, b){
    console.log("Hi, i'm learning addition");
    return a+b;
}

function memoize(fn){
    let cache = {};
    return function(...args) {
        if(cache[args.join("-")]) {
            return cache[args.join("-")];
        }
        let result = fn(...args)
        cache[args.join("-")] = result;
        return result;
    }
}

console.log(addStuff(2,3));
// console.log(addStuff(2,3));
// console.log(addStuff(2,3));
// console.log(addStuff(2,3));
// console.log(addStuff(2,3));

let memoizedAddStuff = memoize(addStuff);
console.log(memoizedAddStuff(2,3));
console.log(memoizedAddStuff(2,3));
console.log(memoizedAddStuff(2,3));
console.log(memoizedAddStuff(2,3));