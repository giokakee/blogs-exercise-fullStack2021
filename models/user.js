require('dotenv').config();
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const URI = process.env.mongo_url;


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique:true,
        required: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      minlength:5
    },
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
      }
    ],
  });
  
  userSchema.plugin(uniqueValidator)

  userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })

  


  module.exports = mongoose.model('User', userSchema);