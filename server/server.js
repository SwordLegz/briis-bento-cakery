const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// --------- Middleware Includes --------- //
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// --------- Route Includes --------- //
const userRouter = require('./routes/user.router');

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

const cakeBiteRouter = require('./routes/cakebite.router.js');
app.use('/api/cakebite', cakeBiteRouter);



// --------- START Server & Port --------- //
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
