#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => new Promise((res, rej) => setTimeout(res, 2000));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("LET THE BEGIN!!!!");
    await sleep();
    rainbowTitle.stop();
    //console.log(chalk.green('Player Life Game!'));
}
//welcome();
async function askQuestion() {
    let playerLife = 3;
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    do {
        console.log(chalk.yellow(`Player Life is ${playerLife} : `));
        playerLife--;
        var que = await inquirer.prompt([
            {
                type: "number",
                name: "usr_num",
                message: "Select any number between 1 -10: ",
                // validate:(answers:number)=>{
                //     if(isNaN(answers)){
                //         return chalk.red('Please enter a valid number!!');
                //     }
                //     return true;
                // }
            }
        ]);
        if (que.usr_num === randomNumber) {
            console.log(chalk.green(`Congratulation!! you guess the right number`));
        }
        else if (que.usr_num < randomNumber) {
            console.log(chalk.red(`your number ${que.usr_num} is less than guess number.`));
        }
        else if (que.usr_num > randomNumber) {
            console.log(chalk.red(`your number ${que.usr_num} is greater than guess number.`));
        }
    } while (playerLife > 0 && randomNumber !== que.usr_num);
    if (playerLife == 0 && randomNumber !== que.usr_num) {
        console.log(chalk.red('GAME OVER!!!'));
    }
}
async function startGame() {
    do {
        await askQuestion();
        var restart = await inquirer.prompt([{
                type: "input",
                name: "again",
                message: "Do You want to play again? press Y :"
            }
        ]);
    } while (restart.again === 'y' || restart.again === 'Y');
}
startGame();
