let name = {
    firstName: "Akanksha",
    lastname: "Garg"
}

function printMyName(city, state, country) {
    console.log(`${this.firstName} ${this.lastname} from ${city}, ${state}, ${country}`)
}

// Using bind:
const theBind = printMyName.bind(name, 'Lucknow', 'UP');
theBind('India');

// ---------------------------myBind------------------------------

Function.prototype.myBind = function(...args) {
    let obj = this;
    let params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0],[...params,...args2])
    }
}

const theBind2 = printMyName.myBind(name, 'Lucknow', 'UP');
theBind2('India');