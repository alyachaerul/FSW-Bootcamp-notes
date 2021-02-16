const {
    Users
} = require('../models')
const bcrypt = require('bcrypt')
const {
    nanoid
} = require('nanoid')
const jwt = require('jsonwebtoken')

async function register(username, password) {
    const encryptedPassword = await bcrypt.hash(password, 5) //sebuah promise, jadi harus pake await
    const id = nanoid()

    //return these only
    const payload = {
        id,
        username,
    }

    //tetapi ketika create perlu tambah data
    await Users.create({
        ...payload, //object spread : mengambil properti objectnya saja --> menggabungkan dari properti berbeda jadi dalam kesatuan properti
        password: encryptedPassword //gaboleh dikirim kembali ke user akan membuka ruang untuk mengambil encrypted pwd melakukan pass the hash
        //password dimasukkan saat objek create aja
    })

    payload.token = jwt.sign({
        id
    }, process.env.JWT_SECRET) //parameter kedua adalah JWT Secret harus didefine di env

    return payload;

}

async function login(username, password) {
    const user = await Users.findOne({
        where: {
            username
        }
    })

    if (await bcrypt.compare(password, user.password)) { //butuh data yang dimasukin user yaitu pwd dan encrypted pwd dari db
        const payload = {
            id: user.id,
            username: user.username,
            token: jwt.sign({
                id: user.id
            }, process.env.JWT_SECRET)
        }
        return payload;
    } else {
        return "Wrong password";
    }
}

module.exports = {
    register,
    login
}