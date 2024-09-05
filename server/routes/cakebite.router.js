const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('HIYA GET /api/cakebite');
    pool.query('SELECT * from "flavors";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('YO ERROR GET /api/flavors', error)
    });
})

module.exports = router;