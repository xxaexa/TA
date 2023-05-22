const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

const Game = require("./database/Game");
const Querry = require("./database/Querry");
const http = require("http");

mongoose.connect("mongodb://127.0.0.1:27017/exa");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/track", (req, res) => {
  res.render("track");
});

app.get("/voucher", (req, res) => {
  res.render("voucher");
});

// app.post("/voucher", (req, res) => {
//   const simpanData = new Querry();
//   const voucher = req.bodyParser.voucher;
//   const uid = req.bodyParser.uid;
//   const variasi = req.bodyParser.variasi;
//   const harga = req.bodyParser.harga;
//   simpanData();
// });

app.listen(port, "0.0.0.0", (req, res) => {
  try {
    console.log("Server Berjalan Di " + port);
  } catch (e) {
    console.log(e.message);
  }
});
