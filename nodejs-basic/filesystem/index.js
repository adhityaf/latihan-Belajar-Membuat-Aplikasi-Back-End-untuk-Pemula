// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const {resolve} = require('path');

// Versi Synchronous
// const data = fs.readFileSync(resolve(__dirname, 'note.txt'), 'UTF-8');
// console.log(data);

//Versi Asynchronous

const fileReadCallBack = (error, data) => {
    if (error){
        console.log('Gagal Membaca File');
        return;
    }

    console.log(data);
}

fs.readFile(resolve(__dirname, 'note.txt'), 'UTF-8', fileReadCallBack);