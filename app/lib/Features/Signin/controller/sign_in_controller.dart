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
    final url = Uri.parse('http://10.0.2.2:9001/api/evUser/signin');

    try {
      final response = await http.post(
        url,
        body: {
          "email": emailController.text,
          "password": passwordController.text,
        },
      );

      if (response.statusCode == 200 || response.statusCode == 201) {
        // Handle successful sign-in, e.g., save token or navigate
        final data = jsonDecode(response.body);
        // Process `data` as required
        Get.to(() => Homepage());
        Get.snackbar('Success', 'Logged in successfully');
      } else {
        // Handle error
        Get.snackbar('Error', 'Failed to sign in');
      }
    } catch (error) {
      log(error.toString());
      Get.snackbar('Error', 'An error occurred: $error');
    } finally {
      isLoading.value = false;
    }
  }
}
