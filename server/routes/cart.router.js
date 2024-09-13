const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// --------- NEW GET CART ROUTE --------- //
router.get('/', async (req,res) => {
    const userId = req.user.id;
    try {
        const result = await pool.query(`
            SELECT * FROM "pending_cart";
            `);
            res.send(result.rows);
    } catch (error)
 {
    console.log('ERROR in ur GET cart.router:', error);
    res.sendStatus(500);
 }})

 router.get('/pending', async (req,res) => {
    const userId = req.user.id;
    try {
        const result = await pool.query(`
            SELECT * FROM "pending_cart"
            WHERE user_id = ${userId};
            `);
            res.send(result.rows);
    } catch (error)
 {
    console.log('ERROR in ur GET cart.router:', error);
    res.sendStatus(500);
 }})


// --------- GET CART ROUTE --------- //
// router.get('/', (req, res) => {
//     console.log('YAYooYAY GET /api/cart from cart router:');
//     pool.query(`SELECT* FROM "orders"`)
//     .then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('ERROR in GET order router', error);
//         res.sendStatus(500);
//     })
// })

// --------- NEW POST CART ROUTE --------- //
router.post('/', async (req, res) => {
    console.log(req.body)
    const { user_id, flavor_id, flavor, image, quantity, price } = req.body;

    try {
        await pool.query(`
            INSERT INTO "pending_cart" ("user_id", "flavor_id", "flavor", "image", "is_egg_free", "is_dairy_free", "is_gluten_free", "is_vegan", "quantity", "price")
             VALUES ($1, $2, $3, $4, null, null, null, null, $5, $6);`,
            [user_id, flavor_id, flavor, image, quantity, price]
        );
        res.sendStatus(201);
    } catch (error) {
        console.log('Oopiezzz error adding to cart in cart.router:', error);
    }
});

// --------- POST CART ROUTE --------- //
// router.post('/', async (req, res) => {
//     const client = await pool.connect();

//     try {
//         const {
//             user_id,
//             date,
//             flavor_id,
//             is_egg_free,
//             is_dairy_free,
//             is_gluten_free,
//             is_vegan,
//             quantity
//          } = req.body;
//         await client.query('BEGIN')
//         const orderInsertResults = await client.query(`INSERT INTO "orders" ("user_id", "date")
//             VALUES ($1, $2)
//             RETURNING id;`, [user_id, date])

//         const orderId = orderInsertResults.rows[0].id;

//         const insertLineItemText = `INSERT INTO "order_items" ("order_id", "flavor_id", "is_egg_free", "is_dairy_free", "is_gluten_free", "is_vegan", "quantity")
//         VALUES ($1, $2, $3, $4, $5, $6, $7);`;
//         const insertLineItemValue = [orderId, flavor_id, is_egg_free, is_dairy_free, is_gluten_free, is_vegan, quantity];
//         await client.query(insertLineItemText, insertLineItemValue);

//         await client.query('COMMIT')
//         res.sendStatus(201);
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.log('ERROR POST /api/order in order router', error);
//         res.sendStatus(500)
//     } finally {
//         client.release()
//     }
// });

// --------- CORRECTLY WORKING DELETE ORDER ROUTE --------- //
router.delete('/pending/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id in cart.router is:', id)
    try {
        await pool.query(`DELETE FROM "pending_cart" WHERE "id" = $1;`, [id]);
        res.sendStatus(200);
    } catch (error) {
        console.log('hotDOG deleting didnt work in cart.router!!:', error);
        res.sendStatus(500);
    }
})


// ---------- EDIT PUT ROUTE ----------- //

router.put('/pending/:id', async (req, res) => {
    
    const id = req.params.id;
    const { quantity } = req.body;
    console.log('BEEP BEEP your EDIT/PUT cart.router for /api/edit/:id requestsss:', id, quantity);
    
    try {
        const result = await pool.query(`
            UPDATE "pending_cart"
            SET "quantity" = $1
            WHERE "id" = $2;
            `, [quantity, id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Sowwy, no edit' });
        }
        res.sendStatus(200);
    } catch (error) {
        console.log('No can doozies for edit in cart.router:', error);
        res.sendStatus(500);
    }
    // const sqlText = `
    // UPDATE "orders"
    // set "quantity" =$1;
    // `
    // const sqlValues = [req.body.id, req.body.quantity, req.params.id]
    // pool.query(sqlText, sqlValues)
    // .then(() => {
    //     res.sendStatus(200);
    // }).catch((error) => {
    //     console.log('WHOAA Error for ur PUT in cart.router:', error);
    //     res.sendStatus(500);
    // })
});

module.exports = router;


// --------- IDK? ---------- //


    