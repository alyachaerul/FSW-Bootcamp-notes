// Class
const nanoid = require('nanoid')

class NamaClass {
    constructor(firstName, lastName, createHalfName) {
        this.firstName = firstName;
        this.lastName = lastName;
        if (createHalfName) {
            this.halfName = firstName.substring(0, 3)
        }
        // cara define suatu method dalam constructor : menggunakan anon function
        // this.getFullName = () => {
        //     return `${this.firstName} ${this.lastName}`
        // }
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    // kalau pake Asynchronous
    // async getAsync() {

    // }
}

// kalo new Date() --> harus sebuah class untuk mengambil waktu ketika dideklarasi
// Harus pake new bisa

// How to use Class 
const student = new NamaClass("Alya", "Chaerul", false)
console.log(student.firstName);
console.log(student.lastName);
console.log(student.halfName);
console.log(student.getFullName());

// Basic Inheritance Concept in JS
const bapak = {
    emas: true,
    sertifikatRumah: true
}

const anak = {
    ...bapak, //mewariskan menggunakan object spreading
    hp: true
}
console.log(anak);

// OOP Inheritance Concept in JS
class Bapak {
    constructor(emas, sertifikatRumah) {
        this.emas = emas
        this.sertifikatRumah = sertifikatRumah
    }
}

class Anak extends Bapak {
    constructor(hp, emas, sertifikatRumah) {
        super(emas, sertifikatRumah) // sama kayak new Bapak() dalam penggunaan class namun ini konsep pewarisan
        this.hp = hp
    }
}

// How to use the inheritance using OOP Concept
const anakClass = new Anak(true, true, true)
console.log(anakClass);