// Object type using any

let user: any = {
  name: "Ustin",
  age: 24,
};

user = "test"; // Now type of user is a string

// Array type

let listIs: Array<number> = [1, 2, 3, 4];

// Define object type

let user1: { name: string; age: number } = {
  name: "Ustin",
  age: 24,
};

// Addiitonal property

let user2: { name: string; age: number } = {
  name: "Ustin",
  age: 24,
  //nickName: 'webDev' //  Object literal may only specify known properties, and 'nickName' does not exist in type '{ name: string; age: number;
};

// Need to add a new type in object

let user3: { name: string; age: number; nickName: string } = {
  name: "Ustin",
  age: 24,
  nickName: "webDev", //  Object literal may only specify known properties, and 'nickName' does not exist in type '{ name: string; age: number;
};

// What if we have a new admin obj

let admin: { name: string; age: number; nickName: string } = {
  name: "Max",
  age: 20,
  nickName: "Mad",
};

// We can see that admin and user3 have the same types of properties
// We can use Type for obj structures
type Person = { name: string; age: number; nickName: string };

let user4: Person = {
  name: "Yuhan",
  age: 34,
  nickName: "YoyYuh",
};

let admin2: Person = {
  name: "Mary",
  age: 44,
  nickName: "MaryMerry",
};

// Obejct with methods

// SayHi is a function that returns a strign
let cat: { name: string; sayHi: () => string } = {
  name: "Barsk",
  sayHi: () => "Mew Mew",
};

console.log(cat.sayHi()); // Mew Mew
