function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
         .catch(reject);
        //  can use below directly instead of separate .then and .catch for resolve and reject 
      // .then(resolve, reject);
    });
  });
}

const p1 = Promise.resolve(10);
const p2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("New Error"), 10),
);
const p3 = new Promise((resolve) => setTimeout(() => resolve(20), 2000));


promiseRace([p1, p3, p2])
  .then(console.log)
  .catch((error) => console.log("Error:", error));
