// Core Module
// File System Module
const fs = require('fs');

// console.log(fs);

// Menuliskan string ke file secara syncronous
// try{
//     fs.writeFileSync('note.txt', 'Hello World secara synchronous');
// }catch(e){
//     console.log(e);
// }

// Menuliskan string ke file secara asynchronous
// fs.writeFileSync('note.txt', 'Hello World secara asynchronous', (err) => {
//     console.log(err);
// } );

// membaca file secara synchronous
// const data = fs.readFileSync('note.txt', 'utf8');
// console.log(data);

// membaca file secara asynchronous
// fs.readFile('note.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// } );

// Readline

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
} );

rl.question('What is your name? ', (name) => {
    rl.question('What is your age? ', (age) => {
    // console.log(`Hello ${name}, You are ${age} years old`);
    const contact = {name, age};
    const file = fs.readFileSync('contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    // memasukkan data ke dalam array json
    contacts.push(contact);

    fs.writeFileSync('contacts.json', JSON.stringify(contacts));
    console.log('Thank you for your input!');

    rl.close();
    } );
} );




