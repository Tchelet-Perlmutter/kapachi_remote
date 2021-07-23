// defenitions, requirements and connection that not related to express
const slugify = require("slugify"); // ??? How do I now in which file to require the package?
const mongoose = require("mongoose");
const dotenv = require("dotenv");
otenv.config({ path: './config.env' });
const app = require("./app");// FIXME: Make sure all requirements are still good after doqumanttions positions

//Connecting the database with the express app

DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(con => {
  console.log(con.connections);
  console.log("DB connection successfull");
})

// making our server listen in our port

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
