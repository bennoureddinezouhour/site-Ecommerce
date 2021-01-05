const mongoose = require("mongoose");

const histroriqueDSchema = mongoose.Schema({
  id: mongoose.ObjectId,
  url: String,
  name: String,
  price: Number,
  amount: Number,
});

module.exports = mongoose.model("historique", histroriqueDSchema);
