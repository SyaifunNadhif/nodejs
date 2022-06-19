// console.log -> untuk print

// const -> untuk membuat variable
// const nama = 'Syaifun Nadhif Maulana';
// const umur = 21;
// console.log(nama);

// const cetakNama = (nama, age) => `Hi, nama saya ${nama}, umur ${age} tahun`;
// console.log(cetakNama(nama,umur));


// require('./test/satu')
// Modules -> sekumpulan code yang dapat digunakan kembali, dengan
//            antarmuka yang terdefinisi

// const fs = require('fs'); // core module

const coba = require('./coba')

// const moment = require('moment'); // third party modules / npm module / node_modules 

console.log(
    coba.cetakNama('Nadhif M'), 
    coba.PI,
    new coba.Orang());
console.log(coba.mahasiswa.cetakMhs());


// console.log('Hello World!');

// satu file itu satu module sendiri, apa yang ada di module yang satu gak bisa gitu aja di akses oleh module yang lain
// console.log(cetakNama('Nadhif Ganteng')); <-- ini baru bisa dicetak