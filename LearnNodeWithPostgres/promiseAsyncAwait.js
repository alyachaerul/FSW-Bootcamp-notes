const db = require("./connection/databaseConnection")

db.query(`SELECT * FROM note`)
    .then(result => {
        console.log('cara biasa:', result.rows)
    })

function getAll(tableName) {
    let variable;
    db.query(`SELECT * FROM ${tableName}`)
        .then(result => {
            variable = result
        })
    return variable
}
console.log('cara biasa pakai fungsi:', getAll('note'));

function getAllPromise(tableName) {
    return new Promise((resolve, reject) => { // promise
        db.query(`SELECT * FROM ${tableName}`) // promise
            .then(result => {
                resolve(result.rows)
            })
    })
}

getAllPromise('note')
    .then(result => {
        console.log('cara pakai promise:', result);
    })

// async function getAllAsync(tableName) {

// }