const contacts = require('./contacts');


const main = async () => {
    const nama  = await contacts.tulisPertanyaan('Masukkan nama  : ');
    const email = await contacts.tulisPertanyaan('Masukkan email : ');
    const nomer = await contacts.tulisPertanyaan('Masukkan nomer : ');
    contacts.simpanContact(nama, email, nomer);

};

main();

// objeck destructuring
// const {tulisPertanyaan, simpanContact} = require('./contacts');

// const main = async (nama, email, nomer) => {
//     const nama  = await tulisPertanyaan('Masukkan nama  : ');
//     const email = await tulisPertanyaan('Masukkan email : ');
//     const nomer = await tulisPertanyaan('Masukkan nomer : ');

//     simpanContact(nama, email, nomer);
// };

// main();




