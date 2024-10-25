import 'package:app/Features/Signup/controller/sign_up_controller.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class AddDetailsScreen extends StatefulWidget {
  const AddDetailsScreen({super.key});

  @override
  State<AddDetailsScreen> createState() => _AddDetailsScreenState();
}

class _AddDetailsScreenState extends State<AddDetailsScreen> {
  final _formKey = GlobalKey<FormState>();
  final sc = Get.find<SignUpController>();
  // Controllers for the input fields

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: const Text('Add Details'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, color: Colors.black),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Form(
            key: _formKey,
            child: Obx(() {
              return ListView(
                children: [
                  const SizedBox(height: 20),
                  _buildTextInputField('First Name', sc.firstNameController),
                  const SizedBox(height: 15),
                  _buildTextInputField('Last Name', sc.lastNameController),
                  const SizedBox(height: 15),
                  _buildTextInputField('Pincode', sc.pincodeController),
                  const SizedBox(height: 15),
                  _buildTextInputField('Home Address', sc.addressController),
                  const SizedBox(height: 15),
                  _buildTextInputField('Aadhar Number', sc.aadharController),
                  const SizedBox(height: 30),
                  ElevatedButton(
                    onPressed: () async {
                      if (_formKey.currentState!.validate()) {
                        // Call the signUp method
                        await sc.signUp();
                      }
                    },
                    child: sc.isLoading.value
                        ? CircularProgressIndicator(color: Colors.white)
                        : const Text(
                            'Submit',
                            style: TextStyle(color: Colors.white),
                          ),
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(vertical: 15),
                      backgroundColor:
                          Colors.blueAccent, // Adjust color if needed
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(15),
                      ),
                    ),
                  ),
                ],
              );
            })),
      ),
    );
  }

  // TextInputField widget
  Widget _buildTextInputField(
      String labelText, TextEditingController controller) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          labelText,
          style: const TextStyle(color: Colors.grey),
        ),
        const SizedBox(height: 6),
        Container(
          width: double.infinity,
          decoration: BoxDecoration(
            color: Colors.grey.shade50,
            borderRadius: BorderRadius.circular(15),
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 10),
            child: TextFormField(
              controller: controller,
              decoration: InputDecoration(
                border: InputBorder.none,
                hintText: 'Enter $labelText',
                hintStyle: TextStyle(
                    color: Colors.grey.shade400,
                    fontWeight: FontWeight.w400,
                    fontSize: 14),
              ),
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Please enter $labelText';
                }
                return null;
              },
            ),
          ),
        ),
      ],
    );
  }
}
