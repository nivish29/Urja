import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    transaction_id: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    station_name: {
        type: String,
        required: true,
    },
    battery_id: {
        type: String,
        required: true,
    },
    price_paid: {
        type: String,
        required: true,
    },
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;
