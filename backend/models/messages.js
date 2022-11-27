const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    author: {
        type: String,
    },
    room: {
        type: String

    },
    message: {
            type: String
    },
    
})

module.exports  = new mongoose.model('Message', messageSchema)

 