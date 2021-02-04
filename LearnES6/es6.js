//let & const
let a = 10;
const z = 10;

//arrow function 
let arrowFunction = () => {
    return "this is an arrow function";
}
console.log('arrowFunction():', arrowFunction());

//Default parameter values --> nulisin value dari variabel yang didefinisikan sebagai default
//menjaga supaya fungsi dapat berjalan dengan baik dimana data yang kadang ada kadang enggak dari inputan

/* function getName(firstName = "foo") {
    return firstName;}
 console.log(getName()); --> foo */

function getName(firstName, lastName, prefix = 'Mr.') {
    return `${prefix} ${firstName} ${lastName}`
}
console.log(getName("Alya", "Chaerul"));
console.log(getName("Alya", "Chaerul", "Ms."));


//aray punya dua method .find() dan .findIndex()
const numbers = [4, 9, 16, 25, 29];

function myFunction(value) {
    return value > 8;
}
//.find() method -->  butuh function dijadikan sebagai method
const findResult = numbers.find
/* .findIndex() --> yang dicari indexnya : menggunakan fungsi yang didefinisikan 
untuk melakukan apa yang methodnya kerjakan logika 
mencari index nya pake fungsi : menggunakan function reference */

// minimum dan maximum number --> di JS ada limitasi min dan max dari number 
/* menggunakan method untuk minimum : MIN_SAFE_INTEGER 
menggunakan method untuk maximum number : MAX_SAFE_INTEGER 
Untuk ngubah nilai max integer ke yang kita inginkan di define Number.MAX_SAFE_INTEGER = nilai*/

var minInteger = Number.MIN_SAFE_INTEGER;
console.log(minInteger);
var maxInteger = Number.MAX_SAFE_INTEGER;
console.log(maxInteger);

// Number --> global object (udah tersedia tanpa declare)
/* Mastiin kalo inputan adalah number --> verifikasi inputan dari API terhadap checking inputan number atau bukan
bilangan desimal bukan number di JS tapi float. Kalo butuh angka koma bisa pake BigInt */

console.log(Number.isInteger(5));
console.log(Number.isInteger("Alya"));

//Lakukan konversi untuk data yang masih ada string. Konversi ke number dengan Number(namaVar)

let number = 5;
let stringNumber = "ar";
console.log(typeof stringNumber);
stringNumber = Number(stringNumber);
console.log(typeof stringNumber);

/* Bagaimana jika stringnya ada angkanya? 
--> NaN(not a number) jika string di convert isiannya masi huruf --> falsy */
console.log(stringNumber);

if (stringNumber) {
    console.log('truthy');
} else {
    console.log('falsy');
}

// fungsi isNaN mengecheck apakah not a number atau bukan
if (isNaN(stringNumber)) {
    console.log('masukin karakter aritmatik');
}

// infinity merupakan data type dan falsy
let infinity = 10 / 0
console.log(infinity);

//isFinit untuk mnegecheck apakah fungsi aritmatik yang di input hasilnya infinity atau bukan
// mencegah untuk inputan infinity
if (isFinite(infinity)) {
    console.log('Aritmetiknya normal');
} else {
    console.log('to infinity and beyond');
}