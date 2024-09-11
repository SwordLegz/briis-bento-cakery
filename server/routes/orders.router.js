const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', async (req, res) => {
    console.log('YOOKOOSOO LOOK silly goose at /api/orders:', req.body);

    const {
        user_id,
        date,
        isDone,
        cartItems
    } = req.body;

    const client = await pool.connect();
    
    try {
        await client.query('BEGIN'); // STARTS TRANSACTION //
        // INSERTS ORDER DATA //
        const orderResult = await client.query(`
            INSERT INTO "orders" ("user_id", "date", "isDone")
            VALUES ($1, $2, $3)
            RETURNING id;
            `,
            [user_id, date, isDone]
        );

        const orderId = orderResult.rows[0].id;

        // INSERT ORDER ITEMS //
        const insertItemsPromises = cartItems.map(cakebite => {
            const { flavor_id, is_egg_free, is_dairy_free, is_gluten_free, is_vegan, quantity } = cakebite;
            return client.query(`
                INSERT INTO "order_items" ("order_id", "flavor_id", "is_egg_free", "is_dairy_free", "is_gluten_free", "is_vegan", "quantity")
                VALUES ($1, $2, $3, $4, $5, $6, $7);
                `,
            [orderId, flavor_id, is_egg_free, is_dairy_free, is_gluten_free, is_vegan, quantity]
            );
        });

        await Promise.all(insertItemsPromises);
        await client.query('COMMIT'); // COMMIT TRANSACTION
        res.sendStatus(201); // ORDER CREATED SUCCESSFULLY //
        console.log('good job the order is a SUCCESS!');
    } catch (error) {
        await client.query('ROLLBACK'); //ROLLBACK TRANSACTION ON ERROR //
        console.log('OH NOOO error processing order:', error);
        res.sendStatus(500);
    } finally {
        client.release(); // RELEASE CLIENT BACK TO THE POOL
    }
});

module.exports = router;