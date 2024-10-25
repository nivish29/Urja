import 'dart:math';

import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class PaymentController extends GetxController {
  Future<void> processPayment(Map<String, dynamic> paymentData) async {
    final url =
        Uri.parse('https://urja-3wj9.onrender.com/api/evUser/transactions');

    try {
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode(paymentData),
      );
      print(paymentData.toString());
      print(response.body);

      if (response.statusCode == 200) {
        // Handle successful response
        Get.snackbar('Success', 'Payment processed successfully');
        // Navigate to the next screen if needed
      } else {
        // Handle error response
        Get.snackbar('Error', 'Failed to process payment: ${response.body}');
      }
    } catch (error) {
      Get.snackbar('Error', 'An error occurred: $error');
    }
  }
}
