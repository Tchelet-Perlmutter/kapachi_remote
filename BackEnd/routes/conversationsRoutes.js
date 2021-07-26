const express = require("express");
const conversationsController = require("../controllers/conversationsController");
const routersCalling = require("./commonRoutesFunction");

const router = express.Router();

// ??? should I pass the req res as arguments to this function?
exports.conversationsRoutes = () => {
    routersCalling(Conversations, router);
}


// module.exports = router;


