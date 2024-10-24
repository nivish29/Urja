import 'package:google_maps_flutter/google_maps_flutter.dart';

class ChargingStation {
  final String id;
  final String imagePath;
  final String details;
  final String name;
  final String batteriesCharged;
  final LatLng location;

  ChargingStation({
    required this.id,
    required this.imagePath,
    required this.details,
    required this.location, required this.name, required this.batteriesCharged,
  });
}
