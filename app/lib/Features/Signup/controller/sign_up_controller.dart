import 'dart:developer';
import 'package:app/Features/Homepage/presentation/homepage.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class SignUpController extends GetxController {
  final TextEditingController phoneNumberController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController firstNameController = TextEditingController();
  final TextEditingController lastNameController = TextEditingController();
  final TextEditingController pincodeController = TextEditingController();
  final TextEditingController addressController = TextEditingController();
  final TextEditingController aadharController = TextEditingController();
  var isLoading = false.obs;

  Future<void> signUp() async {
    isLoading.value = true;

    final String url = 'https://urja-3wj9.onrender.com/api/auth/signup/ev';
    try {
      final response = await http.post(
        Uri.parse(url),
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonEncode({
          'firstname': firstNameController.text,
          'lastname': lastNameController.text,
          'email': emailController.text,
          'password': passwordController.text,
          'phone_number': phoneNumberController.text,
          'address': addressController.text,
          'pincode': pincodeController.text,
          'aadhar': aadharController.text,
        }),
      );

      if (response.statusCode == 201) {
        // Handle success: Navigate to the next screen or show a success message
        final data = jsonDecode(response.body);
        Get.to(() => Homepage());
        print('User signed up successfully: ${data['user']}');
        // Optionally navigate to another screen
      } else {
        // Handle error
        Get.snackbar('Error', 'Failed to sign up: ${response.body}');
      }
    } catch (error) {
      print('Error occurred: $error');
      Get.snackbar('Error', 'Something went wrong. Please try again.');
    } finally {
      isLoading.value = false;
    }
  }
}
