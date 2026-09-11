// Function to debounce
function search(value) {
  console.log("API CALL:", value);
  document.getElementById("output").textContent = "API Call made for: " + value;
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// search function debounced version
const debouncedSearch = debounce(search, 1000);

// Input Event
const input = document.getElementById("searchInput");

input.addEventListener("input", (event) => {
  console.log("User typed:", event.target.value);
  debouncedSearch(event.target.value);
});
