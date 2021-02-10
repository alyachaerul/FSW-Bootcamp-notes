/* Cara Mengakses value dari Properti */

const user = {
    name: 'nanda',
    age: 18
}

//Cara mengambil data yang common
const basicName = user.name
console.log('Cara biasa: ', basicName);

//Cara Object Destructuring
const {
    name,
    age
} = user //nama variabel sesuai properti, value nya mengikuti objeknya

console.log('Cara object destructuring: ', name);
console.log('Cara object destructuring: ', age);