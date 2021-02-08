// Namespaces and  Modules
// Avod global variables: 

// Define namespace it incapsulates everything within it 


namespace Utils {
    const SECRET: string = '12345';
    const PI: number = 3.14;
    const getPass = (name: string, age: number): string => `${name}${age}`
    const isEmpty = (data: any): boolean => !data; 
}

// How to export data top later use it 

namespace UtilsWithExport {
   export const SECRET: string = '12345';
    const PI: number = 3.14;
    export const getPass = (name: string, age: number): string => `${name}${age}`
    export const isEmpty = (data: any): boolean => !data; 
}

const secret = UtilsWithExport.SECRET;
console.log(secret);
//12345

const myPass = UtilsWithExport.getPass('Ustin', 24)
console.log(myPass)
//Ustin24

// What uf we will need to share info from file to file; 

// File 'Utils.ts'
export const SECRET: string = '12345';
const PI: number = 3.14;
export const getPass = (name: string, age: number): string => `${name}${age}`
export const isEmpty = (data: any): boolean => !data; 

// File 'Costumer.ts'

// import {getPass, SECRET} from "./Utils"

