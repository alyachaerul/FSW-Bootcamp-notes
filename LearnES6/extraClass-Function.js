// Pakai Function biasa ketika menggunakan logic yang sama dilakukan berulang

const userInput = {
    name: 'bob',
    address: '738 Okuneva Crossing'
}

function upperCaseString(string) {
    return string.toUpperCase();
}

console.log(upperCaseString(userInput.name));

/* Penggunaan Anonymous Function */

// 1. Ketika dibutuhkan oleh Method / Fungsi
setTimeout(() => {
    console.log('proses single');
}, 100);

/* Gunakan function biasa ketika menggunakan logic yang sama pada method / fungsi yg butuh function */
function convertStringToNumber(string) {
    return Number(string);
}

setTimeout(() => {
    console.log(convertStringToNumber("2"));
})

// constructor adalah sebuah parameter tetapi khusus class

/* Callback Function */
function callbackFunction(cb) {
    cb('result');
}

callbackFunction((result) => { //parameternya arrow function gamesti kosong, bergantung perintah
    console.log(result);
});

/* Array Function digunakan untuk method yang membutuhkan callback, atau method array */

/* Function Reference --> mereferensikan suatu function */

// Ketika ngeprint function tanpa eksekusi functionnya

//function biasa
function testFunction(param) {
    return param;
}

console.log(testFunction); // cara mereferensi fungsi
console.log(testFunction('test')); //cara menggunakan fungsi

// Arrow Function

const testArrowFunction = (name) => {
    return name;
}

console.log(testArrowFunction);
console.log(testArrowFunction('test'));

// yang dimasukin ke method .find adalah reference ke function

console.log((name) => { //mereferensi fungsi, bukan menjalankan fungsi
    return name == "Emilia";
});

const names = ['Emilia', 'Dina', 'Jon'];
// names.find((name) => {
//     return name == 'Emilia';
// })
names.find(testArrowFunction) //masukkin referensi fungsi