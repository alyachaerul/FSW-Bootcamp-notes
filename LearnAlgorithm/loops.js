//Basic For Loop

let total = 0
const itemPrice = [5000, 6000, 3000]
for (let index = 0; index < itemPrice.length; index++) {
    const item = itemPrice[index];
    //bisa menggunakan index dimana akan terus bertambah sampai mencapai lengthnya
    total += item // akan menambah seluruh isi dari array
    // total = item --> total merefill dirinya dengan nilai yang ada pada array dan menampilkan hasil yang akhir
}
console.log("total: ", total)

// While Loop

const isImpostorList = [false, false, true, false]
let loopTimes = 0
// harus mendefinisikan variabel diluar kondisi
while (loopTimes < isImpostorList.length) {
    loopTimes++
    const item = isImpostorList[loopTimes]
    //Ketika item ketemu
    if (item) {
        //karena loopTimes dimulai dari nol maka ditambah 1
        console.log(`Impostor is found, it's user number ${loopTimes + 1}`)
        break;
    }
}

// For In Loop --> untuk melakukan perulangan suatu objek

const item = {
    photoUrl: "http://...",
    name: "iPhone 12 Pro Max",
    sellerName: "DigiMap",
    rating: 5, //dikonversi tidak ada melalui for in
    harga: 0 //dikonversi tidak ada melalui for in
}

/* for in loop digunakan kasus jika ada data number maka akan diubah 
jadi string karena kedepnannya kita butuh string drpd number. */
for (const key in item) {
    console.log("key : ", key);
    const value = item[key]; //akan terisi value dari seluruh variabel
    console.log("value : ", value);
    console.log("typeof value : ", typeof value) // menampilkan tipe data dari nilainya apa
    //type of value akan mendeteksi jika ada number akan dijadikan string

    if (typeof value == 'number' && value < 1) {
        item[key] = "Tidak ada"
    }
    console.log('\n'); // ngeprint enter (memberi break)
}

console.log("Item : ", item)

//For Of Loop : looping array 

// case : ketika FE nerima data dari BE, di looping satu persatu ditampilkan ke web satu persatu
const temperatures = [32, 33, 35, 32]

//penulisan array menulis secara jamak, iteratornya single
for (const temperature of temperatures) {
    console.log(`The temperature is ${temperature}`)
}