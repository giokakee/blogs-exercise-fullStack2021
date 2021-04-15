const blogsRouter = require('express').Router();
const Blog = require('../models/blog');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//GET
blogsRouter.get('/', async (req,res) => {
        try{
            let blog = await Blog.find({}).populate('user');
            res.json(blog);
        }catch(err){
            res.json({message:err.message});
        }
})


const getTokenFrom = request => {
    const authorization = request.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7);
    }
    return null;
  }

//POST

blogsRouter.post('/', async (req,res) => {
    let body = req.body;
    console.log('we are hereeee')
    try{  const token = getTokenFrom(req);
    if(token===null)return res.status(401).end(console.log('jwt must be provided'));
     const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).end(console.log({ error: 'token missing or invalid' }));
  }
  const user = await User.findById(decodedToken.id);
    
        let newBlog = new Blog({
            blog: body.blog,
            title: body.title || 'unnamed',
            author: body.author || 'unnamed',
            date: new Date().toISOString(),
            user: user.id
        });
         let savedBlog = await newBlog.save();
         console.log(savedBlog)
         user.blogs = await user.blogs.concat(savedBlog.id);
         await user.save();
        res.json(savedBlog);
    }catch(err){
      
        res.send(404).end(console.log({message: err.message}))
    }
})

blogsRouter.delete('/:id', async (req,res) => {
  console.log(req.params)
  try{
   let deleteBlog= await Blog.findByIdAndDelete(req.params.id)
    res.send(deleteBlog)
  }catch(err){
    console.log({message:err.message})
  }
})




module.exports = blogsRouter;