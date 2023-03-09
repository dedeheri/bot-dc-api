const mongoose = require("mongoose");

const reference = mongoose.Schema(
  {
    image: { type: String },
    descrption: { type: String },
    gameName: { type: String },
  },
  { timestamps: true }
);

const referenceModel = mongoose.model("reference", reference);
module.exports = referenceModel;
