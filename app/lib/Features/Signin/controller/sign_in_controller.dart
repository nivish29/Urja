import 'dart:developer';
import 'package:app/Features/Homepage/presentation/homepage.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class SignInController extends GetxController {
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  var isLoading = false.obs;

  Future<void> signIn() async {
    isLoading.value = true;
    final url = Uri.parse('https://urja-3wj9.onrender.com/api/evUser/signin');

    try {
      log("Email: ${emailController.text}");
      log("Password: ${passwordController.text}");
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          "email": emailController.text.trim(),
          "password": passwordController.text.trim(),
        }),
      );

      log("Response status: ${response.statusCode}");
      log("Response body: ${response.body}");

      if (response.statusCode == 200 || response.statusCode == 201) {
        final data = jsonDecode(response.body);
        Get.to(() => Homepage());
        Get.snackbar('Success', 'Logged in successfully');
      } else {
        Get.snackbar('Error', 'Failed to sign in');
      }
    } catch (error) {
      log("Error: $error");
      Get.snackbar('Error', 'An error occurred: $error');
    } finally {
      isLoading.value = false;
    }
  }
}
