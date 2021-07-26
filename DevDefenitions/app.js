// All the things that are about Express. Requests arrive to this doccument which the main server created in, and all the middelwears are called here too, to connect to main router to the other relevant routers

const express = require("express");
const app = express();
// ??? Should i require mongodb too?

//requiring the routes files
const conversationsRoutes = require("./../routes/conversationsRoutes");
const messagesRoutes = require("./../routes/messagesRoutes");
const usersRoutes = require("./../routes/usersRoutes");

// Middlewear that convert the request in to Jason
app.use(express.jason());

app.get("kapachi/v1/:collection", (req, res, next) => {

    const collection = req.params.collection;

    // ??? Inside the .use function I need to put an argument which is a function? or a router? What happens if I put a router?
    switch (collection) {
        case "messages":
            app.use(messagesRoutes);
            break;
        case "users":
            app.use(usersRoutes);
            break;
        case "conversations":
            app.use(conversationsRoutes);
            break;
        default:
            res.status(400).json({
                status: "fail",
                message: "Invalid collection name"
            })
    }
})
module.exports = app;
