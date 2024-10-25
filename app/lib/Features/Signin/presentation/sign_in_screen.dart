import 'package:app/Features/Homepage/presentation/homepage.dart';
import 'package:app/Features/Signin/controller/sign_in_controller.dart';
import 'package:app/Features/Signup/presentation/sign_up_screen.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SignInScreen extends StatelessWidget {
  final SignInController controller = Get.put(SignInController());
final _formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Form(
          key: _formKey,
          child: ListView(
            children: [
              const SizedBox(height: 20),
              const Text(
                'Hi!',
                style: TextStyle(fontSize: 50, fontWeight: FontWeight.w800),
              ),
              const Text(
                'Login',
                style: TextStyle(fontSize: 50, fontWeight: FontWeight.w800),
              ),
              const SizedBox(height: 20),
              _buildTextInputField('Email', controller.emailController),
              const SizedBox(height: 15),
              _buildTextInputField('Password', controller.passwordController,
                  isPassword: true),
              const SizedBox(height: 30),
              Obx(() => ElevatedButton(
                    onPressed: controller.isLoading.value
                        ? null
                        : () async{
                            if (_formKey.currentState!.validate()) {
                              await controller.signIn();
                            }
                            // Navigator.push(context, MaterialPageRoute(builder: (context)=>Homepage()));
                          },
                    child: controller.isLoading.value
                        ? CircularProgressIndicator(
                            color: Colors.white,
                          )
                        : const Text(
                            'Sign In',
                            style: TextStyle(color: Colors.white),
                          ),
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(vertical: 15),
                      backgroundColor: Colors.blueAccent,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(15),
                      ),
                    ),
                  )),
              const SizedBox(height: 10),
              Center(
                child: TextButton(
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => SignUpScreen()));
                  },
                  child: RichText(
                    text: TextSpan(
                      children: [
                        TextSpan(
                          text: "Don't have an account? ",
                          style: TextStyle(
                            color: Colors.grey.shade400,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        TextSpan(
                          text: "Sign Up",
                          style: TextStyle(
                            color: Colors.blue,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTextInputField(
      String labelText, TextEditingController controller,
      {bool isPassword = false}) {
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
              obscureText: isPassword,
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
