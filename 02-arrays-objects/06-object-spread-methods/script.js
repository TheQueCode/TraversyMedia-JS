let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.2398,
            lng: -71.3484
        }
    }
};

x = person.address.coords.lng;

const obj1 = {
    a: 1,
    b: 2
};

const obj2 = {
    c: 3,
    d: 4
};

const obj3 = {...obj1, ...obj2};
const obj4 = Object.assign({}, obj1, obj2);

x = obj4

const todos = [
    {
        id: 1, 
        name: 'Buy Milk',
    },
    {
        id: 2, 
        name: 'Pick up kids',
    },
    {
        id: 3, 
        name: 'Take out trash',
    },
]

x = todos[0].name;
x = Object.keys(todo);

x = Object.keys(todo).length; //gives keys

x = Object.values(todo); //gives values

x = Object.entries(todo);

x = todo.hasOwnProperty('name'); //true

console.log(x);