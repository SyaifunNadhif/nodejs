// npm uninstall validtor(nama package)
// npm i validaror@13.5.2

const validtor = require('validator');
const chalk = require('chalk');

// mengecek apakah string itu email atau tidak
// console.log(validtor.isEmail('Syaifun@gmail.com'));

// console.log(validtor.isMobilePhone('088228659668', 'id-ID'));

// console.log(validtor.isNumeric('088228659668a'));

// console.log(chalk.italic.bgGreen('Hello World'));
const nama = 'Syaifun';
const pesan = chalk`lorem ipsum dolor {bgGreen sit amet}, consectetur adipisicing elit. Nama saya {bgBlue ${nama}}.`;
console.log(pesan);