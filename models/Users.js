const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: String,
  password: String,
  createdAt: {
    immutable: true,
    type: Date,
    default: () => Date.now(),
  },
  status: String,
});

module.exports = mongoose.model("User", userSchema);
