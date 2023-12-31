var userInput = prompt("Type in any number here:")

//Conversion from base 2, 8, 16 to Decimal.
console.log("Decimal  :", userInput);
console.log("Binary   :", Number.parseInt(userInput, 2));
console.log("Octal    :", Number.parseInt(userInput, 8));
console.log("Hex      :", Number.parseInt(userInput, 16));

var userInput2 = Number(prompt("Great job ! view result under console under inspect. Now type in any DECIMAL number here:"))

//Conversion from Decimal to base 2, 8, 16.
console.log(userInput2 + " in Decimal is " + userInput2);
console.log(userInput2 + " in Binary is " + userInput2.toString(2));
console.log(userInput2 + " in Octa is " + userInput2.toString(8));
console.log(userInput2 + " in Hex is " + userInput2.toString(16));