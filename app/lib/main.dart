import 'package:app/Features/BatterySwap/presentation/battery_swap_screen.dart';
import 'package:app/Features/Homepage/presentation/homepage.dart';
import 'package:app/Features/Signin/presentation/sign_in_screen.dart';
import 'package:app/Features/Signup/presentation/sign_up_screen.dart';
import 'package:flutter/material.dart';
import 'package:get/get_navigation/src/root/get_material_app.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: BatterySwapScreen(),
    );
  }
}
