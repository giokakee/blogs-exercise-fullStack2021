require('dotenv').config()
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const URI = process.env.mongo_url


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const blogSchema = mongoose.Schema({
    blog: {
        type: String,
        require: true,
        minlength:5
    },
    date: Date,
    title: String,
    author: String,
    likes: Number,
    likerUsers: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
})


blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  blogSchema.plugin(uniqueValidator)

const Blog = mongoose.model('blog', blogSchema)

module.exports = Blog
