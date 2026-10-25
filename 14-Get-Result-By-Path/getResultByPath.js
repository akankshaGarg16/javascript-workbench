// function getResultByPath(path, obj) {
//   return path.split(".").reduce((acc, curr) => {
//     return acc == null ? undefined : acc[curr];
//   }, obj);
// }

function getResultByPath(path, obj) {
  const keys = path.match(/[^.[\]]+/g) || [];
  let current = obj;

  for (const key of keys) {
    if (current === null || current === undefined) {
      return current;
    }

    current = current[key];
  }

  return current;
}

// Eg1
// const path = "data.results.status";
// const obj = {
//   data: {
//     results:
//     {
//       status: "completed",
//       error: "",
//     }
//   },
// }

// Eg2
// const path = "data.results[1].status[0].type";

// const obj = {
//   data: {
//     results: [
//       {
//         status: "completed",
//         error: "",
//       },
//       {
//         status: [
//           { type: "done" },
//           { type: "start" }
//         ],
//         error: "",
//       },
//     ],
//   },
// };

// Eg3
// const path = "user.address.city";

// const obj = {
//   user: {
//     profile: {
//       name: "Alice",
//     },
//   },
// };

// Eg4
// const path = "config.settings.mode";

// const obj = {
//   config: {
//     settings: null,
//   },
// };


// Eg5
const path = "items[1]";

const obj = {
  items: [
    { id: 1, name: "Pen" },
    { id: 2, name: "Pencil" },
  ],
};

console.log(getResultByPath(path, obj));


// console.log(getResultByPath("data.results.error", obj)); // ""
// console.log(getResultByPath("data.results.missing", obj)); // undefined
// console.log(getResultByPath("data.unknown.status", obj)); // undefined
