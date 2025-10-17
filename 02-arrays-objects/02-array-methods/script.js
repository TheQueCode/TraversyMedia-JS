let x;

const arr = [13, 1110, 888, 110, 111];

//arr.push(100);

//arr.pop();

//arr.unshift(99);

//arr.shift();

//arr.reverse();

x = arr.includes(13); //true

x = arr.indexOf(123120); //-1

x = arr.slice(1, 4);

//x = arr.splice(1, 4);

//x = arr.splice(0, 1)


x = arr.splice(1, 4).reverse().toString().charAt(0);


console.log(x);