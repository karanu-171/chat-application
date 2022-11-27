const express = require("express")
const chatController = require('../controllers/chatControllers')

const router = express.Router()

router.post('/', chatController.saveChat);
router.get('/:room', chatController.getRoomChats);

module.exports = router;