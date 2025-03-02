const express = require('express');
const router = express.Router();

// Route to handle contact form submission
router.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);
    res.send('Contact form submitted successfully');
});

module.exports = router;
