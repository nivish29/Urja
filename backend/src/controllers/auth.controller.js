import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import EVUser from '../models_main/EVUser.js';
import User from '../models_main/User.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }) || await EVUser.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            token,
            user: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                phone_number: user.phone_number,
                address: user.address,
                card_details: user.card_details,
                city: user.city,
                state: user.state,
                pincode: user.pincode,
                aadhar: user.aadhar,
                machine_setup: user.machine_setup,
                machine_uuid: user.machine_uuid,
                approved: user.approved,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ message: 'Error signing in' });
    }
};

export const signinEVUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await EVUser.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'EVUser not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            token,
            user: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                phone_number: user.phone_number,
                address: user.address,
                pincode: user.pincode,
                aadhar: user.aadhar,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Error signing in EVUser:', error);
        res.status(500).json({ message: 'Error signing in EVUser' });
    }
};


