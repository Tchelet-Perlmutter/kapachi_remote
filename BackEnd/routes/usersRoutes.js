const express = require("express");
const usersController = require("./../controllers/users");

const router = express.Router();

// ??? Why should I create a seperate router to every collection?
const router = express.Router();

exports.messagesRouters = () => {
    routerCalling(Users, router);
}

// module.exports = router;
