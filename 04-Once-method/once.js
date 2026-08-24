function greet(name) {
    console.log("this should be called once");
    return "Hi " + name;
}

console.log(greet('Akanksha'));
console.log(greet('Amit'));
console.log(greet('Anuj'));
console.log(greet('Anshika'));

function once(fn) {
    let called = false;
    let result;
    return function(...args){
        if(!called) {
            result = fn(...args);
            called = true;
        }
        return result;
    }
}

let greetOnce = once(greet);
console.log(greetOnce('Akanksha'));
console.log(greetOnce('Amit'));
console.log(greetOnce('Anuj'));

