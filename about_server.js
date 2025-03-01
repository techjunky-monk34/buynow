const express = require('express');
const path = require('path');
const router = express.Router();

// Route to serve the about page
router.get('/about', (req, res) => {
    const aboutPath = path.join(__dirname, 'templates', 'about.html');
    console.log(`Serving about page from: ${aboutPath}`);
    res.sendFile(aboutPath);
});

module.exports = router;
