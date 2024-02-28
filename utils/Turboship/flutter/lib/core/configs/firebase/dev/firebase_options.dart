// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for macos - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyBaBHq_Igg8V6xDmuNBMDWK_KputgYfSLM',
    appId: '1:885916988672:web:1cca060cfd4ac74a2eafe5',
    messagingSenderId: '885916988672',
    projectId: 'turboship-dev',
    authDomain: 'turboship-dev.firebaseapp.com',
    databaseURL: 'https://turboship-dev-default-rtdb.firebaseio.com',
    storageBucket: 'turboship-dev.appspot.com',
    measurementId: 'G-3Y4HHYCZK7',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyCJtMDwe5lIR-KGVUVJtyEj8j1hsySE_w4',
    appId: '1:885916988672:android:b324e07cf00b99be2eafe5',
    messagingSenderId: '885916988672',
    projectId: 'turboship-dev',
    databaseURL: 'https://turboship-dev-default-rtdb.firebaseio.com',
    storageBucket: 'turboship-dev.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyA2SB1X3a0N0w-iSMb4HYCNkrfwZ-6_E54',
    appId: '1:885916988672:ios:d1c6b57a1f398f602eafe5',
    messagingSenderId: '885916988672',
    projectId: 'turboship-dev',
    databaseURL: 'https://turboship-dev-default-rtdb.firebaseio.com',
    storageBucket: 'turboship-dev.appspot.com',
    iosBundleId: 'net.ltran.turboship',
  );
}