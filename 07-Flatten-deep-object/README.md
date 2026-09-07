# Why used ```if (Object.prototype.hasOwnProperty.call(obj, key)) {...}```

```js
Object.prototype.greet = function() { return("Hi"); };
```
will add a greet method to our person object which will result in below output. 

```js
{
  person_name: 'Akanksha',
  person_address_city: 'Lucknow',
  person_address_country: 'India',
  person_address_greet: [Function (anonymous)],
  person_skills_frontend_primary: 'React',
  person_skills_frontend_secondary: 'Angular',
  person_skills_frontend_greet: [Function (anonymous)],
  person_skills_greet: [Function (anonymous)],
  person_greet: [Function (anonymous)]
}
```

# Why used ```Object.prototype.hasOwnProperty.call(obj, key)``` instead of ```obj.hasOwnProperty(key)``` 

It's because it is a safer, defensive programming practice in JavaScript.

If we use obj.hasOwnProperty(key), your code can break if the object has a custom property named hasOwnProperty, or if the object was created without a prototype. 

Here are two examples demonstrating why this matters.

## Scenario 1: Objects without a prototype

Objects created using Object.create(null) do not inherit from Object.prototype. They are completely blank, which means they do not have the hasOwnProperty method at all.

```js
// Create an object with no prototype
const safeObj = Object.create(null);
safeObj.name = "Alice";

// ❌ This throws a TypeError: safeObj.hasOwnProperty is not a function
console.log(safeObj.hasOwnProperty("name")); 

//  This works perfectly
console.log(Object.prototype.hasOwnProperty.call(safeObj, "name")); // true
```

## Scenario 2: Overwritten property names

If an object comes from an external source (like a user-submitted API payload) and contains a malicious or accidental property named hasOwnProperty, it overrides the native method.

```js
const maliciousObj = {
  hasOwnProperty: "not a function", // Overwriting the method
  isAdmin: true
};

// ❌ This throws a TypeError: maliciousObj.hasOwnProperty is not a function
console.log(maliciousObj.hasOwnProperty("isAdmin")); 

//  This works perfectly because it calls the original method from the prototype
console.log(Object.prototype.hasOwnProperty.call(maliciousObj, "isAdmin")); // true
```