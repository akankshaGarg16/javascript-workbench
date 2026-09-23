# Implement `curry()`

## Problem Statement

Create a curry function that accepts a function `fn` and returns a
curried version of it.

The curried function should accept arguments one at a time, and once all
arguments are received (based on the original function's arity), the
original function should be executed.

## Example Inputs & Outputs

``` js
function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);

curriedSum(1)(2)(3);   // → 6
curriedSum(1, 2)(3);   // → 6
curriedSum(1)(2, 3);   // → 6
curriedSum(1, 2, 3);   // → 6
```

## Constraints & Edge Cases

-   The input `fn` can have any number of parameters.
-   The curried function must handle partial application (passing fewer
    args in one call).
-   It should support chaining until all arguments are passed.
-   If `fn` takes 0 arguments, it should return the result of calling
    `fn()`.
