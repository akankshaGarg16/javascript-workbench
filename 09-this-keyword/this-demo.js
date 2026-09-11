// // 1. Basic this inside object method

// const user = {
//     name: "Akanksha",

//     greet: function () {
//         console.log(this.name);
//     }
// };

// user.greet();

// // Output: Akanksha

// // 2. this with method reference

// const user = {
//     name: "Akanksha",

//     greet: function () {
//         console.log(this.name);
//     }
// };

// const fn = user.greet;

// fn();

// // output: undefined
// // as its called normally without an Object(like we called greet with user object), so this is undefined
// // Closure -> "I remember variables from my surrounding lexical scope."
// // this -> "Who is calling me?"


// // 3. Arrow function as object method

// const user = {
//     name: "Akanksha",

//     greet: () => {
//         console.log(this.name);
//     }
// };

// user.greet();

// // output: undefined
// // this here will be global object and globalobj.name will be undefined

// // 4. Regular function vs arrow function

// const user = {
//     name: "Akanksha",

//     regular: function () {
//         console.log(this.name);
//     },

//     arrow: () => {
//         console.log(this.name);
//     }
// };

// user.regular();
// user.arrow();

// // output:  Akanksha undefined

// // 5. Nested regular function

// const user = {
//     name: "Akanksha",

//     greet: function () {

//         function inner() {
//             console.log(this.name);
//         }

//         inner();
//     }
// };

// user.greet();

// // Output: undefined
// // as inner is called like a regular function without object. (object.methodName)

// ----------------------------------------------------------------------------------------

// // 6. Nested arrow function

// const user = {
//     name: "Akanksha",

//     greet: function () {

//         const inner = () => {
//             console.log(this.name);
//         };

//         inner();
//     }
// };

// user.greet();

// // output: Akanksha (as this here is user object)
// ----------------------------------------------------------------------------------

// // 7. Regular function inside regular method

// const user = {
//     name: "Akanksha",
//     greet: function () {
//         function inner() {
//             console.log(this);
//         }
//         inner();
//     }
// };
// user.greet();

// // output: globalObject (window in browsers)
// // inner is a regular function called without an object, In non-strict mode => this substitution
// // "But inner() is inside greet(), and greet() has this = user. Shouldn't inner() inherit it?" : No.
// // A regular function does not inherit this from its outer function. Each regular function gets its this based on how that function itself is called.

// ----------------------------------------------------------------------------------

// // 8. Arrow inside regular method

// const user = {
//     name: "Akanksha",

//     greet: function () {

//         const inner = () => {
//             console.log(this);
//         };

//         inner();
//     }
// };

// user.greet();

// // output:  { name: 'Akanksha', greet: [Function: greet] } i.e. user obj itself

// ------------------------------------------------------------------------------------

// // 9. Arrow function nested inside arrow function

// const user = {
//     name: "Akanksha",
//     greet: () => {
//         const inner = () => {
//             console.log(this.name);   // "" in browser, undefined in node 
//             console.log(this);        //this substitution happens in browser so window, {} in node
//         };
//         inner();
//     }
// };
// user.greet();

// // output: "" , window
// this for greet is globalObj(window in browser)
// A regular function does not inherit this from its outer function. Each regular function gets its this based on how that function itself is called.
// but arrow functions do inherit so greet's this = window so inner is also window

// ---------------------------------------------------------------------------------------


// // 10. this with call()

const user1 = {
    name: "Akanksha"
};

const user2 = {
    name: "Amit"
};

function greet() {
    console.log(this.name);
}

greet.call(user1);
greet.call(user2);

// output: Akanksha Amit

// ---------------------------------------------------------------------------------------

// // 11. call() with arguments

// const user = {
//     name: "Akanksha"
// };

// function greet(age) {
//     console.log(this.name);
//     console.log(age);
// }

// greet.call(user, 25);


// // 12. apply()

// const user = {
//     name: "Akanksha"
// };

// function greet(age, city) {
//     console.log(this.name);
//     console.log(age);
//     console.log(city);
// }

// greet.apply(user, [25, "Lucknow"]);


// // 13. bind()

// const user = {
//     name: "Akanksha"
// };

// function greet() {
//     console.log(this.name);
// }

// const fn = greet.bind(user);

// fn();


// // 14. bind() called again

// const user1 = {
//     name: "Akanksha"
// };

// const user2 = {
//     name: "Rahul"
// };

// function greet() {
//     console.log(this.name);
// }

// const fn = greet.bind(user1);

// const fn2 = fn.bind(user2);

// fn2();


// // 15. call() on bound function

// const user1 = {
//     name: "Akanksha"
// };

// const user2 = {
//     name: "Rahul"
// };

// function greet() {
//     console.log(this.name);
// }

// const fn = greet.bind(user1);

// fn.call(user2);


// // 16. Arrow function with call()

// const user = {
//     name: "Akanksha"
// };

// const greet = () => {
//     console.log(this.name);
// };

// greet.call(user);


// // 17. Arrow function with bind()

// const user = {
//     name: "Akanksha"
// };

// const greet = () => {
//     console.log(this.name);
// };

// const fn = greet.bind(user);

// fn();


// // 18. Object method assigned to another object

// const user1 = {
//     name: "Akanksha",

//     greet: function () {
//         console.log(this.name);
//     }
// };

// const user2 = {
//     name: "Rahul"
// };

// user2.greet = user1.greet;

// user2.greet();


// // 19. Same function, different objects

// function greet() {
//     console.log(this.name);
// }

// const user1 = {
//     name: "Akanksha",
//     greet
// };

// const user2 = {
//     name: "Rahul",
//     greet
// };

// user1.greet();
// user2.greet();


// // 20. this with object property function

// const user = {
//     name: "Akanksha"
// };

// user.greet = function () {
//     console.log(this.name);
// };

// user.greet();


// // 21. this with setTimeout

// const user = {
//     name: "Akanksha",

//     greet: function () {
//         setTimeout(function () {
//             console.log(this.name);
//         }, 0);
//     }
// };

// user.greet();


// // 22. this with setTimeout and arrow

// const user = {
//     name: "Akanksha",

//     greet: function () {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 0);
//     }
// };

// user.greet();


// // 23. this passed as callback

// const user = {
//     name: "Akanksha",

//     greet: function () {
//         [1].forEach(function () {
//             console.log(this.name);
//         });
//     }
// };

// user.greet();


// // 24. forEach with arrow callback

// const user = {
//     name: "Akanksha",

//     greet: function () {
//         [1].forEach(() => {
//             console.log(this.name);
//         });
//     }
// };

// user.greet();


// // 25. forEach with thisArg

// const user = {
//     name: "Akanksha",

//     greet: function () {
//         [1].forEach(function () {
//             console.log(this.name);
//         }, this);
//     }
// };

// user.greet();


// // 26. Constructor function

// function User(name) {
//     this.name = name;

//     console.log(this.name);
// }

// const user = new User("Akanksha");


// // 27. Constructor returning object

// function User(name) {
//     this.name = name;

//     return {
//         name: "Rahul"
//     };
// }

// const user = new User("Akanksha");

// console.log(user.name);


// // 28. Constructor returning primitive

// function User(name) {
//     this.name = name;

//     return "Rahul";
// }

// const user = new User("Akanksha");

// console.log(user.name);


// // 29. Constructor with method

// function User(name) {
//     this.name = name;

//     this.greet = function () {
//         console.log(this.name);
//     };
// }

// const user1 = new User("Akanksha");
// const user2 = new User("Rahul");

// user1.greet();
// user2.greet();


// // 30. Constructor method reference

// function User(name) {
//     this.name = name;

//     this.greet = function () {
//         console.log(this.name);
//     };
// }

// const user = new User("Akanksha");

// const fn = user.greet;

// fn();


// // 31. Constructor + arrow function

// function User(name) {
//     this.name = name;

//     this.greet = () => {
//         console.log(this.name);
//     };
// }

// const user = new User("Akanksha");

// const fn = user.greet;

// fn();


// // 32. Class method

// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(this.name);
//     }
// }

// const user = new User("Akanksha");

// user.greet();


// // 33. Class method reference

// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(this.name);
//     }
// }

// const user = new User("Akanksha");

// const fn = user.greet;

// fn();


// // 34. Class method with call()

// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(this.name);
//     }
// }

// const user1 = new User("Akanksha");
// const user2 = new User("Rahul");

// user1.greet.call(user2);


// // 35. Class arrow property

// class User {

//     name = "Akanksha";

//     greet = () => {
//         console.log(this.name);
//     };
// }

// const user = new User();

// const fn = user.greet;

// fn();


// // 36. this in getter

// const user = {

//     name: "Akanksha",

//     get username() {
//         return this.name;
//     }
// };

// console.log(user.username);


// // 37. this in setter

// const user = {

//     name: "Akanksha",

//     set username(value) {
//         this.name = value;
//     }
// };

// user.username = "Rahul";

// console.log(user.name);


// // 38. this with computed method

// const method = "greet";

// const user = {

//     name: "Akanksha",

//     [method]() {
//         console.log(this.name);
//     }
// };

// user.greet();


// // 39. Destructuring method

// const user = {

//     name: "Akanksha",

//     greet() {
//         console.log(this.name);
//     }
// };

// const { greet } = user;

// greet();


// // 40. Nested object method

// const company = {

//     name: "Google",

//     employee: {

//         name: "Akanksha",

//         greet() {
//             console.log(this.name);
//         }
//     }
// };

// company.employee.greet();


// // 41. Nested object method reference

// const company = {

//     name: "Google",

//     employee: {

//         name: "Akanksha",

//         greet() {
//             console.log(this.name);
//         }
//     }
// };

// const fn = company.employee.greet;

// fn();


// // 42. this depends on call site

// const user = {

//     name: "Akanksha",

//     greet() {
//         console.log(this.name);
//     }
// };

// const obj = {
//     name: "Rahul",
//     greet: user.greet
// };

// obj.greet();


// // 43. Multiple levels

// const obj1 = {

//     name: "One",

//     obj2: {

//         name: "Two",

//         greet() {
//             console.log(this.name);
//         }
//     }
// };

// obj1.obj2.greet();


// // 44. Method extracted from nested object

// const obj1 = {

//     name: "One",

//     obj2: {

//         name: "Two",

//         greet() {
//             console.log(this.name);
//         }
//     }
// };

// const fn = obj1.obj2.greet;

// fn();


// // 45. this inside callback

// const user = {

//     name: "Akanksha",

//     greet() {

//         const callback = function () {
//             console.log(this.name);
//         };

//         callback();
//     }
// };

// user.greet();


// // 46. this inside arrow callback

// const user = {

//     name: "Akanksha",

//     greet() {

//         const callback = () => {
//             console.log(this.name);
//         };

//         callback();
//     }
// };

// user.greet();


// // 47. Explicit this with call inside method

// const user1 = {
//     name: "Akanksha"
// };

// const user2 = {

//     name: "Rahul",

//     greet() {
//         console.log(this.name);
//         greet.call(user1);
//     }
// };

// function greet() {
//     console.log(this.name);
// }

// user2.greet();


// // 48. this with IIFE

// const user = {

//     name: "Akanksha",

//     greet() {

//         (function () {
//             console.log(this.name);
//         })();

//     }
// };

// user.greet();


// // 49. this with arrow IIFE

// const user = {

//     name: "Akanksha",

//     greet() {

//         (() => {
//             console.log(this.name);
//         })();

//     }
// };

// user.greet();


// // 50. this with immediately invoked regular function

// const user = {

//     name: "Akanksha",

//     greet: function () {

//         console.log(this.name);

//         (function () {
//             console.log(this.name);
//         })();

//     }
// };

// user.greet();


// // 51. this with immediately invoked arrow function

// const user = {

//     name: "Akanksha",

//     greet: function () {

//         console.log(this.name);

//         (() => {
//             console.log(this.name);
//         })();

//     }
// };

// user.greet();


// // 52. call + nested arrow

// const user1 = {
//     name: "Akanksha"
// };

// const user2 = {
//     name: "Rahul"
// };

// function greet() {

//     const inner = () => {
//         console.log(this.name);
//     };

//     inner();
// }

// greet.call(user1);
// greet.call(user2);


// // 53. call + nested regular function

// const user1 = {
//     name: "Akanksha"
// };

// function greet() {

//     function inner() {
//         console.log(this.name);
//     }

//     inner();
// }

// greet.call(user1);


// // 54. bind + arrow inside function

// const user = {
//     name: "Akanksha"
// };

// function greet() {

//     const inner = () => {
//         console.log(this.name);
//     };

//     inner();
// }

// const fn = greet.bind(user);

// fn();


// // 55. bind + nested regular function

// const user = {
//     name: "Akanksha"
// };

// function greet() {

//     function inner() {
//         console.log(this.name);
//     }

//     inner();
// }

// const fn = greet.bind(user);

// fn();


// // 56. this with object returned from function

// function createUser() {

//     return {
//         name: "Akanksha",

//         greet() {
//             console.log(this.name);
//         }
//     };
// }

// const user = createUser();

// user.greet();


// // 57. this after assigning object method

// const user = {

//     name: "Akanksha",

//     greet() {
//         console.log(this.name);
//     }
// };

// let obj = user;

// obj.greet();


// // 58. this after changing reference

// const user = {

//     name: "Akanksha",

//     greet() {
//         console.log(this.name);
//     }
// };

// const obj = {
//     name: "Rahul",
//     greet: user.greet
// };

// obj.greet();


// // 59. this with method called from another method

// const user = {

//     name: "Akanksha",

//     greet() {
//         this.sayName();
//     },

//     sayName() {
//         console.log(this.name);
//     }
// };

// user.greet();


// // 60. this with method called using extracted function

// const user = {

//     name: "Akanksha",

//     greet() {
//         this.sayName();
//     },

//     sayName() {
//         console.log(this.name);
//     }
// };

// const fn = user.greet;

// fn();


// // 61. this with arrow property inside object

// const user = {

//     name: "Akanksha",

//     greet: function () {

//         const fn = () => {
//             console.log(this.name);
//         };

//         return fn;
//     }
// };

// const fn = user.greet();

// fn();


// // 62. this with arrow returned from method

// const user = {

//     name: "Akanksha",

//     greet() {

//         return () => {
//             console.log(this.name);
//         };
//     }
// };

// const fn = user.greet();

// fn();


// // 63. Returned regular function

// const user = {

//     name: "Akanksha",

//     greet() {

//         return function () {
//             console.log(this.name);
//         };
//     }
// };

// const fn = user.greet();

// fn();


// // 64. call on returned arrow

// const user = {

//     name: "Akanksha",

//     greet() {

//         return () => {
//             console.log(this.name);
//         };
//     }
// };

// const fn = user.greet();

// fn.call({
//     name: "Rahul"
// });


// // 65. call on returned regular function

// const user = {

//     name: "Akanksha",

//     greet() {

//         return function () {
//             console.log(this.name);
//         };
//     }
// };

// const fn = user.greet();

// fn.call({
//     name: "Rahul"
// });


// // 66. this with chained method calls

// const user = {

//     name: "Akanksha",

//     greet() {
//         console.log(this.name);
//         return this;
//     },

//     sayHello() {
//         console.log(this.name);
//     }
// };

// user.greet().sayHello();


// // 67. this with method returning another object

// const user = {

//     name: "Akanksha",

//     getObject() {

//         return {
//             name: "Rahul",

//             greet() {
//                 console.log(this.name);
//             }
//         };
//     }
// };

// user.getObject().greet();


// // 68. this with class inheritance

// class Parent {

//     constructor() {
//         this.name = "Parent";
//     }

//     greet() {
//         console.log(this.name);
//     }
// }

// class Child extends Parent {

//     constructor() {
//         super();
//         this.name = "Child";
//     }
// }

// const child = new Child();

// child.greet();


// // 69. super and this

// class Parent {

//     greet() {
//         console.log(this.name);
//     }
// }

// class Child extends Parent {

//     constructor() {
//         super();
//         this.name = "Akanksha";
//     }

//     greet() {
//         super.greet();
//     }
// }

// const child = new Child();

// child.greet();


// // 70. Static method and this

// class User {

//     static name = "Akanksha";

//     static greet() {
//         console.log(this.name);
//     }
// }

// User.greet();


// // 71. Static method called through another class

// class Parent {

//     static name = "Parent";

//     static greet() {
//         console.log(this.name);
//     }
// }

// class Child extends Parent {}

// Child.greet();


// // 72. this in class constructor

// class User {

//     constructor(name) {
//         console.log(this);
//         this.name = name;
//     }
// }

// const user = new User("Akanksha");


// // 73. this with arrow function passed to setTimeout

// const user = {

//     name: "Akanksha",

//     greet() {

//         setTimeout(() => {
//             console.log(this.name);
//         }, 0);

//     }
// };

// user.greet();


// // 74. setTimeout with bound function

// const user = {

//     name: "Akanksha",

//     greet() {

//         setTimeout(function () {
//             console.log(this.name);
//         }.bind(this), 0);

//     }
// };

// user.greet();


// // 75. call + bind + object method

// const user1 = {
//     name: "Akanksha"
// };

// const user2 = {
//     name: "Rahul"
// };

// function greet() {
//     console.log(this.name);
// }

// const bound = greet.bind(user1);

// bound.call(user2);


// // 76. apply + bind

// const user1 = {
//     name: "Akanksha"
// };

// const user2 = {
//     name: "Rahul"
// };

// function greet() {
//     console.log(this.name);
// }

// const bound = greet.bind(user1);

// bound.apply(user2);


// // 77. bind with arguments and this

// const user = {
//     name: "Akanksha"
// };

// function greet(age, city) {
//     console.log(this.name);
//     console.log(age);
//     console.log(city);
// }

// const fn = greet.bind(user, 25);

// fn("Lucknow");


// // 78. this with constructor + bind

// function User(name) {
//     this.name = name;
// }

// const BoundUser = User.bind({
//     name: "Existing"
// });

// const user = new BoundUser("Akanksha");

// console.log(user.name);


// // 79. this inside object method passed to setTimeout

// const user = {

//     name: "Akanksha",

//     greet() {
//         setTimeout(this.sayName, 0);
//     },

//     sayName() {
//         console.log(this.name);
//     }
// };

// user.greet();


// // 80. this inside object method passed with bind

// const user = {

//     name: "Akanksha",

//     greet() {
//         setTimeout(this.sayName.bind(this), 0);
//     },

//     sayName() {
//         console.log(this.name);
//     }
// };

// user.greet();