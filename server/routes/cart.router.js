const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// --------- GET CART ROUTE --------- //
// router.get('/', (req, res) => {
//     pool.query(`SELECT* FROM "orders"`)
//     .then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('ERROR in GET order router', error);
//         res.sendStatus(500);
//     })
// })

// --------- POST CART ROUTE --------- //
router.post('/', (req, res) => {

    
        const {
            user_id,
            date,
            flavor_id,
            is_egg_free,
            is_dairy_free,
            is_gluten_free,
            is_vegan,
            quantity
         } = req.body;
        await client.query('BEGIN')
        const orderInsertResults = await client.query(`INSERT INTO "orders" ("user_id", "date")
            VALUES ($1, $2)
            RETURNING id;`, [user_id, date])

        const orderId = orderInsertResults.rows[0].id;

        const insertLineItemText = `INSERT INTO "order_items" ("order_id", "flavor_id", "is_egg_free", "is_dairy_free", "is_gluten_free", "is_vegan", "quantity")
        VALUES ($1, $2, $3, $4, $5, $6, $7);`;
        const insertLineItemValue = [orderId, flavor_id, is_egg_free, is_dairy_free, is_gluten_free, is_vegan, quantity];
        await client.query(insertLineItemText, insertLineItemValue);

        await client.query('COMMIT')
        res.sendStatus(201);
    } 
    // catch (error) {
    //     await client.query('ROLLBACK')
    //     console.log('ERROR POST /api/order in order router', error);
    //     res.sendStatus(500)
    // } finally {
    // }
);

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