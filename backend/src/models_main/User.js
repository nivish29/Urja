// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    phone_number: { type: String },
    address: { type: String },
    card_details: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    aadhar: { type: String },
    machine_setup: { type: Boolean, default: false },
    machine_uuid: { type: String },
    approved: { type: Boolean, default: false },
    role: { type: String, default: 'user' }, // Defaults to 'user', but can be 'admin'
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;
