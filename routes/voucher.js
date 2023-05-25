const express = require('express')
const Game = require('../models/Game')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('voucher')
})

//!GAME
// aov
router.get('/game/aov', (req, res) => {
  res.render('voucher/game/aov')
})

router.get('/game/aov/invoice', (req, res) => {
  const show_modal = false
  res.render('./invoice/invoice', { show_modal: show_modal })
})

router.post('/game/aov', async (req, res) => {
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
    res.render('invoice/invoice', { show_modal: show_modal, id: id, voucher: voucher, uid: uid, vp: vp, tgl: tgl, status, status })
    // await game.save()
    console.log('sukses simpan')
  } catch (e) {
    console.log(e)
  }
})

// ff
router.get('/game/ff', (req, res) => {
  res.render('voucher/game/valo')
})

router.get('/game/ff/invoice', (req, res) => {
  const show_modal = false
  res.render('./invoice/invoice', { show_modal: show_modal })
})

router.post('/game/ff', async (req, res) => {
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
    res.render('invoice/invoice', { show_modal: show_modal, id: id, voucher: voucher, uid: uid, vp: vp, tgl: tgl, status, status })
    // await game.save()
    console.log('sukses simpan')
  } catch (e) {
    console.log(e)
  }
})

// gi
router.get('/game/gi', (req, res) => {
  res.render('voucher/game/valo')
})

router.get('/game/gi/invoice', (req, res) => {
  const show_modal = false
  res.render('./invoice/invoice', { show_modal: show_modal })
})

router.post('/game/gi', async (req, res) => {
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
    res.render('invoice/invoice', { show_modal: show_modal, id: id, voucher: voucher, uid: uid, vp: vp, tgl: tgl, status, status })
    // await game.save()
    console.log('sukses simpan')
  } catch (e) {
    console.log(e)
  }
})

// mlbb
router.get('/game/mlbb', (req, res) => {
  res.render('voucher/game/valo')
})

router.get('/game/mlbb/invoice', (req, res) => {
  const show_modal = false
  res.render('./invoice/invoice', { show_modal: show_modal })
})

router.post('/game/mlbb', async (req, res) => {
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
    res.render('invoice/invoice', { show_modal: show_modal, id: id, voucher: voucher, uid: uid, vp: vp, tgl: tgl, status, status })
    // await game.save()
    console.log('sukses simpan')
  } catch (e) {
    console.log(e)
  }
})

// pubg
router.get('/game/pubg', (req, res) => {
  res.render('voucher/game/valo')
})

router.get('/game/pubg/invoice', (req, res) => {
  const show_modal = false
  res.render('./invoice/invoice', { show_modal: show_modal })
})

router.post('/game/pubg', async (req, res) => {
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
    res.render('invoice/invoice', { show_modal: show_modal, id: id, voucher: voucher, uid: uid, vp: vp, tgl: tgl, status, status })
    // await game.save()
    console.log('sukses simpan')
  } catch (e) {
    console.log(e)
  }
})

// valorant
router.get('/game/valorant', (req, res) => {
  res.render('voucher/game/valo')
})

router.get('/game/valorant/invoice', (req, res) => {
  const show_modal = false
  res.render('./invoice/invoice', { show_modal: show_modal })
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
    res.render('invoice/invoice', { show_modal: show_modal, id: id, voucher: voucher, uid: uid, vp: vp, tgl: tgl, status, status })
    // await game.save()
    console.log('sukses simpan')
  } catch (e) {
    console.log(e)
  }
})

//END GAME

//!PULSA
router.get('/game/mix', (req, res) => {
  res.render('voucher/game/aov')
})

router.get('/game/mix/invoice', (req, res) => {
  const show_modal = false
  res.render('./invoice/invoice', { show_modal: show_modal })
})

router.post('/game/mix', async (req, res) => {
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
    res.render('invoice/invoice', { show_modal: show_modal, id: id, voucher: voucher, uid: uid, vp: vp, tgl: tgl, status, status })
    // await game.save()
    console.log('sukses simpan')
  } catch (e) {
    console.log(e)
  }
})

//END PULSA

module.exports = router
