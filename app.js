// app.js
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'mysql-db', // Name of the MySQL service in Docker Compose
  user: 'root',
  password: '1234',
  database: 'testdb'
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Basic route
app.get('/', (req, res) => {
  res.send('Node.js and MySQL with Docker Compose!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
