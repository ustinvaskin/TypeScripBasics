// Simple interface example
// form of an object
// named object type
interface User {
  name: string;
  age: number;
}
// it can use inhertitance

// Create object based on Interface

const ustin: User = {
  name: "Ustin",
  age: 24,
};

// Interface modificator readlonly so we cant change the object
// Exmaple
interface userWithReadOnlyProp {
  readonly name: string;
  age: number;
}

const yuhan: userWithReadOnlyProp = {
  name: "Yuhan",
  age: 43,
};

yuhan.age = 45;
// yuhan.name = 'Smrht' // Error Cannot assign to 'name' because it is a read-only property

// Create Calss based on multiple interafces

interface UserEx {
  name: string;
  age: number;
}

interface Pass {
  getPass(): string;
}

class Yuhen implements UserEx, Pass {
  name: string = "Yuhan";
  age: number = 31;
  getPass() {
    return `${this.name}${this.age}`;
  }
}

//-----------------------
// Interface extends

interface UserEx {
  name: string;
  age: number;
}

interface Admin extends User {
  getPass(): string;
}

class Yuhan2 implements Admin {
  name: string = "Yuhan";
  age: number = 54;
  getPass() {
    return `Smth`;
  }
}
