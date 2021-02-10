const {
    Client
} = require('pg');

// Melakukan koneksi dengan database client
const db = new Client({
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '12345678',
    database: 'test'
})

db.connect().then(() => {
    console.log('Database is connected');
}).catch(err => {
    console.error(err);
})

module.exports = db