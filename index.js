require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser')
const cors = require('cors')

//ROUTERS
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 



app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)


app.listen(PORT, () => {
    console.log(`app is running at ${PORT}`)
})