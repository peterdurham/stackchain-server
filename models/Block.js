const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlockSchema = new Schema({
  height: {
    type: Number,
    required: true,
  },
  builder: {
    type: String,
    required: true,
  },
  twitterURL: {
    type: String,
    required: true,
  },
  proofs: {
    type: [
      {
        amount: Number,
        miner: String,
        proofURL: String,
      },
    ],
  },
});

module.exports = Block = mongoose.model("book", BlockSchema);
