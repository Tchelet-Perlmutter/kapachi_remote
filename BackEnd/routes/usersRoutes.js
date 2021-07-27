const express = require("express");
const usersController = require("./../controllers/users");
const commonRourtes = requre("./commonRoutesFunction")

const router = express.Router();

router.use(commonRoutes);

module.exports = router;
