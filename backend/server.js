import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import bcrypt from 'bcrypt'; // To hash passwords

// Import the models from models.js
import { Farmer, Buyer, User } from './models.js'; // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 3000;
// const uri = 'mongodb+srv://shintreaditya05:aditya%40123@sih-elites.zdjd4.mongodb.net/';
const uri = 'mongodb+srv://salgaonkarsubodh:Subodh%402004@sih-elites.zdjd4.mongodb.net/Farmers_Connect?retryWrites=true&w=majority';


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
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send({ filePath: `/uploads/${req.file.filename}` });
});

// Add this route to fetch farmer details by farmerid
app.get('/farmer/:id', async (req, res) => {
    console.log('Received request for:', req.params.id);    
    try {
        const id = req.params.id;
        const farmer = await Farmer.findOne({ farmer_id: id });
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

// Add this route to fetch buyer details by buyerid
app.get('/buyer/:id', async (req, res) => {
    console.log('Received request for:', req.params.id);    
    try {
        const id = req.params.id;
        const buyer = await Buyer.findOne({ buyer_id: id });
        if (!buyer) {
            console.log('Buyer not found');
            return res.status(404).send('Buyer not found');
        }
        res.json(buyer);
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).send('Server error');
    }
});

// Signup route
app.post('/api/signup', async (req, res) => {
    const { username, password, role, name, contact, email } = req.body;

    try {
        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username is already taken' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const user = new User({ username, password: hashedPassword, role });
        await user.save();

        // Insert into Buyers or Farmers collection based on the role
        if (role === 'buyer') {
            // Ensure email is provided and unique
            if (!email) {
                return res.status(400).json({ message: 'Email is required for buyers' });
            }
            await Buyer.create({ buyer_id: user._id, name, contact, email });
        } else if (role === 'farmer') {
            await Farmer.create({ farmer_id: user._id, name, contact, email });
        }

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Server error:', error);
        if (error.code === 11000) { // Duplicate key error
            return res.status(400).json({ message: 'Duplicate key error' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});


// Login route
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User does not exist. Sign up first.' });
        }

        // Compare the hashed password with the provided password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        // Find role-specific details
        let userDetails = {};
        if (user.role === 'buyer') {
            userDetails = await Buyer.findOne({ buyer_id: user._id });
        } else if (user.role === 'farmer') {
            userDetails = await Farmer.findOne({ farmer_id: user._id });
        }

        // Respond with success and user details
        res.status(200).json({ message: 'Login successful', user: { ...user._doc, ...userDetails._doc } });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Serve static files from 'uploads' directory
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
