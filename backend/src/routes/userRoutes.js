// src/routes/userRoutes.js
import express from 'express';
import User from '../models_main/User.js'; // Ensure this is the correct path to your User model
import { getAllUsers } from '../controllers/user.controller.js';
import { updateUserStatus } from '../controllers/user.controller.js';
const router = express.Router();


router.get('/getAllUsers', getAllUsers);
router.put('/:phone', updateUserStatus);


router.get('/:phone_number', async (req, res) => {
    const { phone_number } = req.params;
    console.log("Request for user details with phone number", phone_number)
    try {
        const user = await User.findOne({ phone_number });
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
