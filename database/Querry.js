const mongoose = require("mongoose");
const Game = require("./Game");

class Simpan {
  constructor() {
    this.voucher = voucher;
    this.uid = uid;
    this.variasi = variasi;
    this.harga = harga;
  }
}

async function simpanData() {
  try {
    const game = new Game({
      voucher: voucher,
      uid: uid,
      variasi: variasi,
      harga: harga,
    });
    await game.save();
    console.log(game);
  } catch (e) {
    console.log(e.message);
  }
}

async function cariData(id) {
  try {
    const game = await Game.findById(id);
    console.log(game.status);
    game.status = "Succses";
    console.log(game.status);
    console.log(game);
  } catch (e) {
    console.log(e.message);
  }
}

async function updateData(id, update) {
  try {
    const game = await Game.findByIdAndUpdate(id, { status: update });
    console.log(game);
  } catch (e) {
    console.log("Kode Unik Tidak Tidak Ditemukan");
  }
}

module.export = { simpanData, cariData, updateData };
