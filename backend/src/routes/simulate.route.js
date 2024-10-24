import express from 'express';
import sendMessage from './../controllers/simulate.controller.js'; // Make sure this path is correct

const router = express.Router();

router.post('/send-message', sendMessage);

export default router;
