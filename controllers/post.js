const mongoose = require('mongoose')
const PostMessage = require('../models/post')

const createPost = async (req,res) => {
    const post = req.body
    try{
        const newPost = new PostMessage({...post,createdAt:new Date().toISOString()})
        await newPost.save()
        return res.status(201).json({message:"New Post Created Successfully",newPost})

    }catch(error){
        return res.status(409).json({message:error.message})
    }
}

const getPost = async (req,res) => {

    try{
        const newPost = await PostMessage.find()
        return res.status(201).json(newPost)

    }catch(error){
        return res.status(409).json({message:error.message})
    }
}

const updatePost = async(req,res) =>{
    const { id:_id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id")
 
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{ ...post},{new:true});
    res.status(201).json({message:"Post updated successfully",updatedPost})
 }

const deletePost = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")

    await PostMessage.findByIdAndRemove(id)

    res.status(202).json({message:'Post deleted successfully'})
}

module.exports = {
    createPost,
    getPost,
    updatePost,
    deletePost,
}