const express = require("express");
const Game = require("../models/Game");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("voucher");
});

router.get("/game/valorant", (req, res) => {
  res.render("voucher/game/valo");
});

router.post("/game/valorant", async (req, res) => {
  const game = new Game({
    voucher: req.body.namaGame,
    uid: req.body.uid,
    variasi: req.body.variasi,
    harga: req.body.harga,
  });
  try {
    await game.save();
    res.redirect("/");
    console.log("sukses simpan");
  } catch (e) {
    console.log(message.e);
  }
});

module.exports = router;
