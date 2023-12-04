// import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import './all.dart';
// import 'firebase/dev.dart';

void main() async {
  // p('Env: Development', icon: '🏃');
  env = 'development';

  WidgetsFlutterBinding.ensureInitialized();
  // HttpOverrides.global = MyHttpOverrides();

  if (kIsWeb) {
    // await Firebase.initializeApp(
    //   options: DefaultFirebaseOptions.currentPlatform,
    // );
  } else {
    // if (Firebase.apps.isEmpty) {
    //   await Firebase.initializeApp(
    //     name: 'onelong-dev',
    //     options: DefaultFirebaseOptions.currentPlatform,
    //   ).whenComplete(() {
    //     p("completedAppInitialize");
    //   });
    // }
  }

  // await configApp();

  setupApp(() => const Providers());
}
