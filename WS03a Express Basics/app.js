const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// About route
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

// Services route
app.get('/services', (req, res) => {
    res.send('Services Page');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


