const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//Gets all the posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    } catch(err) {
        res.json({message: err})
    }
})

//Submit a post
router.post('/', async (req, res) => {
    const post = new Post({
       title: req.body.title,
       description: req.body.description
    });
    try{
        const savedPost = await post.save()
        res.json(savedPost)
    } catch(err) {

        res.json({message: err})
    }
})

//Specific post
router.get('/:postid', async (req, res) => {
    const postId = req.params.postid
    try {
        const post = await Post.findById(postId)    
        res.json(post)
    } catch (err) {
        res.json({message: err})
    }
    

})

//Delete Post
router.delete('/:postid', async (req, res) => {
    const postId = req.params.postid
    try {
        const removedPost = await Post.deleteOne({_id: postId})    
        res.json(removedPost)
    } catch (err) {
        res.json({message: err})        
    }
    

})

//Update Post
router.patch('/:postid', async(req, res) => {
    const postId = req.params.postid
    const newTitle = req.body.title
    try {
        const updatedPost = await Post.updateOne({_id: postId}, {$set: {title: newTitle}})
        res.json(updatedPost)   
    } catch (err) {
       res.json({message: error}) 
    }
})

module.exports = router
