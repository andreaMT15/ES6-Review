let myName = "Andrea";

console.log(myName);

myName = "Adrain";
console.log(myName);

const printMyName = (name, age) => {
  console.log("Name:", name, "Age:", age);
};

printMyName("Andrea", 31);

const multiply = number => number * 2;

console.log(multiply(2));

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);

const person = {
  name: "Adrian"
};

const newPerson = {
  ...person,
  age: 42
};

console.log(newPerson);

const filter = (...args) => {
  return args.filter(el => el === 1);
};
console.log(filter(1, 2, 3));

[num1, num2] = numbers;
console.log(num1, num2);
