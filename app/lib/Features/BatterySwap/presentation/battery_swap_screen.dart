import 'dart:developer';

import 'package:app/Features/BatterySwap/controller/battery_swap_controller.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:lottie/lottie.dart';

class BatterySwapScreen extends StatefulWidget {
  const BatterySwapScreen({super.key});

  @override
  State<BatterySwapScreen> createState() => _BatterySwapScreenState();
}

class _BatterySwapScreenState extends State<BatterySwapScreen> {
  final BatterySwapController controller = Get.put(BatterySwapController());
  IO.Socket? socket;

  Color containerColor = Colors.green;

  @override
  void initState() {
    super.initState();

    socket = IO.io('http://192.168.1.2:9001', <String, dynamic>{
      'transports': ['websocket'],
      'autoConnect': true,
    });

    socket?.on('connect', (_) {
      print('Connected to server: ${socket?.id}');
      socket?.emit('message', 'Hello from Flutter client');
    });
    socket?.on('insert', (data) {
      controller.setInsertData(data['index'],data['removeIdx'], true);
    });

    socket?.on('remove', (data) {
      controller.setInsertData(data['index'],data['removeIdx'], false);
    });

    socket?.on('connect_error', (err) {});

    socket?.on('disconnect', (_) {
      print('Disconnected from server');
    });
  }

  @override
  void dispose() {
    socket?.disconnect();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: Text('Battery Swaps'),
        leading: Icon(Icons.arrow_back_ios_new),
      ),
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '*Follow the instructions',
                  style: TextStyle(color: Colors.black),
                ),
                SizedBox(height: 16),
                Expanded(
                  child: GridView.builder(
                    gridDelegate:
                        const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 4,
                      crossAxisSpacing: 10,
                      mainAxisSpacing: 10,
                    ),
                    itemCount: 16,
                    itemBuilder: (context, index) {
                      return Obx(() {
                        if (index == controller.insertIndex.value) {
                          return _buildInsertContainer(
                              controller.insertText.value);
                        }
                        return Container(
                          decoration: BoxDecoration(
                            color: containerColor,
                            borderRadius: BorderRadius.circular(8),
                          ),
                        );
                      });
                    },
                  ),
                ),
                SizedBox(height: 16),
                Text(
                  'Any Help? Contact',
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
                    padding: const EdgeInsets.symmetric(
                        vertical: 15, horizontal: 10),
                    child: Text(
                      '6578253648',
                      style: TextStyle(color: Colors.black),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Obx(() => controller.showAnimation.value
              ? Center(
                  child: Container(
                    height: 100,
                    width: 100,
                    decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(20)),
                    child: Lottie.asset(
                      'images/success.json',
                      width: 100,
                      height: 100,
                    ),
                  ),
                )
              : SizedBox.shrink()),
        ],
      ),
      bottomNavigationBar: Padding(
        padding: const EdgeInsets.only(bottom: 30, left: 20, right: 20),
        child: GestureDetector(
          onTap: () {
            controller.toggleAnimation();
          },
          child: Container(
            width: double.infinity,
            height: 50,
            decoration: BoxDecoration(
              color: Colors.blueAccent,
              borderRadius: BorderRadius.circular(16),
            ),
            child: Center(
              child: Text(
                'Done',
                style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w400,
                    fontSize: 16),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildInsertContainer(String text) {
    return Container(
      height: 80,
      width: 80,
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(color: Colors.black, width: 2),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Center(
        child: Text(
          text,
          style: TextStyle(
            color: Colors.black,
            fontWeight: FontWeight.w500,
            fontSize: 15,
          ),
        ),
      ),
    );
  }
}
