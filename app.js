const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
dotenv.config();

//database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));
//request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//set view engine
app.set("view engine", "ejs");
//set static folder
app.use(express.static(path.join(__dirname, "public")));
//cookieparser
app.use(cookieParser(process.env.COOKIE_SECRET));
//route

//error handeler
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
