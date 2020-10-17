const { Router } = require('express');
const express = require('express');
const router = express.Router();
const userRoutes = require('./user.route');

router.use('/use', userRoutes);

module.exports = router;