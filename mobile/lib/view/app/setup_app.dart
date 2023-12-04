import 'dart:async';
import 'dart:developer';

import 'package:bloc/bloc.dart';
// import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:flutter/widgets.dart';

import '../../all.dart';

Future<void> setupApp(FutureOr<Widget> Function() builder) async {
  FlutterError.onError = (details) {
    log(details.exceptionAsString(), stackTrace: details.stack);
  };

  Bloc.observer = const AppBlocObserver();

  // Add cross-flavor configuration here

  // FirebaseAnalytics.instance.setAnalyticsCollectionEnabled(true);
  // FirebaseAnalytics analytics = FirebaseAnalytics.instance;
  // analytics.setAnalyticsCollectionEnabled(true);
  // await analytics.logAppOpen();

  try {
    await Env().setup();
  } catch (e) {
    await Env().setup();
  }

  runApp(await builder());
}

class AppBlocObserver extends BlocObserver {
  const AppBlocObserver();

  @override
  void onChange(BlocBase<dynamic> bloc, Change<dynamic> change) {
    super.onChange(bloc, change);
    log('onChange(${bloc.runtimeType}, $change)');
  }

  @override
  void onError(BlocBase<dynamic> bloc, Object error, StackTrace stackTrace) {
    log('onError(${bloc.runtimeType}, $error, $stackTrace)');
    super.onError(bloc, error, stackTrace);
  }
}
