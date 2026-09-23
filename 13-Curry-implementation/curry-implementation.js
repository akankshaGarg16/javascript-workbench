function curry(fn) {

    function curried(...args) {

        // If enough arguments are provided
        if (args.length >= fn.length) {
            return fn(...args);
        }

        // Otherwise collect more arguments
        return function (...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    }

    return curried;
}

function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));     // 6
console.log(curriedSum(1, 2)(3));     // 6
console.log(curriedSum(1)(2, 3));     // 6
console.log(curriedSum(1, 2, 3));     // 6

function greet() {
    return "Hey";
}
const curriedGreet = curry(greet);
console.log(curriedGreet());   
