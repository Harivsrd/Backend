const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const users = [];

router.post("/register", (req,res) => {
    const { username, password } = req.body;

    if (!username || !password ) {
        return res.status(400).json({
            message : "Username and password required"
        });
    }

    const existingUser = users.find(
        user => user.username === username 
    );

    if (existingUser){
        return res.status(409).json({
            message: "User already exists"
        });
    }

    users.push({
        username, 
        password
    });

    res.status(201).json({
        message : "User registered succesfully",
        users
    });

});

router.post("/login", (req,res) => {

    const {username, password} = req.body;

    const user = users.find(
        user => 
            user.username === username &&
        user.password === password
    );

    if(!user) {
        return res.status(401).json({
            message : "Invalid credentials"
        })
    }

    res.status(200).json({
        message : "Login succesfull",
        user 
    });

})

router.get("/profile", authMiddleware , (req,res) => {
    res.json({
        message : "welcome to profile page",
        user: req.user 
    });
})

module.exports = router;