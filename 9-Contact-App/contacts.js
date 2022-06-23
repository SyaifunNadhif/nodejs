const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// membuat folder data
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// membuat file contact.json jika belum ada
const filePath = './data/contact.json';
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, '[]', 'utf8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
};

const simpanContact = (nama, email, nomer) => {
    const contact = { nama, email, nomer };
    const fileBuffer = fs.readFileSync('data/contact.json', 'utf8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);
    fs.writeFileSync('data/contact.json', JSON.stringify(contacts), 'utf8');
    console.log('Data berhasil disimpan');
    rl.close();
};


module.exports = { tulisPertanyaan, simpanContact };