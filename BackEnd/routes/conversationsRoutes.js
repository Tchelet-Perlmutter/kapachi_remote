const express = require("express");
const conversationsController = require("../controllers/conversationsController");
const routersCalling = require("./commonRoutesFunction");

const router = express.Router();
routerCalling.routers(Conversations, router);

module.exports = router;


