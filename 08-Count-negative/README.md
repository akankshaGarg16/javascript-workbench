```js
Input: arr = []
Output: 0
countNegatives([-1, 0, 1]) // 1
countNegatives([-2, -5, -7]) // 3
countNegatives([0, 2,3]) // 0
countNegatives([]) // 0
countNegatives (null)       // false
countNegatives(undefined)   // false
countNegatives(42)          // false
countNegatives("8")         // false
countNegatives({})          // false
countNegatives(() => {})    // false
```

# Constraints

- If input is not an array, return false.
- If the array contains any non-number values or non-finite numbers (NaN, Infinity, Infinity), return false.
- An empty array is valid and should return 0.