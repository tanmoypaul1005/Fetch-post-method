const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    address: {
        type: String,
    },
    phone: String,
    
})
module.exports=userSchema;