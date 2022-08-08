const express = require('express')
const cors = require('cors')
const { connect } = require('./config/connection')
const ArticleController = require('./controllers/article')
const CommentController = require('./controllers/comment')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//test
app.get('/article', ArticleController.readArticle)
//test

app.post('/article', ArticleController.createArticle)
app.put('/article/:_id', ArticleController.updateArticle)
app.delete('/article/:_id', ArticleController.deleteArticle)

app.post('/comment', CommentController.createComment)
app.get('/comment', CommentController.readComment)
app.put('/comment/:_id', CommentController.updateComment)
app.delete('/comment/:_id', CommentController.deleteComment)

connect().then((database) => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})

