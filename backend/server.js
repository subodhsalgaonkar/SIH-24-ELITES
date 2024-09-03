import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';

// Import the Farmer model from models.js
import { Farmer } from './models.js'; // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 3000;
const uri = 'mongodb+srv://shintreaditya05:aditya%40123@sih-elites.zdjd4.mongodb.net/';

// Middleware to parse JSON bodies
app.use(express.json());

// CORS middleware to allow requests from frontend
app.use(cors());

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
    dbName: 'Farmers_Connect' // Database
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Configure multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // directory to save the uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // file name format
    }
});

const upload = multer({ storage: storage });

// Define your upload route
app.post('/upload', upload.single('file'), (req, res) => {
    // 'file' is the name of the form field
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send({ filePath: `/uploads/${req.file.filename}` });
});

// Add this route to fetch farmer details by username
app.get('/farmer/:username', async (req, res) => {
    console.log('Received request for:', req.params.username);
    try {
        const username = req.params.username;
        const farmer = await Farmer.findOne({ username: username });
        if (!farmer) {
            console.log('Farmer not found');
            return res.status(404).send('Farmer not found');
        }
        res.json(farmer);
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).send('Server error');
    }
});




// Serve static files from 'uploads' directory
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
