const library = [
  {
    title: 'Being Me',
    author: 'John Doe',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'Being You',
    author: 'Jane Doe',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'Being Us',
    author: 'Que Doe',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
];


library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title: firstBook} = library[0];

console.log(firstBook);
console.log(library);

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);