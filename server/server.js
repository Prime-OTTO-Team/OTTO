
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const accountRouter = require('./routes/account.router');
const searchRouter = require('./routes/search.router');
const propertyRouter = require('./routes/property.router');
const adminPropertyRouter = require('./routes/admin.property.router.js');
const adminUserRouter = require('./routes/admin.user.router.js');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/account', accountRouter);
app.use('/api/search', searchRouter);
app.use('/api/property', propertyRouter);
app.use('/api/admin/property', adminPropertyRouter);
app.use('/api/admin/user', adminUserRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
