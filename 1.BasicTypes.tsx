// Data types

// Boolean Type
let isCompleated: boolean = false;
// isCompleated = 42; //Type 42 not aasigned to type boolean
// isCompleated = '42' // //Type '42' not aasigned to type boolean

// isCompleated = true;

// ---------------
// Number Type

const decimal: number = 6;
const integer: number = 7.1;
const hex: number = 0xff00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// ---------------
// String Type
const nameIs: string = "Ustin";

// String type for template literals:
const sentance: string = `Hello my name is ${nameIs}`;

// Null & Undefined types
// JS

typeof null; // 'object'
typeof undefined; // 'undefined'

// Typescript types

const u: undefined = undefined;
const n: null = null;

// Void Type
// the result with no result, where no return
// write after ()
const greetUser = (): void => {
  alert("Hello, nice to meet you!");
};

// Array Type
let list: number[] = [1, 2, 3, 4];

let list2: Array<number> = [1, 2, 3]; // Generic type

// Tuple type
let x: [string, number];
x = ["Hello", 10];

let y: [string, number] = ["goodbye", 42];


// Any type 
let z: [any,any] = ['goodbye', 42]
let v: Array<any> = [10, 'hello']

// Any type for string
let notSure: any = false; 

// Issue case where no errors: 
notSure = true; 
notSure = 42; 
notSure = 'hello';

// Enum type 
enum Diresctors {
    Up1, 
    Down1,
    Left1,
    Right1
}


// Index // it's like an array and an object 
Diresctors.Up1; // 0 
Diresctors.Down1; // 1
Diresctors.Left1; // 2
Diresctors.Right1; // 3

// changign index
enum Diresctors2 {
    Up = 2,
    Down = 4,
    Left = 6,
    Right
}

Diresctors2.Up; // 2
Diresctors2.Down; // 4
Diresctors2.Left; // 6
// The next one with no value will depend on the previous
Diresctors2.Right; // 7

// Never Type 
// Function return Error

const msg = 'hello'
const error = (msg: string): never => {
    throw new Error(msg)
}

// Function infinite loop 
const inifniteLoop = (): never => {
    while(true){
        
    }
}

// Object Types

const create = (o: object | null): void=>{}

//create(1); // Error 
//create('42'); // Error 
create({obj: 1}); // Error 

// Multiple types for one value

let id: number | string; 

id = 10; 
id = '42'
//id = true; // Error 

// Custom type 
type Name = string; // Custom type creation

let idx: Name;  // Apply custom type 

idx= '42' 
//idx = 10; // Error 