#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.cyanBright("\n \t\tCODE WITH MUJAHID: WORD COUNTER"));
console.log(chalk.cyanBright("=".repeat(60)));

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.gray("Enter your sentence:")
    }
]);

const words = answers.sentence.trim().split(" ");

console.log(chalk.cyanBright("=".repeat(60)));
console.log(chalk.bold.redBright("- Sentence Words:"));
console.log(words);
console.log(chalk.bold.magenta(`\n - Your sentence words count is ${chalk.bold.redBright(words.length)}`));
console.log(chalk.cyanBright("=".repeat(60)));


