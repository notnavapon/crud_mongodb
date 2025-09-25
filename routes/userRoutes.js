const express = require("express")
const router = express.Router()
const User = require("../models/userModel")


router.get('/', async(req,res)=>{
    res.status(200).json({message: "api connect"})
})
router.post('/register', async (req, res)=>{
    try{
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        })

        await newUser.save()
        res.status(200).json({message: "Create user successfully: "+ newUser.username})

    }catch(error){
        res.status(400).json({message: error.message})
    }
})



module.exports = router