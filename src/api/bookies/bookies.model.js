const mongoose = require("mongoose");

const bookies = mongoose.Schema(
  {
    name: { type: String },
    handphone: { type: String },
  },
  { timestamps: true }
);

const bookiesModel = mongoose.model("bookies", bookies);
module.exports = bookiesModel;
