// Functions

const createPassword = (name: string, age: number) => {
  `${name}${age}`;
};


// -----------------

// Multiple arg types
// Combination types

const createPassword2 = (name: string, age: number | string) => {
  `${name}${age}`;
};

createPassword2("Ustin", 24);
createPassword2("Ustin", "24");

// Default args
const createPassword3 = (name: string = "Max", age: number | string = 24) => {
  `${name}${age}`;
};

createPassword3(); // Max20
createPassword3(null); // Error


// -----------------
// Optional and Required args

const createPassword4 = (name: string, age: number): string => `${name}${age}`;

// Call function without one arg
//createPassword4("Jack"); // An argument age was not provided

// Function with an optional arg 'age'

const createPassword5 = (name: string, age?: number) => `${name}${age}`;


// -----------------

// REST
const createSkills = (name, ...skills) => {
  `${name}, my skills are ${skills.join()}`;
};

// REST type
const createSkills2 = (name, ...skills: Array<string>) => {
  `${name}, my skills are ${skills.join()}`;
};

// Call a function with REST args
createSkills2("Jack", "JS", "ES6", "React");
// "Jack, my skills are JS, ES6, React"


// -----------------
// Returned types: 


// Returned type is strig:
const createPasswordFunction = (name: string, age: number): string => `${name}${age}`


// Returned type is an number:
const sum = (fisrt: number, second: number): number => fisrt + second; 

// Retunred type is an object:

const createObj = (): object => ({})


