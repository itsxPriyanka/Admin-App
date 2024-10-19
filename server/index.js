const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const User = require('./models/databse'); // Import the User model
require('dotenv').config();
const cors = require('cors'); // Import cors middleware

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware
app.use(cors()); // Use cors middleware
app.use(bodyParser.json());

// Signup Route
app.post('/signup', async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    User.findByEmail(email, async (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }
      if (results.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      User.create(fullName, email, hashedPassword, (err, results) => {
        if (err) {
          return res.status(500).json({ message: 'Database error' });
        }
        res.status(201).json({ message: 'User created successfully' });
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, user: { fullName: user.fullName, email: user.email } });
  });
});

// Get all users
app.get('/users', (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(200).json(results);
  });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
