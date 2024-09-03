import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { User, Event, Community, UserCommunity } from './models.js';

const app = express();
const PORT = process.env.PORT || 3000;
const uri = 'mongodb+srv://shintreaditya05:aditya@123@sih-elites.zdjd4.mongodb.net/';

// Middleware to parse JSON bodies
app.use(express.json());

// CORS middleware to allow requests from frontend
app.use(cors());

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
    dbName: 'Farmers_Connect' //Database
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});