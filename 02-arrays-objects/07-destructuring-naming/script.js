const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);

// Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John'
    }
};

//const id = todo.id;

const {id} = todo;
const {id: todoId} = todo;
const {title} = todo;
const {user} = todo;
const {user: {name}} = todo;

console.log(todoId);


// Destructur Arrays
const numbers = [23, 67, 33, 49, 52];

//const [first, second] = numbers;
const [first, second, ...rest] = numbers;

console.log(first, second, rest);
