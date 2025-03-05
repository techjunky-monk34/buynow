const express = require('express');
const router = express.Router();

router.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Input validation
    if (!name || !email || !phone || !message) {
        return res.status(400).send('All fields are required.');
    }

    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);
    res.send('Contact form submitted successfully');
});

module.exports = router;
