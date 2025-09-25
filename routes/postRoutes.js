const express = require("express")
const router = express.Router()

const Post = require("../models/postModel")


//get all data

router.get("/", async(req , res)=>{
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//post
router.post("/", async(req,res) =>{
    try {
        const newPost = new Post({ title : req.body.title, content: req.body.content})
        await newPost.save()
        res.status(201).json(newPost)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
// put
// router.put("/:id", async (req,res) => {
// })

//get id
router.get("/:id", async(req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        if(!post) return res.status(400).json({message: "Cant find id in Collection"})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
//delete
router.delete("/:id", async(req,res)=>{
    try {
        const deleteId = await Post.findByIdAndDelete(req.params.id)
        if(!deleteId) return res.status(404).json({message : "Not data in table"})
        
        res.status(200).json({message: err.message})
        
    } catch (error) {
        res.status(500).json({message: err.message})
        
    }
})


module.exports = router