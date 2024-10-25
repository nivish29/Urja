import EVUser from '../models_main/EVUser.js';
import User from '../models_main/User.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ role: 'user' }).sort({ createdAt: -1 }); // Sort by 'createdAt' descending

        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }

        res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ message: 'Error retrieving users' });
    }
};


export const getAllEVUsers = async (req, res) => {
    try {
        const users = await EVUser.find();

        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }

        res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ message: 'Error retrieving users' });
    }
};

export const updateUserStatus = async (req, res) => {
    const { phone } = req.params; 
    const { card_details, aadhar, machine_setup, machine_uuid } = req.body; 

    const updates = {
        card_details,
        aadhar,
        machine_setup,
        machine_uuid,
        approved: true 
    };

    try {
        console.log(`Updating user with phone number: ${phone}`);
        console.log('Updates:', updates);

        const updatedUser = await User.findOneAndUpdate(
            { phone_number: phone },
            updates,
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
    }
};
