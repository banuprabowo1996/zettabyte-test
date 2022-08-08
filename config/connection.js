const { MongoClient } = require('mongodb')

const uri = 'mongodb+srv://banu:Ldg3mryZ4QMcoa14@cluster0.sybtkm9.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri)

let database;

async function connect() {
    try {
        await client.connect()
        database = client.db('test')
    } catch (error) {
        console.log(error);
    }
}

function getDatabase() {
    return database
}

module.exports = {
    connect,
    getDatabase
}