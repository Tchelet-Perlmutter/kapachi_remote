// All the things that are about Express. Requests arrive to this doccument which the main server created in, and all the middelwears are called here too, to connect to main router to the other relevant routers

const express = require("express");
const app = express();
// ??? Should i require mongodb too?

//requiring the routes files
const conversationsRouter = require("./../routes/conversationsRoutes");
const messagesRouter = require("./../routes/messagesRoutes");
const usersRouter = require("./../routes/usersRoutes");

// Middlewear that convert the request in to Jason
app.use(express.jason());


/*
//importing the routers middelwears
app.use("kapachi/v1/users", usersRouter);
app.use("kspachi/v1/messages", messagesRouter);
app.use("kapachi/v1/conversations", conversationsRouter);
*/


app.get("kapachi/v1/:collection", (req, res, next) => {

    const colection = req.params.collection;

    switch (colection) {
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
