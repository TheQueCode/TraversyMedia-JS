let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main Street',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['computer games', 'music', 'photography']
};

x = person.name;
x = person['age'];

x = person.address.state;
x = person.hobbies[1];

person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet();

x = person;

console.log(x);