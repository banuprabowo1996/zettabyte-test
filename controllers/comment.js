const CommentModel = require('../models/comment')

class CommentController {
    static async createComment(req, res, next) {
        try {
            const { comment } = req.body
            const response = await CommentModel.createComment({ comment })
            res.status(201).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async readComment(req, res, next) {
        try {
            const response = await CommentModel.readComment()
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async updateComment(req, res, next) {
        try {
            const { _id } = req.params
            const { comment } = req.body
            const response = await CommentModel.updateComment({ comment }, _id)
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async deleteComment(req, res, next) {
        try {
            const { _id } = req.params
            const response = await CommentModel.deleteComment(_id)
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = CommentController