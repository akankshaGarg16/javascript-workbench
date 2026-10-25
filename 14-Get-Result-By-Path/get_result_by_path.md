# Get Result By Path — JavaScript

## Problem Statement

You are given a nested JavaScript object and a string that represents a path to a deeply nested value within that object.

The path is dot-separated and may include array indices written in square brackets (for example, `"data.results[0].status[1].type"`).

Write a function `getResultByPath(path, response)` that extracts and returns the value at the given path within the object.

## Input

- **`path`**: A string representing the nested path to the target value (dot notation with optional array indices, e.g., `"data.results.status"` or `"data.results[1].status[0].type"`).
- **`obj` / `response`**: A JavaScript object with potentially nested fields and arrays.

## Output

The function should return the value located at the given path in the object. If any part of the path is invalid (i.e., the key or index doesn't exist at any level), the function should return `undefined`.

## Constraints & Edge Cases

- The path may include both dot-separated keys and array indices in square brackets.
- Assume the object structure is valid, but some paths may still return `undefined`.
- Array indices will always be non-negative integers.
- The object may contain a mix of objects and arrays.
- If traversal reaches `null`, return `null` (as shown in Example 4).
- Empty strings, `0`, and `false` are valid values and should not be treated as missing.

## Solution

```javascript
function getResultByPath(path, response) {
  const keys = path.match(/[^.[\\]]+/g) || [];
  let current = response;

  for (const key of keys) {
    if (current === null || current === undefined) {
      return current;
    }

    current = current[key];
  }

  return current;
}

module.exports = getResultByPath;
```

### How it works

1. `path.match(/[^.[\\]]+/g)` extracts each property name and array index from the path.
2. It traverses the object one key at a time.
3. If the current value is `null` or `undefined`, it returns that value without throwing an error.
4. If a property or index is missing, JavaScript returns `undefined`, which the function returns.

## Examples

### Example 1 — Dot notation

```javascript
const path = "data.results.status";

const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    },
  },
};

console.log(getResultByPath(path, obj));
// "completed"
```

### Example 2 — Nested objects and array indices

```javascript
const path = "data.results[1].status[0].type";

const obj = {
  data: {
    results: [
      {
        status: "completed",
        error: "",
      },
      {
        status: [
          { type: "done" },
          { type: "start" },
        ],
        error: "",
      },
    ],
  },
};

console.log(getResultByPath(path, obj));
// "done"
```

### Example 3 — Invalid path

```javascript
const path = "user.address.city";

const obj = {
  user: {
    profile: {
      name: "Alice",
    },
  },
};

console.log(getResultByPath(path, obj));
// undefined
```

### Example 4 — Null value

```javascript
const path = "config.settings.mode";

const obj = {
  config: {
    settings: null,
  },
};

console.log(getResultByPath(path, obj));
// null
```

### Example 5 — Array index

```javascript
const path = "items[1]";

const obj = {
  items: [
    { id: 1, name: "Pen" },
    { id: 2, name: "Pencil" },
  ],
};

console.log(getResultByPath(path, obj));
// { id: 2, name: "Pencil" }
```

## Additional Test Cases

```javascript
console.log(getResultByPath("data.results.error", {
  data: { results: { status: "completed", error: "" } },
}));
// ""

console.log(getResultByPath("data.unknown.status", {
  data: { results: { status: "completed" } },
}));
// undefined
```
