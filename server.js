<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.get('/about', (req, res) => {
    const aboutPath = path.join(__dirname, 'templates', 'about.html');
    console.log(`Serving about page from: ${aboutPath}`);
    res.sendFile(aboutPath);



});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
=======
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
>>>>>>> 018ec50f08ee772e314dac9aa13f6d5d836cb188
