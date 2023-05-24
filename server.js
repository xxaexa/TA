const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const voucherRouter = require("./routes/voucher");
const loginRouter = require("./routes/login");

const Game = require("./models/Game");
const http = require("http");

mongoose.connect("mongodb://127.0.0.1:27017/exa");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
express.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/voucher", voucherRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/track", (req, res) => {
  res.render("track");
});

app.use("/voucher", voucherRouter);
app.use("/login", loginRouter);

app.listen(port, "0.0.0.0", (req, res) => {
  try {
    console.log("Server Berjalan Di " + port);
  } catch (e) {
    console.log(e.message);
  }
});
