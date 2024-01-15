const mongoose = require('mongoose');

const blockchainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
});

const Blockchain = mongoose.model('Blockchain', blockchainSchema);

module.exports = Blockchain;
