import 'package:app/Features/Homepage/controller/homepage_controller.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

DraggableScrollableController bottomSheetController =
    DraggableScrollableController();

Widget buildDraggableBottomSheet(BuildContext context) {
  final MapController mapController = Get.find(); // Get the controller
  return DraggableScrollableSheet(
    initialChildSize: 0.3,
    minChildSize: 0.3,
    maxChildSize: 1.0,
    snap: true,
    snapSizes: const [0.3, 0.7, 1.0],
    controller: bottomSheetController,
    builder: (BuildContext context, ScrollController scrollController) {
      return Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
        ),
        child: SingleChildScrollView(
          controller: scrollController,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 16),
              Center(
                child: Container(
                  width: 60,
                  height: 5,
                  decoration: BoxDecoration(
                    color: Colors.grey,
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
              ),
              const SizedBox(height: 25),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 15),
                child: Container(
                  height: 150,
                  decoration: BoxDecoration(
                    color: Colors.grey.shade50,
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(
                            left: 15.0, top: 10, right: 10),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            const Text(
                              'Nearest Swap Stations',
                              style: TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.bold),
                            ),
                            const Icon(
                              Icons.arrow_forward_ios_rounded,
                              color: Colors.grey,
                              size: 18,
                            )
                          ],
                        ),
                      ),
                      Container(
                        height: 110,
                        padding: const EdgeInsets.only(
                          left: 10,
                          bottom: 15,
                          top: 10,
                          right: 15,
                        ),
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          physics: const BouncingScrollPhysics(),
                          children: [
                            _buildImageCard('images/image12.webp'),
                            _buildImageCard('images/image13.jpg'),
                            _buildImageCard('images/image14.png'),
                            _buildImageCard('images/image15.webp'),
                            _buildImageCard('images/image16.jpeg'),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 16),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 15),
                child: Container(
                  decoration: BoxDecoration(
                    color: Colors.grey.shade50,
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Obx(() {
                    final station = mapController.selectedStation.value;
                    return Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Padding(
                          padding:
                              EdgeInsets.only(left: 16.0, top: 10, right: 12),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                'Station',
                                style: TextStyle(
                                  fontSize: 18,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              const Icon(
                                Icons.arrow_forward_ios_rounded,
                                color: Colors.grey,
                                size: 18,
                              )
                            ],
                          ),
                        ),
                        const SizedBox(height: 8),
                        if (station != null) ...[
                          // Display the image and details if a station is selected
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 18),
                            child: Container(
                              decoration: BoxDecoration(
                                color: Colors.grey.shade100,
                                borderRadius: BorderRadius.circular(20),
                                boxShadow: [
                                  BoxShadow(
                                    color: Colors.black
                                        .withOpacity(0.2), // Shadow color
                                    blurRadius: 8.0, // Softness of the shadow
                                    spreadRadius:
                                        1.0, // How much the shadow should spread
                                    offset: const Offset(
                                        0, 4), // Position of the shadow
                                  ),
                                ],
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(1.0),
                                child: ClipRRect(
                                  borderRadius: BorderRadius.circular(18),
                                  child: Image.asset(station.imagePath,
                                      height: 250,
                                      width: double.infinity,
                                      fit: BoxFit.cover),
                                ),
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(
                                left: 20.0, right: 20, top: 15),
                            child: Text(
                              station.name,
                              style: TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.w600),
                              textAlign:
                                  TextAlign.justify, // Justify text alignment
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(
                                left: 20.0, right: 20, top: 20),
                            child: Text(
                              station.details,
                              style: TextStyle(fontWeight: FontWeight.w300),
                              textAlign:
                                  TextAlign.justify, // Justify text alignment
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(
                                left: 20.0, right: 20, top: 10, bottom: 20),
                            child: Text(
                              'Batteries Charged: ${station.batteriesCharged}',
                              style: TextStyle(fontWeight: FontWeight.w400),
                              textAlign:
                                  TextAlign.justify, // Justify text alignment
                            ),
                          ),
                        ] else ...[
                          // Show a placeholder or default message when no station is selected
                          Padding(
                            padding: const EdgeInsets.all(16.0),
                            child: Text('Select a station to see details.'),
                          ),
                        ],
                        // Padding(
                        //   padding: const EdgeInsets.symmetric(horizontal: 16.0),
                        //   child: TextField(
                        //     style: const TextStyle(color: Colors.black54),
                        //     decoration: InputDecoration(
                        //       filled: true,
                        //       fillColor: Colors.grey.shade200,
                        //       hintText: 'Station',
                        //       hintStyle: const TextStyle(
                        //         color: Colors.grey,
                        //       ),
                        //       contentPadding:
                        //           const EdgeInsets.symmetric(horizontal: 20),
                        //       border: OutlineInputBorder(
                        //         borderRadius: BorderRadius.circular(40),
                        //         borderSide: BorderSide.none,
                        //       ),
                        //     ),
                        //     onChanged: (value) {
                        //       // Handle the search action here
                        //     },
                        //   ),
                        // ),

                        // ListView.builder(
                        //   shrinkWrap: true,
                        //   physics: const NeverScrollableScrollPhysics(),
                        //   itemCount: 10, // Replace with your document count
                        //   itemBuilder: (context, index) {
                        //     return _buildDocumentTile(
                        //         'Document Title $index', 'Date $index');
                        //   },
                        // ),
                      ],
                    );
                  }),
                ),
              ),
            ],
          ),
        ),
      );
    },
  );
}

Widget _buildImageCard(String imagePath) {
  return Padding(
    padding: const EdgeInsets.symmetric(horizontal: 4.0),
    child: ClipRRect(
      borderRadius: BorderRadius.circular(12),
      child: Image.asset(
        imagePath,
        width: 80,
        height: 80,
        fit: BoxFit.cover,
      ),
    ),
  );
}
