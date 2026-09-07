function countNegatives(arr) {
  if (!Array.isArray(arr)) {
    return false;
  } else if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((acc, curr) => {
    if (typeof curr === "number" && Number.isFinite(curr)) {
      if (curr < 0) {
        acc++;
      }
    } else {
      return false;
    }
    return acc;
  }, 0);
}

console.log(countNegatives([-1, 0, 1]));
