const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// --------- GET ORDER ROUTE --------- //
router.get('/', (req, res) => {
    pool.query(`SELECT* FROM "orders"`)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR in GET order router', error);
        res.sendStatus(500);
    })
})

// --------- POST ORDER ROUTE --------- //
router.post('/', async (req, res) => {
    const client = await pool.connect();

    try {
        const {
            user_first_name,
            user_last_name,
            email,
            total,
            cakebites
        } = req.body;
        await client.query('BEGIN')
        const orderInsertResults = await client.query(``)

        const orderId = orderInsertResults.rows[0].id;

        await Promise.all(flavors.map(flavor => {
            const insertLineItemText = ``;
            const insertLineItemValue = [];
            return client.query(insertLineItemText, insertLineItemValue);
        }));

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('ERROR POST /api/order in order router', error);
        res.sendStatus(500)
    }
});

// --------- DELETE ORDER ROUTE --------- //

router.delete('/:id', (req,res) => {
    pool.query('DELETE FROM "orders" WHERE id=$1', [req.params.id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('YEEHAW ERROR DELETE /api/order', error);
        res.sendStatus(500);
    })
});

module.exports = router;