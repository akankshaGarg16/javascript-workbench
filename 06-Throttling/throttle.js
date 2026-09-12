let eventCount = 0;
let throttleCount = 0;

function handleMouseMove(event) {
  throttleCount++;
  document.getElementById("throttleCount").textContent = throttleCount;
  console.log("Throttled function executed:", throttleCount);
}

function throttle(fn, delay) {
  let waiting = false;
  return function (...args) {
    if (waiting) return;
    fn.apply(this, args);
    waiting = true;
    setTimeout(() => (waiting = false), delay);
  };
}

// throttled function
const throttledMouseMove = throttle(handleMouseMove, 1000);

// mouse Event
const box = document.getElementById("box");

box.addEventListener("mousemove", (event) => {
  eventCount++;
  document.getElementById("eventCount").textContent = eventCount;
  throttledMouseMove(event);
});
