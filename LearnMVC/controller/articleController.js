const {
    Articles
} = require('../models')

module.exports = {
    async get(req, res) {
        const articles = await Articles.findAll({})
        res.render('index', {
            articles
        })
    },
    async add(req, res) {
        const {
            body
        } = req
        console.log('body: ', body);

        await Articles.create(body);
        res.redirect('/')
    },
    async delete(req, res) {
        const {
            id
        } = req.query
        await Articles.destroy({
            where: {
                id
            }
        })
        res.redirect('/')
    }
}