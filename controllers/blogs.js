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
            user: user.id,
            likes:0
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

blogsRouter.delete('/:id/:token', async (req,res) => {
  let id = req.params.id
  let token = req.params.token
  const decodedToken = jwt.verify(token, process.env.SECRET);
 

  try{
  await Blog.findByIdAndDelete(id)
    let user = await User.findById(decodedToken.id)
     user.blogs = await user.blogs.filter(filt=> filt !=id)
       await user.save()

   res.send({message: 'deleted'})
  }catch(err){
    console.log({message:err.message})
  }
})

blogsRouter.put('/:id', async (req,res) => {
  let token = req.body.token
  let id = req.params.id
  const decodedToken = jwt.verify(token, process.env.SECRET);
  
  try{
    let oneBlog = await Blog.findById(id)
    if(oneBlog.likerUsers.includes(decodedToken.id)){
      return res.send({name:'kakee'})
    }
  oneBlog.likerUsers=await oneBlog.likerUsers.concat(decodedToken.id)
  oneBlog.save()
 let liked = await Blog.findByIdAndUpdate(id,{likes: req.body.like+1}, {new:true})
 res.send(liked)
}catch(err){
  res.status(404).end(console.log({message:err.message}))
}
})

blogsRouter.put('/:id/:unlike', async (req,res) => {
  let token = req.body.token
  let id = req.params.id
  const decodedToken = jwt.verify(token, process.env.SECRET);
  
  try{
    let oneBlog = await Blog.findById(id)
    if(!oneBlog.likerUsers.includes(decodedToken.id)){
      return res.send({name:'kakee'})
    }
  oneBlog.likerUsers=await oneBlog.likerUsers.filter(filt=> filt !=decodedToken.id)
  oneBlog.save()
 let liked = await Blog.findByIdAndUpdate(id,{likes: req.body.like-1}, {new:true})
 res.send(liked)
}catch(err){
  res.status(404).end(console.log({message:err.message}))
}
})




module.exports = blogsRouter;