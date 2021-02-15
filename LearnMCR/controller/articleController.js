const {
    Articles
} = require('../models')

async function add(data) {
    await Articles.create(data)
}

async function get(query) {
    const articles = await Articles.findAll(
        query ? {
            where: query
        } : {}
    )
    return articles
}

async function put(id, data) {
    await Articles.update(
        data, {
            where: {
                id
            }
        }
    )
    // won't return anything, method won't return updated data
}

// define the delete method allowed in JS, but for function it couldn't.
async function remove(id) {
    await Articles.destroy({
        where: {
            id
        }
    })
}

module.exports = {
    add,
    get,
    put,
    remove
}