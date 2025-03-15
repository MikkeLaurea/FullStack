const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data.json');
const TEXT_FILE = path.join(__dirname, 'data.txt');

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

// Route to read and return text file data
app.get('/list', (req, res) => {
    fs.readFile(TEXT_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.send(`<pre>${data}</pre>`);
    });
});

// Route to read JSON data and return as an HTML table
app.get('/json', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading JSON file');
        }
        const users = JSON.parse(data);
        let table = '<table border="1"><tr><th>Name</th><th>Email</th></tr>';
        users.forEach(user => {
            table += `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
        });
        table += '</table>';
        res.send(table);
    });
});

// POST route to add new user data to JSON file
app.post('/add', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading JSON file' });
        }
        const users = JSON.parse(data);
        const newUser = { name: req.body.name, email: req.body.email };
        users.push(newUser);
        fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error writing to JSON file' });
            }
            res.json({ message: 'User added successfully', user: newUser });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
