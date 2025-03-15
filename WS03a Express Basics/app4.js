const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to log request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

// Middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to check for X-Custom-Header in a specific route
const checkCustomHeader = (req, res, next) => {
    if (!req.headers['x-custom-header']) {
        return res.status(400).json({ error: 'X-Custom-Header is required' });
    }
    next();
};

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST requests to /submit
app.post('/submit', checkCustomHeader, (req, res) => {
    res.json({
        message: 'Data received',
        data: req.body
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
