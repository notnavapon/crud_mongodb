import Post from "../models/postModel.js";



export const getAllPost = async(req , res)=>{
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createPost = async(req,res) =>{
    try {
        const newPost = new Post({ title : req.body.title, content: req.body.content})
        await newPost.save()
        res.status(201).json(newPost)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const getPostId = async(req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        if(!post) return res.status(400).json({message: "Cant find id in Collection"})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deletePostId = async(req,res)=>{
    try {
        const deleteId = await Post.findByIdAndDelete(req.params.id)
        if(!deleteId) return res.status(404).json({message : "Not data in table"})
        
        res.status(200).json({message: "delele id: "+req.params.id})
        
    } catch (error) {
        res.status(500).json({message: err.message})
        
    }
}

export const updatePost = async(req,res)=>{
    try {
        const updateId = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!updateId) return res.status(404).json({message : "Not data in table"})
        
        res.status(200).json({message: "updateId: "+req.params.id+"successfully"})
        
    } catch (error) {
        res.status(500).json({message: err.message})
        
    }
}