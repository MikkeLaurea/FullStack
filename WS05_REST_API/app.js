// Task 1 and 2
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Item = require('./models/item');
const app = express();
dotenv.config();


app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/workshopdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));


app.get('/api/getall', async (req, res, next) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    next(err);
  }
});


app.get('/api/:id', async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
  } catch (err) {
    next(err);
  }
});


app.post('/api/add', async (req, res, next) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    next(err);
  }
});


app.put('/api/update/:id', async (req, res, next) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ error: 'Item not found' });
    res.json(updatedItem);
  } catch (err) {
    next(err);
  }
});


app.delete('/api/delete/:id', async (req, res, next) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    next(err);
  }
});

// Task 4
app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  res.status(500).json({ error: 'Server Error' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
