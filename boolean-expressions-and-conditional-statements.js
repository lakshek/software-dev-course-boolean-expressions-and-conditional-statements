/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains") {
  if (hasTorch) {
    console.log("You safely navigate through the dark mountains and find a mysterious cave.");
    const caveChoice = readline.question("Do you want to 'enter' the cave or 'continue' your journey? ");

    if (caveChoice === "enter") {
      console.log("Inside the cave, you find a glowing sword. You take it with you.");
      hasSword = true;
    } else {
      console.log("You continue your journey through the mountains.");
    }
  } else {
    console.log("It's too dark to proceed. You decide to turn back.");
  }
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  const villagerHelp = readline.question("A villager offers you a compass for your journey. Do you accept it? (yes/no) ");

  if (villagerHelp === "yes") {
    console.log("You now have a compass to help you navigate.");
    hasCompass = true;
  } else {
    console.log("You politely decline and move on.");
  }
} else {
  console.log("You get lost and wander aimlessly.");
}

console.log("The adventure ends here. Thanks for playing!");


