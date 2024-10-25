import 'package:app/Features/Account/presentation/account_detail.dart';
import 'package:app/Features/Homepage/controller/homepage_controller.dart';
import 'package:app/Features/Homepage/Presentation/widget/bottomsheet.dart';
import 'package:app/Features/Payment/presentation/payment_screen.dart';
import 'package:app/Features/QRScanner/presentation/qr_Code.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:get/get.dart';

class Homepage extends StatelessWidget {
  final MapController mapController = Get.put(MapController());
  bool isDialogShown = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Obx(() {
        if (isDialogShown) {
          Get.back();
          isDialogShown = false;
        }
        Set<Marker> markers = {
          Marker(
            markerId: MarkerId('currentLocation'),
            position: mapController.currentPosition.value,
            icon: BitmapDescriptor.defaultMarkerWithHue(
              BitmapDescriptor.hueAzure,
            ),
          ),
          ...mapController.generateRandomMarkers(),
        };

        return Stack(
          children: [
            GoogleMap(
              initialCameraPosition: CameraPosition(
                target: mapController.currentPosition.value,
                zoom: 15,
              ),
              onMapCreated: mapController.onMapCreated,
              myLocationButtonEnabled: false,
              zoomControlsEnabled: false,
              markers: markers,
            ),
            Padding(
              padding: const EdgeInsets.only(top: 50, left: 20, right: 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  GestureDetector(
                    onTap: () async {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => AccountDetail()));
                    },
                    child: Container(
                        decoration: BoxDecoration(
                            color: Colors.black,
                            borderRadius: BorderRadius.circular(30)),
                        child: const Padding(
                          padding: EdgeInsets.all(10.0),
                          child: Icon(
                            CupertinoIcons.person,
                            color: Colors.white,
                            size: 25,
                          ),
                        )),
                  ),
                  GestureDetector(
                    onTap: () async {
                      String? scannedData = await Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => QrCodeScanner()),
                      );
                    },
                    child: Container(
                        decoration: BoxDecoration(
                            color: Colors.black,
                            borderRadius: BorderRadius.circular(30)),
                        child: const Padding(
                          padding: EdgeInsets.all(10.0),
                          child: Icon(
                            Icons.qr_code_scanner,
                            color: Colors.white,
                            size: 25,
                          ),
                        )),
                  ),
                ],
              ),
            ),
            buildDraggableBottomSheet(context),
          ],
        );
      }),
    );
  }
}
