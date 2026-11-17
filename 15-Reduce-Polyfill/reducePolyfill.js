Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    // If initialValue is not provided,
    // use the first array element as accumulator.
    if (arguments.length < 2) {
        if (this.length === 0) {
            throw new TypeError("Reduce of empty array with no initial value");
        }

        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        // Skip empty slots in sparse arrays.
        if (i in this) {
            accumulator = callback(
                accumulator,    //acc
                this[i],        //curr
                i,              //currIndex
                this            //original array
            );
        }
    }

    // console.log(callback.length); // return 2 i.e the no of arguments passed to callback func which is 2, a & b
    return accumulator;
};

console.log([1, 2].myReduce((acc, curr) => acc + curr)); //3
console.log([1, 2].myReduce((acc, curr) => acc + curr, undefined)); //NaN
console.log([1, 2].reduce((acc, curr) => acc + curr, undefined));   //NaN
console.log([].reduce((acc, curr) => acc + curr, 0)); //0
console.log([].myReduce((acc, curr) => acc + curr, 0)); //0
console.log([].myReduce((acc, curr) => acc + curr)); //TypeError: Reduce of empty array with no initial value
console.log([].reduce((acc, curr) => acc + curr)); //TypeError: Reduce of empty array with no initial value


