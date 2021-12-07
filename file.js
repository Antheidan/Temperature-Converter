//Assignment of kelvin
const kelvin = 50;

//Assignment of celsius
let celsius = kelvin - 273;

//Assignment of fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Using Math.floor to ensure result is a whole number
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);
