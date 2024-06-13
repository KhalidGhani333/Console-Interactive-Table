#! /usr/bin/env node
import inquirer from "inquirer";
//Get Input form user
const userInput = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Please Enter Your Number:"
});
// User Input Value
let userNum = userInput.num1;
// Logic For Table
for (let i = 1; i <= 10; i++) {
    let result = userNum * i;
    console.log(`${userNum} x ${i} = ${result}`);
}
