const Message = require("../models/messages")

const saveChat = async (req, res) =>{

    const chatBody= req.body
    try {

        chat = new Message(chatBody)

        const savedChat = await chat.save()
        res.status(200).send(savedChat)
    } catch (error) {
        console.log(error)
    }
}

const getRoomChats = async (req, res) =>{
    const {room} = req.params;
    try {
        const chats = await Message.find({room:room})
        res.status(200).send(chats)
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    saveChat,
    getRoomChats
}