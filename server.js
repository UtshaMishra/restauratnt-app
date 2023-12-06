const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/restaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Define Schema and Model for Menu
const menuSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
});
const Menu = mongoose.model('Menu', menuSchema);

// API Endpoints
app.get('/menu', async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more endpoints for CRUD operations

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});