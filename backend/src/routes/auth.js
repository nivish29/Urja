import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import EVUser from '../models_main/EVUser.js';
import User from '../models_main/User.js'; // Ensure these model paths are correct
import { signin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signin', signin);

// EV User signup
router.post('/signup/ev', async (req, res) => {
    const { firstname, lastname, pincode, aadhar, email, password, phone_number, address } = req.body;

    try {
        const existingUser = await EVUser.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new EVUser({ firstname, lastname, pincode, aadhar, email, password: hashedPassword, phone_number, address });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id, role: 'ev_user' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token, user: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Error signing up' });
    }
});

// Admin/Customer signup
router.post('/signup/user', async (req, res) => {
    const { firstname, lastname, email, password, phone_number, address, card_details, city, state, pincode, aadhar, machine_setup, machine_uuid, approved, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            phone_number,
            address,
            card_details,
            city,
            state,
            pincode,
            aadhar,
            machine_setup,
            machine_uuid,
            approved,
            role: role || 'user', // Defaults to 'user' unless 'admin' is passed
        });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token, user: newUser });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error signing up' });
    }
});

router.get('/user/:phone_number', async (req, res) => {
    const { phone_number } = req.params;

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
