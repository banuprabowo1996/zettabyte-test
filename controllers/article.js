const ArticleModel = require('../models/article')

class ArticleController {
    static async createArticle(req, res, next) {
        try {
            const { title, category } = req.body
            const response = await ArticleModel.createArticle({ title, category })
            res.status(201).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async readArticle(req, res, next) {
        try {
            console.log(req.query);
            const response = await ArticleModel.getArticle(req.query)
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async updateArticle(req, res, next) {
        try {
            const { _id } = req.params
            const { title, category } = req.body
            const response = await ArticleModel.updateArticle({ title, category, _id })
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async deleteArticle(req, res, next) {
        try {
            const { _id } = req.params
            const response = await ArticleModel.deleteArticle(_id)
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ArticleController