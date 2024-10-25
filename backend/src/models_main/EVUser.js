// models/EVUser.js
import mongoose from 'mongoose';

const EVUserSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    pincode: { type: String },
    aadhar: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: { type: String },
    address: { type: String },
    
}, { timestamps: true });

const EVUser = mongoose.model('EVUser', EVUserSchema);
export default EVUser;
