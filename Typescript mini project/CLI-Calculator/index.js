#!usr/bin/env node
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbow = chalkAnimation.rainbow('Let Start Calculation');
    await sleep();
    rainbow.stop();
}
welcome();
