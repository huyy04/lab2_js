const firstName = 'vu';
const lastName = 'huy';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring object properties

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'huy',
  },
};

const {
  id: todoId, 
  title,
  user: { name }, 
} = todo;

console.log(todoId);


const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);