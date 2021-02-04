/* Perbedaan Callback dan Promise */

//Callback --> cara solve untuk kalo gabisa return data karena ke delay. gabisa nolak, harus dilakukan
function getDataFromInternet(cb) {
    setTimeout(() => {
        cb('This is data from internet')
    }, 100);
}

getDataFromInternet((result) => {
    console.log(result);
});


/* Promise --> cara solve ketika gabisa return data karena delay, 
bisa ada opsi menolak, gaharus selalu dilakukan */
//Hasilnya harus tetep ada, tapi gaharus sesuai, tapi harus ada reason kenapa ditolak
function getDataPromise(url) {
    return new Promise((resolve, reject) => {
        //reject('This is error');
        resolve("This is the data from url: " + url)
    });
}

getDataPromise("youtube.com")
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    })


/* Level 1 */

// function getDataInternet(url) {

// }

// console.log(getDataInternet('Youtube.com'));

/* Level 2 return diganti callback */
// function getDataInternet(url, cb) {
//     cb(url)
// }

// variabel cb jadi function karena menggunakan arrow function
// getDataInternet('youtube.com', (result) => {
//     console.log(result);
// })

/* Level 3 tidak menggunakan callback tapi return */

//kalo ada resolve dan reject, penulisan awal mula menentukan yang akan dieksekusi
function getDataInternet(url) {
    return new Promise((resolve, reject) => { //resolve dan reject diisi anon function oleh JS
        setTimeout(() => {
            if (url) {
                resolve(url)
            } else {
                reject("Pengen aja error gitu"); //menolak dan menjelaskan alasannya
            }
        }, 1000);
        //apapun yang dimasukkin di disini akan muncul di variabel result
    })
}

//Promise adalah sebuah class yang punya function dan punya 2 method : then dan catch 

/* kelebihan promise : gaperlu pake parameter CB, 
gaperlu mikirin masukin anon function,
punya mindset kalo pake promise return hasil pake resolve, 
mau ditumpuk setTimeout berapapun returnnya akan tetap ada */

getDataInternet('youtube.com')
    //untuk dapat mendapatkan hasil result harus define method then
    .then(result => { // apapun yang dimasukkin di parameter resolve, akan muncul di arrow function then
        console.log(result);
    })
    .catch(err => { //NgeHandle penolakan promised
        console.log(err);
    })