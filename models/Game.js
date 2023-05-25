const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  voucher: String,
  uid: String,
  createdAt: {
    immutable: true,
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  variasi: String,
  harga: Number,
  status: {
    type: String,
    default: 'Pending',
  },
})

module.exports = mongoose.model('Game', gameSchema)
