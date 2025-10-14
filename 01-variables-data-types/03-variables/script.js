// Ways to declare a variable
// var, let, const

let firstName = 'Que';
let lastName = 'Code';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Conventions

// Only letters, numbers, underscores and dollar signs
// Can't start with a number

// Multi-Word Formatting

// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables

age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score++;
}

console.log(score);

const x = 110;

// const variables can't be directly reassigned

const arr = [1, 2, 3, 4];
arr.push(5);

console.log(arr);

const person = {
  name: 'Que'
};

person.name = 'Quinn';
person.email = 'Quinn@gmail.com';

console.log(person);

// Declare multiple values at once

let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a); //undefined