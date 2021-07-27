const express = require("express");
const conversationsController = require("../controllers/conversationsController");
const commonRoutes = require("./commonRoutesFunction");

const router = express.Router();

router.use(commonRoutes);

module.exports = router;


