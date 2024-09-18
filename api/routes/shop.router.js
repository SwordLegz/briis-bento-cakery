const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('HIYA GET /api/cakebite');
    pool.query('SELECT * from "cakebites";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('YO ERROR GET /api/cakebites', error)
        res.sendStatus(500);
    });
})

module.exports = router;