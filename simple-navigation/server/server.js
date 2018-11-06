const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./api/users");
const app = express();

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb://user:user12345@ds217360.mlab.com:17360/react_native_app_01",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MONGODB CONNECTED"))
  .catch(err => console.log(err));

app.use("/", users);
const port = 5000;

app.listen(port, () => console.log(`Server running in ${port}`));
