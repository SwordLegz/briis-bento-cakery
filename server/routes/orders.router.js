const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('YOOKOOSOO LOOK silly goose at /api/orders:', req.body);
    // pool.query('INSERT')
    
})

module.exports = router;