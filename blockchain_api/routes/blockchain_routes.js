const express = require('express');
const router = express.Router();

const { 
    getAllBlockchains, 
    createBlockchain, 
    updateBlockchain, 
    deleteBlockchain, 
    getAllBlockchainsStatus 
} = require('../controllers/blockchain_controller');

router.get('/blockchains', getAllBlockchains);
router.post('/blockchains', createBlockchain);
router.put('/blockchains/:id', updateBlockchain);
router.delete('/blockchains/:id', deleteBlockchain);
router.get('/status', getAllBlockchainsStatus);

module.exports = router;
