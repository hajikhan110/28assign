#! /usr/bin/env node
/*
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value
for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a
 toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a
 kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a
 teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is
an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/
//#! /usr/bin/env node
//let age: number;
import inquirer from "inquirer";
let age = await inquirer.prompt([
    {
        name: "ageplz",
        type: "input",
        message: "Sir what Age plz to find your life stage (to exit type 0)"
    }
]);
console.log(age.ageplz);
if (age.ageplz < 2) {
    console.log("Person is a baby Life Stage");
}
else if (age.ageplz >= 2 && age.ageplz < 4) {
    console.log("person is in todler life stage");
}
else if (age.ageplz >= 4 && age.ageplz < 13) {
    console.log("person is in child life stage");
}
else if (age.ageplz >= 13 && age.ageplz < 20) {
    console.log("person is in teen life stage");
}
else if (age.ageplz >= 20 && age.ageplz < 65) {
    console.log("person is in Adult life stage");
}
else {
    console.log("Person is in elder life stage");
}
