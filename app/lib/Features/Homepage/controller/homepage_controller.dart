import 'dart:math';
import 'package:app/Features/Homepage/Presentation/widget/bottomsheet.dart';
import 'package:app/Features/Homepage/model/charging_station_model.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';
import 'package:get/get.dart';

class MapController extends GetxController {
  GoogleMapController? googleMapController;
  var currentPosition = LatLng(0.0, 0.0).obs;
  var isMapLoaded = false.obs;
  var isPermissionGranted = false.obs;
  var selectedStation = Rxn<ChargingStation>();

  var markers = Set<Marker>().obs;

  @override
  void onInit() {
    super.onInit();
    checkLocationPermission();
  }

  void onMarkerTapped(ChargingStation station) {
    selectedStation.value = station;
  }

  Future<void> checkLocationPermission() async {
    bool serviceEnabled;
    LocationPermission permission;

    serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      print('Location services are disabled.');
      return;
    }

    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        print('Location permissions are denied');
        return;
      }
    }

    if (permission == LocationPermission.deniedForever) {
      print('Location permissions are permanently denied');
      return;
    }

    isPermissionGranted.value = true;
    getCurrentLocation();
  }

  Future<void> getCurrentLocation() async {
    try {
      if (!isPermissionGranted.value) {
        print('Permission not granted');
        return;
      }

      Position position = await Geolocator.getCurrentPosition(
          desiredAccuracy: LocationAccuracy.high);

      currentPosition.value = LatLng(position.latitude, position.longitude);
      isMapLoaded.value = true;

      // Generate 5 random markers
      generateRandomMarkers();

      if (googleMapController != null) {
        googleMapController?.animateCamera(
          CameraUpdate.newLatLng(currentPosition.value),
        );
      }
    } catch (e) {
      print("Error getting location: $e");
    }
  }

  void onMapCreated(GoogleMapController controller) {
    googleMapController = controller;
    if (isMapLoaded.value) {
      googleMapController?.animateCamera(
        CameraUpdate.newLatLng(currentPosition.value),
      );
    }
  }

  Set<Marker> generateRandomMarkers() {
    Set<Marker> markers = {};
    Random random = Random();
    double radius = 0.045;
    List<String> imagePaths = [
      'images/image12.webp',
      'images/image13.jpg',
      'images/image14.png',
      'images/image15.webp',
      'images/image16.jpeg',
    ];

    List<String> details = [
      'Fast charging station for electric vehicles, located near the city center. Offers 24/7 service with multiple charging points. Currently has charged 150 batteries today. Traffic level: Moderate. Features include Wi-Fi access and a lounge area.',
      'Eco-friendly charging with solar panels. Perfect for electric vehicle owners who want to use renewable energy. Today, it has charged 80 batteries. Traffic level: Low. Amenities include a small café and recycling bins.',
      'Conveniently located for easy access. This station features quick charging capabilities and is ideal for commuters. 120 batteries charged today, with a traffic level of High. Facilities include restrooms and vending machines.',
      'High-capacity chargers for long trips. Equipped with fast chargers to minimize waiting time, ensuring you’re back on the road quickly. So far, 200 batteries have been charged today. Traffic level: High. Additional services include a mini-mart and outdoor seating.',
      'Charging stations with renewable energy. This station promotes sustainability and is a great choice for eco-conscious drivers. It has charged 60 batteries today, with a traffic level of Low. Offers bike racks and electric bike charging facilities.'
    ];

    List<String> batteriesCharged = [
      '12/15',
      '02/15',
      '10/15',
      '07/15',
      '05/15'
    ];
    List<String> names = [
      'SuperFast Charge',
      'EcoCharge Hub',
      'ChargePoint Station',
      'Power-Up Station',
      'GreenCharge Center'
    ];

    // Generate random stations
    List<ChargingStation> stations = List.generate(5, (index) {
      double randomLatOffset = (random.nextDouble() * radius) - (radius / 2);
      double randomLngOffset = (random.nextDouble() * radius) - (radius / 2);

      return ChargingStation(
        id: (index + 1).toString(),
        imagePath: imagePaths[
            random.nextInt(imagePaths.length)], // Randomly select an image path
        details: details[index],
        batteriesCharged: batteriesCharged[index],
        location: LatLng(
          currentPosition.value.latitude + randomLatOffset,
          currentPosition.value.longitude + randomLngOffset,
        ),
        name: names[index],
      );
    });

    for (ChargingStation station in stations) {
      markers.add(
        Marker(
          markerId: MarkerId(station.id),
          position: station.location,
          icon:
              BitmapDescriptor.defaultMarkerWithHue(BitmapDescriptor.hueGreen),
          onTap: () {
            onMarkerTapped(station);
            bottomSheetController.animateTo(0.7,
                duration: Duration(milliseconds: 300),
                curve: Curves.ease); // Open the bottom sheet
          }, // Handle marker tap
        ),
      );
    }

    return markers;
  }

  // Function to generate 5 random markers within a 5 km radius
//  Set<Marker> generateRandomMarkers() {
//     Set<Marker> markers = {};
//     Random random = Random();
//     double radius = 0.045; // ~5 km in degrees (~0.045 lat/lng degrees)

//     for (int i = 0; i < 5; i++) {
//       double randomLat = currentPosition.value.latitude + (random.nextDouble() * radius) - (radius / 2);
//       double randomLng = currentPosition.value.longitude + (random.nextDouble() * radius) - (radius / 2);

//       markers.add(
//         Marker(
//           markerId: MarkerId('chargingStation$i'),
//           position: LatLng(randomLat, randomLng),
//           icon: BitmapDescriptor.defaultMarkerWithHue(BitmapDescriptor.hueGreen),
//         ),
//       );
//     }

//     return markers; // Ensure to return the Set<Marker>
//   }

  // Function to generate a random location within a radius
  LatLng getRandomLocationInRadius(
      double latitude, double longitude, double radiusInKm) {
    final random = Random();

    // Convert radius from kilometers to degrees
    double radiusInDegrees = radiusInKm / 111.0;

    // Generate random points within the circle
    double u = random.nextDouble();
    double v = random.nextDouble();
    double w = radiusInDegrees * sqrt(u);
    double t = 2 * pi * v;
    double newLat = w * cos(t);
    double newLng = w * sin(t) / cos(latitude * pi / 180);

    // Return new random location within the radius
    return LatLng(latitude + newLat, longitude + newLng);
  }
}
