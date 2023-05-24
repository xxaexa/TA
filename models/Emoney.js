const mongoose = require("mongoose");

const emoneySchema = new mongoose.Schema({
  voucher: String,
  no: String,
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
    default: "Pending",
  },
});

module.exports = mongoose.model("Emoney", emoneySchema);
