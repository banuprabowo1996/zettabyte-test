const { getDatabase } = require('../config/connection')
const { ObjectId } = require('mongodb')

class ArticleModel {

    static articles() {
        const db = getDatabase();
        const articles = db.collection("articles");
        return articles
    }

    static async createArticle(data) {
        try {
            const article = this.articles()
            const result = await article.insertOne(data)
            return result
        } catch (err) {
            throw err
        }
    }

    static async updateArticle({ title, category, _id }) {
        try {
            const article = this.articles()
            const result = await article.updateOne({ "_id": ObjectId(_id) }, { $set: { title, category } })
            if (result.modifiedCount === 1) {
                return (`Successfully update one document`);
            } else {
                return ("No documents matched the query. Updated 0 documents.");
            }
        } catch (err) {
            throw err
        }
    }

    static async deleteArticle(_id) {
        try {
            const article = this.articles()
            const result = await article.deleteOne({
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

    static async getArticle(query) {
        try {
            let option = {}
            if (query) {
                switch (query.category) {
                    case "sport": option.category = "sport"
                        break;
                    case "sains": option.category = "sains"
                }
            }



            const page = parseInt(query.page, 10) || 1;
            const limit = 3;
            const startIndex = (page - 1) * limit;

            if (query.title) {
                console.log(query.title, '<<<<<< search');
                const article = this.articles()
                const search = await article.find({ 'title': { '$regex': `${query.title}`, '$options': 'i' } }).toArray()
                return search
            }

            const article = this.articles()
            const result = await article.find(option).skip(startIndex).limit(limit).toArray()
            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = ArticleModel