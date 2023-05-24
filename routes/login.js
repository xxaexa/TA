const express = require("express");
const router = express.Router();

const Game = require("../models/Game");
router.get("/", (req, res) => {
  res.render("login");
});

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  const users = await Users.finfby;
});

router.get("/admin", async (req, res) => {
  const game = await Game.find({});
  res.render("./login/admin", { game: game });
});

module.exports = router;
