// src/routes/userRoutes.js
import express from 'express';
import { authenticateUser } from '../middleware/auth.js'; // Import the middleware
import EVUser from '../models/EVUser.js';

const router = express.Router();

// Retrieve normal user by phone number
router.get('/:phone_number', async (req, res) => { // Add middleware here
    const { phone_number } = req.params;

    try {
        const user = await EVUser.findOne({ phone_number });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ message: 'Error retrieving user', error: error.message });
    }
});

export default router;
