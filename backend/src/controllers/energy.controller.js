// controllers/energyTransactionController.js
import EnergyTransaction from '../models_main/energy.js';

export const createEnergyTransaction = async (req, res) => {
    const { energy, source,time } = req.body;
    // const userId = req.user._id;
    const userId = req.params.userId; 
    try {
        const newTransaction = new EnergyTransaction({
            energy,
            source,
            time,
            user: userId, // Associate the transaction with the user
        });

        await newTransaction.save();

        res.status(201).json({
            message: 'Energy transaction created successfully',
            transaction: newTransaction,
        });
    } catch (error) {
        console.error('Error creating energy transaction:', error);
        res.status(500).json({ message: 'Error creating energy transaction' });
    }
};

export const getLatestEnergyTransactions = async (req, res) => {
    const userId = req.params.userId; 

    try {
        const userTransactions = await EnergyTransaction.find({ user: userId });

        const sortedTransactions = userTransactions.sort((a, b) => {
            return parseInt(a.time) - parseInt(b.time);
        });

        const latestTransactions = sortedTransactions.slice(0, 15);

        res.status(200).json(latestTransactions);
    } catch (error) {
        console.error('Error fetching user energy transactions:', error);
        res.status(500).json({ message: 'Error fetching user energy transactions' });
    }
};

