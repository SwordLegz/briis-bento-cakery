const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// --------- Middleware Includes --------- //
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// --------- Route Includes --------- //
const userRouter = require('./routes/user.router');
const shopRouter = require('./routes/shop.router.js');
// const orderRouter = require('/routes/order.router.js');

// --------- Express Middleware --------- //
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// --------- Passport Session Configuration --------- //
app.use(sessionMiddleware);

// --------- START Passport Sessions --------- //
app.use(passport.initialize());
app.use(passport.session());

// --------- ROUTES --------- //
app.use('/api/user', userRouter);
app.use('/api/shop', shopRouter);
// app.use('/api/order', orderRouter);


// --------- START Server & Port --------- //
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
