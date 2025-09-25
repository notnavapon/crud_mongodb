const express = require("express")
const router = express.Router()


const { getAllPost , createPost, getPostId, deletePostId, updatePost} = require("../controller/postController");


//get all data

router.get("/", getAllPost)

//post
router.post("/", createPost)

//put update Post
router.put("/:id", updatePost)

//get id
router.get("/:id", getPostId)

//delete
router.delete("/:id", deletePostId)


module.exports = router