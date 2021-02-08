// Example of call static property

// User.secret;

// Call static property in calss method

class User {
  static secret = 123456;
  constructor(public name: string, public age: number) {}
  getPass(): string {
    return `${this.name} ${User.secret}`;
  }
}

const userUstin = new User("Ustin", 24);
console.log(userUstin.getPass()); // Ustin 123456

// Compiled code will be

// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     getPass(){
//         return this.name + User.secret;
//     }
// }

// User.secret = 12345;

// Inheriance it's just like ES6

class User2 {
  private nickName: string = "webDev";
  static secret = 123456;
  constructor(public name: string, public age: number) {}
  getPass(): string {
    return `${this.name} ${User.secret}`;
  }
}

// Inhertyance exmaple:

class Ustin extends User2 {
  name: string = "Ustin";
  constructor(age: number) {
    // callig a super on a parent class
    super(name, age);
  }
  // its own method
  getPass(): string {
    return `${this.age}${this.name}${User.secret}`;
  }
}
const max = new User2("Max", 30);
const ustin = new Ustin(24);
console.log(ustin.getPass()); // 24Ustin123456

// Abstarct class

abstract class User3 {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(this.name);
  }
  abstract getPass(): string;
}

// const mac3 = new User3('Max', 30) // Cannot create an instance of an abstract class;

//Create class using Abstarction:
//Non-abstract class 'Yuhen' does not implement inherited abstract member 'getPAss' from class 'User3'

// class Yuhen extends User3 {
//   name: string = "Yuhen";
//   constructor(age: number) {
//     super(name, age);
//   }
// }

// Realisation of getPass method

class Yuhen2 extends User3 {
  name: string = "Yuhen";
  constructor(age: number) {
    super(name, age);
  }
  getPass(): string {
    return `${this.age}${this.name}`;
  }
}
