const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')




//POST
usersRouter.post('/',async (req,res) => {
    let body = req.body
console.log('wer ar in users route')
console.log(req.body)
    const saltRounds = 10
    try{
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const newUser = new User({
      username: body.username,
      name: body.name,
      password: passwordHash,
    })
        let savedUser = await newUser.save()
        
        res.send(savedUser)
    }catch(err){
        res.status(402).end(console.log({message:err.message}))
    }
})

//GET
usersRouter.get('/', async (req,res) => {


    try{
        let users =await User
            .find({}).populate('blog')
        res.json(users)
    }catch(err){
        res.json({message:err.message})
    }
})



module.exports = usersRouter