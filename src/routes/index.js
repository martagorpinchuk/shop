// const { Router } = require('express');
// const express = require('express');
// const router = express.Router();
// const userRoutes = require('./user.route');
const userRoutes = require('./user.route');
const express = require('express');
const router = express.Router();

router.use('/use', userRoutes);

module.exports = router;