// import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'all.dart';
// import 'firebase/prod.dart';
import 'core/configs/configs.dart';

void main() async {
  env = 'main';

  WidgetsFlutterBinding.ensureInitialized();
  await configureApp();

  // HttpOverrides.global = MyHttpOverrides();

  // Not 100% sure the advantage of multiple main files(main_development, main_staging, main_production) other than initializing Firebase(FB).
  // Leave it here for now as it does help load different FB environments albeit forcing duplicated code.
  // https://brickhub.dev/bricks/very_good_core/0.4.0
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

  // final widgetsBinding = WidgetsFlutterBinding.ensureInitialized();
  // Show splash screen
  // FlutterNativeSplash.preserve(widgetsBinding: widgetsBinding);

  setupApp(() => const Providers());
}
