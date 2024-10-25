// models/EnergyTransaction.js
import mongoose from 'mongoose';

const energyTransactionSchema = new mongoose.Schema({
    time: {
        type: String,
    },
    energy: {
        type: Number,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', 
        required: true,
    },
});

const EnergyTransaction = mongoose.model('EnergyTransaction', energyTransactionSchema);

export default EnergyTransaction;
