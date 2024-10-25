import 'dart:developer';
import 'dart:ui';
import 'package:app/Features/Payment/presentation/payment_screen.dart';
import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

class QrCodeScanner extends StatelessWidget {
  QrCodeScanner({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Glassmorphism Background
          Positioned.fill(
            child: Container(
              decoration: BoxDecoration(color: Colors.white.withOpacity(0.2)),
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                child: Container(
                  color: Colors.black.withOpacity(0.2),
                ),
              ),
            ),
          ),

          // Full-screen Mobile Scanner (But it will appear above the blur)
          Positioned.fill(
            child: MobileScanner(
              controller: MobileScannerController(
                useNewCameraSelector: true,
                detectionSpeed: DetectionSpeed.noDuplicates,
                returnImage: true,
              ),
              onDetect: (BarcodeCapture capture) {
                final List<Barcode> barcodes = capture.barcodes;

                // Process the first detected barcode
                for (final barcode in barcodes) {
                  if (barcode.displayValue != null) {
                    // Assuming we handle just the first valid scanned code
                    // print(barcode.displayValue.toString());
                    Navigator.pop(context);
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => Paymentscreen(
                          scannedData: barcode.displayValue ?? '',
                        ),
                      ),
                    );
                    break;
                  }
                }
              },
            ),
          ),

          // The 300x300 Scan Area Overlay (Unblurred)
          Center(
            child: ClipRRect(
              borderRadius: BorderRadius.circular(20),
              child: Container(
                width: 300,
                height: 300,
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.white, width: 3),
                  borderRadius: BorderRadius.circular(20),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.2),
                      blurRadius: 15,
                      offset: Offset(0, 5),
                    ),
                  ],
                ),
              ),
            ),
          ),

          // Add an instruction text
          const Positioned(
            bottom: 200,
            left: 0,
            right: 0,
            child: Text(
              'Scan',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
