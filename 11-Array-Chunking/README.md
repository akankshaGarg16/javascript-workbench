# Write a function that splits an array into chunks (subarrays) of a given size n. If the array cannot be split evenly, the final chunk should contain the remaining elements.

- chunkArray([1, 2, 3, 4], 2)               // [[1,2], [3, 4]]
- chunkArray([1, 2, 3, 4, 5], 2)            // [[1, 2], [3, 4], [5]]
- chunkArray([], 3)                         // []
- chunkArray([1, 2, 3], 5)                  // [[1, 2, 3]]