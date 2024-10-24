import express from 'express';
import { authenticateUser, authorizeRole } from '../middleware/auth.js'; // Make sure the middleware paths are correct

const router = express.Router();

router.get('/admin', authenticateUser, authorizeRole('admin'), (req, res) => {
    res.status(200).json({ message: 'Welcome, Admin!' });
});

router.get('/user', authenticateUser, (req, res) => {
    res.status(200).json({ message: `Welcome, ${req.user.role}!` });
});

export default router;
