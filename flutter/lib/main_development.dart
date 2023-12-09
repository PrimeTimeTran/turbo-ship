// import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import './all.dart';
import 'core/configs/configs.dart';
// import 'firebase/dev.dart';

void main() async {
  env = 'development';

  WidgetsFlutterBinding.ensureInitialized();
  await configureApp();

  // HttpOverrides.global = MyHttpOverrides();

  if (kIsWeb) {
    // await Firebase.initializeApp(
    //   options: DefaultFirebaseOptions.currentPlatform,
    // );
  } else {
    // if (Firebase.apps.isEmpty) {
    //   await Firebase.initializeApp(
    //     name: '',
    //     options: DefaultFirebaseOptions.currentPlatform,
    //   ).whenComplete(() {
    //     p("completedAppInitialize");
    //   });
    // }
  }

  setupApp(() => const Providers());
}