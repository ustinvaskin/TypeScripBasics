class User {
  name: string;
  age: number;
  nickName: string;

  constructor(name: string, age: number, nickName: string) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
  }
}

const ustin = new User("Ustin", 24, "TinTin");

console.log(ustin.name);

// --------------
// Class types modificators

class User2 {
  public name: string;
  private nickName: string;
  protected age: number;
  readonly pass: number;

  constructor(name: string, age: number, nickName: string, pass: number) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    this.pass = pass;
  }
}

const yahen = new User2("Yahen", 31, "webdev", 123);

yahen.name; // 'Yahen'
// yahen.nickName; // Error Private
// yahen.passIs = 43 // Cannot assign to 'passIs' because it is a read-only property
//yahen.nickName  // Property 'nickName' is private and only accessible within class 'User2
// yahen.age // Property 'age' is protected and only accessible within class 'User2' and its subclasses.

// ----------------------------
// Default props

class User3 {
  name: string;
  age: number = 20;
  nickName: string = "webDev";

  constructor(name: string) {
    this.name = name;
  }
}

const userIs = new User3('Ustin') // {age: 20, nickName: "webDev", name: "Ustin", constructor: Object}


// Minimalisation Class 

class UserMin {
    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ){}
}

const newUser = new UserMin('Ustin', 24, 'Tintint', 23)

console.log(newUser) // {name: "Ustin", age: 24, nickName: "Tintint", pass: 23, constructor: Object} 