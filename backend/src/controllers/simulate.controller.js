const sendMessage = (req, res) => {
    const io = req.app.get('io');

    if (io) {
        const { index,removeIdx, action } = req.body; 
        let responseMessage;
        if (action === 'insert') {
            io.emit('insert', { index:index,removeIdx:removeIdx, text: 'Insert' });
            responseMessage = `Inserted text at index ${index}`;
        } else if (action === 'remove'){
            io.emit('remove', { index:index, removeIdx:removeIdx,text: 'Remove' });
            responseMessage = `Removed text at index ${index}`;
        } else {
            return res.status(400).json({ error: 'Invalid action. Use "insert" or "remove".' });
        }

        res.json({ status: responseMessage });
    } else {
        res.status(500).json({ error: 'Socket.io instance not found' });
    }
};

module.exports = { sendMessage };
