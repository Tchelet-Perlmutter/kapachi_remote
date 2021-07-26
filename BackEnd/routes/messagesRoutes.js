const express = require("express");
const messagesController = require("../controllers/messagesController");
const routersCalling = require("./commonRoutesFunction");

const router = express.Router();

exports.messagesRoutes = () => {
    routersCalling(Messages, router);
}


// module.exports = router;
