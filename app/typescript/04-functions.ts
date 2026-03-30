// Basic function with types
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3)); // 8

// Optional parameters
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("Piyush")); // Hello, Piyush!
console.log(greet("Piyush", "Namaste")); // Namaste, Piyush!

// Default parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}
console.log(multiply(5)); // 5
console.log(multiply(5, 2)); // 10

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3)); // 6

// Arrow functions
const divide = (a: number, b: number): number => a / b;

console.log(divide(10, 2)); // 5
// Function types
let calculate: (x: number, y: number) => number;
calculate = add;

console.log(calculate(4, 6)); // 10

// Function overloading

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Invalid arguments");
}

console.log(combine("Hello, ", "world!")); // Hello, world!
console.log(combine(5, 10)); // 15
