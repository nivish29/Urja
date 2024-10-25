// src/routes/userRoutes.js
import express from 'express';
import { authenticateUser } from '../middleware/auth.js'; // Import the middleware
import { createTransaction ,getAllStationsRevenue,getAllTransactions,getStationRevenue,getTotalRevenue,searchTransactionByPhoneNumber} from '../controllers/swaps.controller.js';

import EVUser from '../models_main/EVUser.js';
import { getAllEVUsers, } from '../controllers/user.controller.js';
import {signinEVUser} from '../controllers/auth.controller.js'
const router = express.Router();

router.post('/transactions', createTransaction);
router.post('/signin', signinEVUser);
router.get('/transactions', getAllTransactions);
router.get('/revenue/total', getTotalRevenue);
router.get('/revenue/:station_name', getStationRevenue);
router.get('/revenue/all/stations', getAllStationsRevenue);
router.get('/users', getAllEVUsers);
router.get('/transactions/search/:phone_number', searchTransactionByPhoneNumber);


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
