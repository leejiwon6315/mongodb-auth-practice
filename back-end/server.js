const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbAddress =
  "mongodb+srv://leejiwon6315:0106315@cluster0.5qrlw.mongodb.net/meemo?retryWrites=true&w=majority";

mongoose
  .connect(dbAddress, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world"));

app.listen(port, () => console.log(`listening on port ${port}`));
