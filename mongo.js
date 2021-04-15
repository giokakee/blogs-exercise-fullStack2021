require('dotenv').config()
const URI = process.env.mongo_url
const mongoose = require('mongoose')

const conection = () => {
    return mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
}



module.exports = conection