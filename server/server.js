import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import {ATLAS_URI} from './config.js'


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(ATLAS_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

const searchSchema = new mongoose.Schema({
  city: String,
  country: String,
  date: Date,
  weather: Object,
},{collection: 'Historial'});

const Search = mongoose.model('Search', searchSchema);

app.post('/sh', async (req, res) => {
  const { city, country, date, weather } = req.body;

  const newSearch = new Search({ city, country,date, weather });

  try {
    await newSearch.save();
    res.status(201).send(newSearch);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
