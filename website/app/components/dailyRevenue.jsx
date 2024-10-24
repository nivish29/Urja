import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const DailyRevenue = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [showDebitAlert, setShowDebitAlert] = useState(false);

    // Hardcoded values for demonstration
    const totalRevenue = 2000;
    const withdrawnAmount = 1000;
    const currentDayRevenue = 50;

    // Indian number formatting function
    const formatIndianNumber = (num) => {
        const string = num.toString();
        let result = '';
        let count = 0;

        // Handle the portion before decimal
        for (let i = string.length - 1; i >= 0; i--) {
            if (count === 3 && result.length === 3) {
                result = ',' + result;
            } else if (count === 5 && result.length >= 6) {
                result = ',' + result;
            } else if (count > 5 && (count - 5) % 2 === 0 && result.length > 6) {
                result = ',' + result;
            }
            result = string[i] + result;
            count++;
        }
        return result;
    };

    const handleDebit = () => {
        setShowDebitAlert(true);
        setTimeout(() => setShowDebitAlert(false), 3000);
    };

    return (
        <div className="mt-8 bg-white rounded-lg border border-gray-200">
            {/* Header */}
            <div className="p-4 border-b border-gray-100">
                <h2 className="text-xl text-gray-800 font-medium">Daily Revenue Tracker</h2>
            </div>

            <div className="p-6">
                <div className="flex flex-col gap-y-4">
                    {/* Left Section - Date and Revenue Info */}
                    <div className="space-y-6">
                        {/* Date Picker */}
                        <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                            <Calendar className="text-gray-400 mr-3" size={20} />
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="bg-transparent focus:outline-none text-gray-600"
                            />
                        </div>

                        {/* Revenue Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                <p className="text-sm text-gray-600 mb-1">Current Revenue</p>
                                <p className="text-2xl font-semibold text-blue-600">₹{formatIndianNumber(currentDayRevenue)}</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                                <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                                <p className="text-2xl font-semibold text-green-600">₹{formatIndianNumber(totalRevenue)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Balance and Withdrawal */}
                    <div className="space-y-6">
                        {/* Available Balance */}
                        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                            <p className="text-sm text-gray-600 mb-1">Available Balance</p>
                            <p className="text-2xl font-semibold text-indigo-600">
                                ₹{formatIndianNumber(totalRevenue - withdrawnAmount)}
                            </p>
                        </div>

                        {/* Debit Action */}
                        <button
                            onClick={handleDebit}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition-colors duration-200"
                        >
                            Debit Amount
                        </button>

                        {/* Withdrawn Amount */}
                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                            <p className="text-sm text-gray-600 mb-1">Withdrawn till date</p>
                            <p className="text-2xl font-semibold text-orange-600">₹{formatIndianNumber(withdrawnAmount)}</p>
                        </div>
                    </div>
                </div>

                {/* Success Alert */}
                {showDebitAlert && (
                    <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        <p className="text-green-700">Debit request has been initiated successfully!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DailyRevenue;