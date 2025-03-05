const express = require('express');
const router = express.Router();

// Define the contact route
router.get('/contact', (req, res) => {
    res.send('Contact Page');
});

module.exports = router;
