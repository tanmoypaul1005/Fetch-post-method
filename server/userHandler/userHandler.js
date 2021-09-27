const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userSchema = require('../schema/userSchema');
const User = new mongoose.model("user", userSchema);


router.post('/add', async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            address:req.body.address,
            phone:req.body.phone
        });
        await newUser.save();
       console.log(" Data Insert successfully");
    } catch {
       console.log("Insert Fail" );
    }

});
module.exports = router;