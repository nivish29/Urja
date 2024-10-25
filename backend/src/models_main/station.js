import mongoose from 'mongoose';

const stationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    revenue: {
        type: Number,
        default: 0,
    },
    user_visited_count: {  // New field for counting user visits
        type: Number,
        default: 0,
    }
});

const Station = mongoose.model('Station', stationSchema);
export default Station;
