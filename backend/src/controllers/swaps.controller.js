// controllers/transactionController.js
import Station from '../models_main/station.js';
import Transaction from '../models_main/swaps.js';

export const createTransaction = async (req, res) => {
    const { name, phone_number, transaction_id, date, station_name, battery_id,price_paid } = req.body;
    console.log(req.body);
    try {
        const newTransaction = new Transaction({
            name,
            phone_number,
            transaction_id,
            date: new Date(),
            station_name,
            battery_id,
            price_paid, 
        });

        await newTransaction.save();
        await Station.findOneAndUpdate(
            { name: station_name },
            { $inc: { revenue: price_paid, user_visited_count: 1 } },
            { new: true, upsert: true } 
        );
        res.status(201).json({ message: 'Transaction created successfully', transaction: newTransaction });
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ message: 'Error creating transaction' });
    }
};

export const getTotalRevenue = async (req, res) => {
    try {
        const totalRevenue = await Station.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: "$revenue" }
                }
            }
        ]);

        res.status(200).json({
            totalRevenue: totalRevenue[0] ? totalRevenue[0].total : 0 // Handle case with no stations
        });
    } catch (error) {
        console.error('Error fetching total revenue:', error);
        res.status(500).json({ message: 'Error fetching total revenue' });
    }
};

export const getStationRevenue = async (req, res) => {
    const { station_name } = req.params;

    try {
        const station = await Station.findOne({ name: station_name });

        if (!station) {
            return res.status(404).json({ message: 'Station not found' });
        }

        res.status(200).json({
            station_name: station.name,
            revenue: station.revenue,
        });
    } catch (error) {
        console.error('Error fetching station revenue:', error);
        res.status(500).json({ message: 'Error fetching station revenue' });
    }
};

export const getAllStationsRevenue = async (req, res) => {
    try {
       
        const stations = await Station.find({}, { name: 1, revenue: 1, user_visited_count: 1 });

        res.status(200).json(stations);
    } catch (error) {
        console.error('Error fetching stations revenue:', error);
        res.status(500).json({ message: 'Error fetching stations revenue' });
    }
};

export const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find(); 

        if (!transactions || transactions.length === 0) {
            return res.status(404).json({ message: 'No transactions found' });
        }

        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error retrieving transactions:', error);
        res.status(500).json({ message: 'Error retrieving transactions', error: error.message });
    }
};

export const searchTransactionByPhoneNumber = async (req, res) => {
    const { phone_number } = req.params; 

    try {
        const transactions = await Transaction.find({  phone_number }); 
        
        if (!transactions || transactions.length === 0) {
            return res.status(404).json({ message: 'No transactions found for this phone number' });
        }

        res.status(200).json(transactions); 
    } catch (error) {
        console.error('Error searching transactions:', error);
        res.status(500).json({ message: 'Error searching transactions', error: error.message });
    }
};
