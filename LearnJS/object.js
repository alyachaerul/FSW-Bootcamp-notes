const user = {
    name: "Nanda",
    age: 17,
    address: {
        city: "Yogyakarta",
        regency: "Wedomartani"
    },
    friends: ['Nina', 'Amirul', "Siski"]
}

console.log(user.address.city)
console.log(user.friends[1])

//nambahin properti baru: 
user.catName = "Meng"
console.log(catName);

//menghapus properti
delete user.age
console.log(user.age);

// kalo mau rename, hapus dulu terus tambahin lagi propertinya