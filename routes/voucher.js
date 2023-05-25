const express = require('express')
const Game = require('../models/Game')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('voucher')
})

router.get('/game/valorant', (req, res) => {
  const show_modal = false
  res.render('voucher/game/valo', { show_modal: show_modal })
})

router.get('/invoice', (req, res) => {
  res.render('./invoice/invoice')
})

router.post('/game/valorant', async (req, res) => {
  let variasi = req.body.variasi
  let harga = variasi.replace('VP', '00')
  const game = new Game({
    voucher: req.body.namaGame,
    uid: req.body.uid,
    variasi: variasi,
    harga: harga,
  })
  try {
    const show_modal = true // Cast to boolean
    const id = game.id
    const voucher = game.voucher
    const uid = game.uid
    const vp = game.variasi
    const tgl = game.tgl
    const status = game.status
    res.render('voucher/game/valo', { show_modal: show_modal, id: id, voucher: voucher, uid: uid, vp: vp, tgl: tgl, status, status })
    // await game.save()
    console.log('sukses simpan')
  } catch (e) {
    console.log(e)
  }
})
module.exports = router
