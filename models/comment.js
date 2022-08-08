const { getDatabase } = require('../config/connection')
const { ObjectId } = require('mongodb')

class CommentModel {

    static comments() {
        const db = getDatabase();
        const comments = db.collection("comments");
        return comments
    }

    static async createComment(data) {
        try {
            const comments = this.comments()
            const result = await comments.insertOne(data)
            return result
        } catch (err) {
            throw err
        }
    }

    static async readComment() {
        try {
            const comments = this.comments()
            const result = await comments.find({}).toArray()
            return result
        } catch (err) {
            throw err
        }
    }

    static async updateComment(data, _id) {
        try {
            const comments = this.comments()
            const result = await comments.replaceOne({ "_id": ObjectId(_id) }, data)
            if (result.modifiedCount === 1) {
                return (`Update comment succesfully`);
            } else {
                return ("No documents matched the query. Updated 0 documents.");
            }
        } catch (err) {
            throw err
        }
    }

    static async deleteComment(_id) {
        try {
            const comments = this.comments()
            const result = await comments.deleteOne({
                _id: ObjectId(_id)
            })
            if (result.deletedCount === 1) {
                return ("Successfully deleted one document.");
            } else {
                return ("No documents matched the query. Deleted 0 documents.");
            }
        } catch (err) {
            throw err
        }
    }
}

module.exports = CommentModel