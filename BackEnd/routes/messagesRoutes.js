const express = require("express");
const messagesController = require("../controllers/messagesController");
const commonRoutes = require("./commonRoutesFunction");

const router = express.Router();

router.use(commonRoutes);

module.exports = router;
