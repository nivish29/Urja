const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const simulateRoute = require('./src/routes/simulate.route'); 

const app = express();
const server = http.createServer(app);
const io = new Server(server ,{
    cors: {
        origin: ['http://localhost:3000','*'],
        methods: ["GET", "POST"]
    }
});

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true
}));
app.set('io', io); 

app.use('/api', simulateRoute);

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });

    socket.on('message', (data) => {
        console.log('Message received from client:', data);
        // socket.emit('response', `Hello from server: ${data}`);
    });
});

app.get('/', (req, res) => {
    res.json({ msg: 'Hi' });
});

const PORT = process.env.PORT || 9001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = io;
