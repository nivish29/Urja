import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './src/routes/auth.js';
import protectedRoutes from './src/routes/protectedRoutes.js';
import dotenv from 'dotenv';
import { connect } from './src/dbConfig/dbConfig.js';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import simulateRoute from './src/routes/simulate.route.js'; // Correct import
import userRoutes from './src/routes/userRoutes.js'; // Import user routes
import evUserRoutes from './src/routes/evUserRoutes.js'
import energyRoutes from './src/routes/energyRoutes.js'

// Load environment variables
dotenv.config();
connect(); // Connecting to database

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['https://urja-nufjtauij-nivish29s-projects.vercel.app', '*'],
        methods: ['GET', 'POST','PUT'],
    },
});

// Middleware setup
app.use(express.json());
app.use(cors({
    origin: 'https://urja-nufjtauij-nivish29s-projects.vercel.app',
    methods: ['GET', 'POST','PUT'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
}));

// Set io instance in the app
app.set('io', io);

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);
app.use('/api', simulateRoute); // Correct route for simulate
app.use('/api/user', userRoutes);
app.use('/api/evUser', evUserRoutes)
app.use('/api', energyRoutes)

// Socket.io setup
io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });

    socket.on('message', (data) => {
        console.log('Message received from client:', data);
        // You can emit back if necessary
    });
});

// Default route
app.get('/', (req, res) => {
    res.json({ msg: 'Hi' });
});

// Server listen
const PORT = process.env.PORT || 9001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the io instance as default for ES modules
export default io;
