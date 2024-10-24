import 'dart:developer';

import 'package:get/get.dart';

class BatterySwapController extends GetxController {
  var showAnimation = false.obs;
  var insertIndex = 4.obs; // Observable index for insertion
  var insertText = 'Insert'.obs;

  void toggleAnimation() {
    showAnimation.value = !showAnimation.value;
  }

  void setInsertData(int index,int removeIdx, bool isInsert) {
    if (isInsert) {
      insertIndex.value = removeIdx;
      insertText.value = 'Remove';
    } else {
      showAnimation.value = true; 
    }
  }
}
