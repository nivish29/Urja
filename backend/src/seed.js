import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Transaction from './models_main/swaps.js'; // Adjust this path according to your project structure

dotenv.config();

const transactions = [
    {
        name: "Rahul Sharma",
        phone_number: "9876543210",
        transaction_id: "txn_001",
        date: "2024-10-20T09:15:00Z",
        station_name: "Indira Nagar Charging Station",
        battery_id: "battery_001",
        price_paid: "250" // Realistic price for a charging session
    },
    {
        name: "Priya Verma",
        phone_number: "8765432109",
        transaction_id: "txn_002",
        date: "2024-10-21T10:30:00Z",
        station_name: "MG Road Charging Station",
        battery_id: "battery_002",
        price_paid: "300" // Slightly higher for a fast charging session
    },
    {
        name: "Suresh Gupta",
        phone_number: "7654321098",
        transaction_id: "txn_003",
        date: "2024-10-22T11:45:00Z",
        station_name: "Connaught Place Charging Station",
        battery_id: "battery_003",
        price_paid: "200" // Average price for a standard charge
    },
    {
        name: "Neha Joshi",
        phone_number: "4321098765",
        transaction_id: "txn_004",
        date: "2024-10-23T14:00:00Z",
        station_name: "Gurgaon Sector 14",
        battery_id: "battery_004",
        price_paid: "320" // Price reflecting high demand area
    },
    {
        name: "Vikram Singh",
        phone_number: "5432109876",
        transaction_id: "txn_005",
        date: "2024-10-24T15:15:00Z",
        station_name: "Juhu Beach Charging Station",
        battery_id: "battery_005",
        price_paid: "275" // Premium charging station price
    },
    {
        name: "Anjali Rao",
        phone_number: "6543210987",
        transaction_id: "txn_006",
        date: "2024-10-25T09:30:00Z",
        station_name: "Indira Nagar Charging Station",
        battery_id: "battery_006",
        price_paid: "250" // Realistic price for a charging session
    },
    {
        name: "Ravi Choudhary",
        phone_number: "1098765432",
        transaction_id: "txn_007",
        date: "2024-10-26T10:45:00Z",
        station_name: "MG Road Charging Station",
        battery_id: "battery_007",
        price_paid: "290" // Higher price for a fast charge
    },
    {
        name: "Kavita Mehta",
        phone_number: "2109876543",
        transaction_id: "txn_008",
        date: "2024-10-27T12:00:00Z",
        station_name: "Connaught Place Charging Station",
        battery_id: "battery_008",
        price_paid: "220" // Mid-range price
    },
    {
        name: "Amit Patel",
        phone_number: "3210987654",
        transaction_id: "txn_009",
        date: "2024-10-28T13:15:00Z",
        station_name: "Gurgaon Sector 14",
        battery_id: "battery_009",
        price_paid: "300" // Slightly higher for a fast charging session
    },
    {
        name: "Sofia Khan",
        phone_number: "0987654321",
        transaction_id: "txn_010",
        date: "2024-10-29T14:30:00Z",
        station_name: "Juhu Beach Charging Station",
        battery_id: "battery_010",
        price_paid: "260" // Reasonable charge for an eco-friendly station
    },
    {
        name: "Mohan Sharma",
        phone_number: "1234567890",
        transaction_id: "txn_011",
        date: "2024-10-30T09:00:00Z",
        station_name: "Indira Nagar Charging Station",
        battery_id: "battery_011",
        price_paid: "275" // Premium charging station price
    },
    {
        name: "Anita Desai",
        phone_number: "0987654322",
        transaction_id: "txn_012",
        date: "2024-10-31T11:15:00Z",
        station_name: "MG Road Charging Station",
        battery_id: "battery_012",
        price_paid: "300" // Slightly higher for a fast charging session
    },
    {
        name: "Ajay Singh",
        phone_number: "1122334455",
        transaction_id: "txn_013",
        date: "2024-11-01T12:30:00Z",
        station_name: "Connaught Place Charging Station",
        battery_id: "battery_013",
        price_paid: "200" // Average price for a standard charge
    },
    {
        name: "Pooja Verma",
        phone_number: "5566778899",
        transaction_id: "txn_014",
        date: "2024-11-02T13:45:00Z",
        station_name: "Gurgaon Sector 14",
        battery_id: "battery_014",
        price_paid: "320" // Price reflecting high demand area
    },
    {
        name: "Suresh Kumar",
        phone_number: "6677889900",
        transaction_id: "txn_015",
        date: "2024-11-03T15:00:00Z",
        station_name: "Juhu Beach Charging Station",
        battery_id: "battery_015",
        price_paid: "275" // Premium charging station price
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await Transaction.deleteMany(); // Clear the collection before seeding
        await Transaction.insertMany(transactions); // Insert the dummy data

        console.log('Dummy data inserted successfully!');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    }
};

seedDatabase();
