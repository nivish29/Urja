import 'dart:convert'; // Import this for jsonDecode
import 'package:app/Features/BatterySwap/presentation/battery_swap_screen.dart';
import 'package:app/Features/Payment/controller/payment_controller.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';

class Paymentscreen extends StatefulWidget {
  final String scannedData; // Make this required

  Paymentscreen({super.key, required this.scannedData});

  @override
  State<Paymentscreen> createState() => _PaymentscreenState();
}

class _PaymentscreenState extends State<Paymentscreen> {
  late Map<String, dynamic> parsedData; // To store parsed JSON data
  final PaymentController paymentController = Get.put(PaymentController());
  @override
  void initState() {
    super.initState();
    parseScannedData(); // Parse the scanned data when the widget is initialized
  }

  void parseScannedData() {
    try {
      parsedData = jsonDecode(widget.scannedData);
      print(parsedData);
    } catch (e) {
      print('Error parsing JSON: $e');
      parsedData = {};
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: Text('Process Payment'),
        leading: Icon(Icons.arrow_back_ios_new),
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Station Name',
              style: TextStyle(color: Colors.grey),
            ),
            SizedBox(height: 6),
            Container(
              width: double.infinity,
              decoration: BoxDecoration(
                color: Colors.grey.shade50,
                borderRadius: BorderRadius.circular(15),
              ),
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 15, horizontal: 10),
                child: Text(
                  parsedData['station_name'] ?? 'Unknown Station',
                  style: TextStyle(color: Colors.black),
                ),
              ),
            ),
            const SizedBox(height: 15),
            const Text(
              'Station Unique Id',
              style: TextStyle(color: Colors.grey),
            ),
            const SizedBox(height: 6),
            Container(
              width: double.infinity,
              decoration: BoxDecoration(
                color: Colors.grey.shade50,
                borderRadius: BorderRadius.circular(15),
              ),
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 15, horizontal: 10),
                child: Text(
                  '#${parsedData['battery_id'] ?? 'Unknown'}',
                  style: TextStyle(color: Colors.black),
                ),
              ),
            ),
            const SizedBox(height: 15),
            const Text(
              'Amount*',
              style: TextStyle(color: Colors.grey),
            ),
            const SizedBox(height: 6),
            Container(
              width: double.infinity,
              decoration: BoxDecoration(
                color: Colors.grey.shade50,
                borderRadius: BorderRadius.circular(15),
              ),
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 15, horizontal: 10),
                child: Text(
                  'Rs. ${parsedData['price_paid'] ?? '0'}', // Display price_paid
                  style: TextStyle(color: Colors.black),
                ),
              ),
            ),
            const SizedBox(height: 15),
            const Text(
              'Details',
              style: TextStyle(color: Colors.grey),
            ),
            const SizedBox(height: 6),
            Container(
              width: double.infinity,
              decoration: BoxDecoration(
                color: Colors.grey.shade50,
                borderRadius: BorderRadius.circular(15),
              ),
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 15, horizontal: 10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding: EdgeInsets.symmetric(vertical: 2),
                      child: Text(
                        'Name: ${parsedData['name'] ?? 'Unknown'}', // Display name
                        style: TextStyle(color: Colors.black54, fontSize: 13),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(vertical: 2),
                      child: Text(
                        'Amount: ${parsedData['price_paid'] ?? '0'} /-', // Display amount
                        style: TextStyle(color: Colors.black54, fontSize: 13),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 2),
                      child: Text(
                        'Registered Mobile: ${parsedData['phone_number'] ?? 'N/A'}', // Display phone number
                        style: TextStyle(color: Colors.black54),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: Padding(
        padding: const EdgeInsets.only(bottom: 30, left: 20, right: 20),
        child: GestureDetector(
          onTap: () async {
            Map<String, dynamic> paymentData = {
              'name': parsedData['name'] ?? 'Unknown',
              'phone_number': parsedData['phone_number'] ?? 'N/A',
              'transaction_id': parsedData['transaction_id'], 
              'station_name': parsedData['station_name'] ?? 'Unknown Station',
              'battery_id': parsedData['battery_id'] ?? 'Unknown',
              'price_paid': parsedData['price_paid'].toString(),
            };

            await paymentController.processPayment(paymentData);
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => BatterySwapScreen()),
            );
          },
          child: Container(
            width: double.infinity,
            height: 50,
            decoration: BoxDecoration(
              color: Colors.blueAccent,
              borderRadius: BorderRadius.circular(16),
            ),
            child: const Center(
              child: Text(
                'Proceed',
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.w400,
                  fontSize: 16,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
