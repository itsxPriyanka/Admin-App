const mysql = require('mysql');
require('dotenv').config();



// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Create users table if it doesn't exist
const createUsersTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      fullName VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    )
  `;
  db.query(query, err => {
    if (err) {
      console.error('Error creating users table:', err);
    } else {
      console.log('Users table created or already exists');
    }
  });
};

// Initialize users table
createUsersTable();

const User = {
  create: (fullName, email, password, callback) => {
    const query = 'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)';
    db.query(query, [fullName, email, password], callback);
  },
  findByEmail: (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
  },
  getAllUsers: (callback) => {
    const query = 'SELECT id, fullName, email FROM users';
    db.query(query, callback);
  }
};

module.exports = User;
