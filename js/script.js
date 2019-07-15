// Zadanie 1

const a = 'Hello';
const b = 'World';
const c = `${a} ${b}`;
console.log(c);

// Zadanie 2

const multiply = (x,y = 1) => console.log(x * y);
multiply(3,2);

// Zadanie 3

const average = (...args) => {
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log (sum / args.length);
};

average(2,4,6,8);

// Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// Zadanie 5

const name = [1, 4, 'Iwona', false, 'Nowak'];
const [first, second, firstname, fourth, lastname] = name;

console.log(firstname,lastname);

