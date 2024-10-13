import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import bcrypt from 'bcrypt'; // To hash passwords

// Import the models from models.js
import { Farmer, Buyer, User, Crop } from './models.js'; // Ensure this path is correct

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

// Fetch farmer details by farmerid
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

// Fetch buyer details by buyerid
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

// Update farmer's Profile
app.post("/updateFarmer/:id", async (req, res) => {
    const { id } = req.params;
    const { documents, ...otherFields } = req.body; // Expecting documents to be an array and other fields to update

    try {
        const farmer = await Farmer.findOne({ farmer_id: id });
        if (!farmer) {
            return res.status(404).json({ message: "Farmer not found" });
        }

        // Update farmer's documents if needed
        if (documents) {
            farmer.documents = documents;
        }

        // Update other fields from req.body
        Object.keys(otherFields).forEach((field) => {
            farmer[field] = otherFields[field];
        });

        const updatedFarmer = await farmer.save();
        res.status(200).json(updatedFarmer);
    } catch (error) {
        console.error('Error updating farmer:', error);
        res.status(500).json({ message: "Error updating data" });
    }
});


// Update document title
app.post('/updateDocument/:id/:docId', async (req, res) => {
    const { id, docId } = req.params;
    const { title } = req.body;

    // Detailed logging for debugging
    console.log(`Received farmerId: ${id}`);
    console.log(`Received docId: ${docId}`);
    console.log(`Received title: ${title}`);

    // Check for missing parameters or body fields
    if (!id || !docId || !title) {
        return res.status(400).json({ message: 'Invalid request parameters' });
    }

    try {
        // Update the document title
        const result = await Farmer.updateOne(
            { farmer_id: id, 'documents._id': docId },
            { $set: { 'documents.$.title': title } }
        );

        if (result.nModified > 0) {
            res.status(200).json({ message: 'Document title updated successfully' });
        } else {
            res.status(404).json({ message: 'Document not found or no changes made' });
        }
    } catch (error) {
        console.error('Error updating document title:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to add a crop
app.post("/api/addCrop", upload.single("image"), async (req, res) => {
    const { name, quantity, phase, farmer_id } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        // Create a new crop with the provided farmer_id
        const newCrop = new Crop({
            name,
            quantity,
            phase,
            image,
            farmer_id // Use the farmer_id directly from the request body
        });

        // Save the crop to the database
        await newCrop.save();

        res.status(200).json(newCrop); // Respond with the saved crop
    } catch (error) {
        console.error("Error adding crop:", error);
        res.status(500).json({ message: "Error adding crop" });
    }
});


// Route to fetch all crops for a specific farmer
app.get('/api/crops/:farmer_id', async (req, res) => {
    const { farmer_id } = req.params;

    try {
        const crops = await Crop.find({ farmer_id });

        if (!crops || crops.length === 0) {
            return res.status(404).json({ message: 'No crops found for this farmer' });
        }

        res.status(200).json(crops);
    } catch (error) {
        console.error("Error fetching crops:", error);
        res.status(500).json({ message: "Error fetching crops" });
    }
});

// Route to update a crop
app.put('/api/updateCrop/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { name, quantity, phase } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        // Find the crop by ID
        const crop = await Crop.findById(id);
        if (!crop) {
            return res.status(404).json({ message: 'Crop not found' });
        }

        // Update crop details
        crop.name = name || crop.name;
        crop.quantity = quantity || crop.quantity;
        crop.phase = phase || crop.phase;
        crop.image = image || crop.image;

        // Save the updated crop
        const updatedCrop = await crop.save();

        res.status(200).json(updatedCrop);
    } catch (error) {
        console.error('Error updating crop:', error);
        res.status(500).json({ message: 'Error updating crop' });
    }
});

// Update the route to match frontend
app.delete('/api/crops/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Find and delete the crop by ID
        const result = await Crop.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Crop not found' });
        }

        res.status(200).json({ message: 'Crop deleted successfully' });
    } catch (error) {
        console.error('Error deleting crop:', error);
        res.status(500).json({ message: 'Error deleting crop' });
    }
});

// Serve static files from 'uploads' directory
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
