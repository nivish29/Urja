import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log("Database connected");
        });
        connection.on('error', (err) => {
            console.log("Error connecting to database" + err);
            process.exit();
        });
    }
    catch (error) {
        console.log("Something goes wrong!");
        console.log(error);
    }
}
// everytime we want to access our database, we
// have to connect. 