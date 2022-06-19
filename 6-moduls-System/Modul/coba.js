


function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;


const mahasiswa = {
    nama : 'Reyhan Vito',
    umur : 20,
    cetakMhs()  {
        return `Halo, saya ${this.nama}, umur saya ${this.umur} tahun`;
    },
};


class Orang {
    constructor(){
        console.log('Objek orang telah dibuat!!');
    }
}


// kalo ini baru bisa di cetak
// console.log(cetakNama('Nadhif Ganteng'));




// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;



// module.exports = {
//     cetakNama : cetakNama,
//     PI : PI,
//     mahasiswa : mahasiswa,
//     Orang : Orang,

// };

module.exports = { cetakNama, PI, mahasiswa, Orang};








