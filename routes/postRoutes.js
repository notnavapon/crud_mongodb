import express from "express";
const router = express.Router()


import { getAllPost , createPost, getPostId, deletePostId, updatePost} from "../controller/postController.js";


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

export default router;