const person = {
  name: "Akanksha",
  address: {
    city: "Lucknow",
    country: "India",
  },
  skills: {
    frontend: {
      primary: "React",
      secondary: "Angular",
    },
  },
  roles: ["admin", "editor"]
};
let finalObj = {};

Object.prototype.greet = function() { return("Hi"); };

function flatten(obj, parent) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        //  typeof array is also an object in js, so wrote 2nd condition
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        flatten(obj[key], parent + "_" + key);
      } else {
        finalObj[parent + "_" + key] = obj[key];
      }
    }
  }
  return finalObj;
}

console.log(flatten(person, "person"));
