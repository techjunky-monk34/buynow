const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route to test the application
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

// Route to test POST requests
app.post('/test', (req, res) => {
    res.send('POST request received');
});

// Route to handle contact form submission
app.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);
    res.send('Contact form submitted successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});