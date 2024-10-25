// routes/energyTransactionRoutes.js
import express from 'express';
import { createEnergyTransaction,getLatestEnergyTransactions } from '../controllers/energy.controller.js';

const router = express.Router();

// POST route to create a new energy transaction
router.post('/energy/:userId', createEnergyTransaction);
router.get('/energy/:userId', getLatestEnergyTransactions); 

export default router;
