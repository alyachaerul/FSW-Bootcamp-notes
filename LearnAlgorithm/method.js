let user = {
    name: "Nanda",
    age: 21,
    greet() {
        return `Hai, nama saya adalah ${this.name}, saya berumur ${this.age}`
    } // this merepresentasikan object dimana method berada
}

console.log('.greet() : ', user.greet());

//dalam JS, semua value adalah object.

let friends = ['Akbar', 'Siti', 'Winda']
//includes : me return sebuah boolean
console.log('.includes()', friends.includes("Siti"));
// join : menjoin array menajdi satu string
console.log('.join()', friends.join());
// map : seperti looping. anon function yg dimasukkan akan dipanggil disetiap item yang ada di array
// untuk modifikasi isi item disetiap array
console.log('.map()', friends.map((friend) => {
    console.log(friend);
    return `${friend} bot`
}));