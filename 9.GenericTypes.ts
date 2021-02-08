// Example of using any: 

const getter = (data: any): any => data; 

// This could lead an error


// Using of generic types 
// ES6 Syntax


const getterES6 = <T>(data: T): T => data; 

// ES5 
function getterWthGenType<T>(data: T): T{
    return data; 
}

// array gnenric type 
const list: Array<number> = [1,2,3,4,5]

// Generic class 

class UserGen <T> {
    constructor(public name: T, public age: T){}
    public getpass(): string{
        return `${this.name}${this.age}`
    }
}


// number and a string
const yuhen = new UserGen('Yuhen', '23')
// both numbers 
const yuhen2 = new UserGen(546, 23) 


yuhen.getpass() // Yuhen23
yuhen2.getpass() // 54623



// ---------------------
// What if we want to have multiple generic types/ 


class UserWithMultGenTypes <T, K>{
    constructor(public name: T, public age: K){}
    public getpass(): string{
        return `${this.name}${this.age}`
    }
}


// string and a string
const yuhen4 = new UserWithMultGenTypes('Yuhen', '23')
// string and a number
const yuhen6 = new UserWithMultGenTypes('Leo', 23) 



// ---------------------
// We can also specify generic type 'K' with extends 


class UserWithMultGenTypesExtends <T, K extends number>{
    constructor(public name: T, public age: K){}
    public getpass(): string{
        return `${this.name}${this.age}`
    }
}


// string and a string
//const yuhen7 = new UserWithMultGenTypesExtends('Yuhen', '23')
// Error Argument of type 'string' is not assignable to parameter of type 'number'
// string and a number
const yuhen8 = new UserWithMultGenTypesExtends('Leo', 23) 
