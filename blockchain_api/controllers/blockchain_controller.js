const Blockchain = require('../models/model');

// GET all blockchains
exports.getAllBlockchains = async (req, res) => {
  try {
    const blockchains = await Blockchain.find();
    res.status(200).json({
      success: true,
      data: blockchains
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    });
  }
};

// POST a new blockchain
exports.createBlockchain = async (req, res) => {
  try {
    const { name, status, height } = req.body;

    if (!name || !status || !height) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields (name, status, height)'
      });
    }

    const newBlockchain = new Blockchain({ name, status, height });
    await newBlockchain.save();

    res.status(201).json({
      success: true,
      message: 'Blockchain added successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    });
  }
};

// UPDATE an existing blockchain
exports.updateBlockchain = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the blockchain with the specified ID exists
    let updatedBlockchain = await Blockchain.findById(id);
    if (!updatedBlockchain) {
      return res.status(404).json({
        success: false,
        error: 'Blockchain not found'
      });
    }

    // Update the existing blockchain
    updatedBlockchain = await Blockchain.findByIdAndUpdate(id, req.body, {
      new: true
    });

    res.status(200).json({
      success: true,
      message: 'Blockchain updated successfully',
      data: updatedBlockchain
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    });
  }
};


// DELETE an existing blockchain
exports.deleteBlockchain = async (req, res) => {
  try {
    const { id } = req.params;
    let deletedBlockchain = await Blockchain.findById(id);
    if (!deletedBlockchain) {
      return res.status(404).json({
        success: false,
        error: 'Blockchain not found'
      });
    }
    deletedBlockchain = await Blockchain.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Blockchain deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    });
  }
};

// GET status of all blockchains
exports.getAllBlockchainsStatus = async (req, res) => {
  try {
    const blockchains = await Blockchain.find();
    res.status(200).json({
      success: true,
      data: blockchains
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    });
  }
};
