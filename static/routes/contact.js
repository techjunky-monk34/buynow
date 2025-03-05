const express = require('express');
const router = express.Router();
const emailjs = require('emailjs-com');

router.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Input validation
    if (!name || !email || !phone || !message) {
        return res.status(400).send('All fields are required.');
    }

    const emailMessage = {
        from_name: name,
        from_email: email,
        phone: phone,
        message: message
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailMessage)
        .then(() => {
            res.send('Message sent successfully!');
        })
        .catch((error) => {
            res.status(500).send('Failed to send message. Please try again later.');
        });
});

module.exports = router;
