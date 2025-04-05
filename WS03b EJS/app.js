const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    const message = 'So called users';
    const isLoggedIn = true;
  
    const users = [
      { name: 'Alice', email: 'alice@example.com', age: 25 },
      { name: 'Bob', email: 'bob@example.com', age: 30 },
      { name: 'Charlie', email: 'charlie@example.com', age: 28 }
    ];
  
    res.render('index', { message, isLoggedIn, users });
  });
  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
