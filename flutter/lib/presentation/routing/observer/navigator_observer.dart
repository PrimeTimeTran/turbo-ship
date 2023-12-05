import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:injectable/injectable.dart';
import 'package:turboship/all.dart';

import '../../../core/configs/configs.dart';

// TODO: add firebase analytics here

@lazySingleton
class AppNavigatorObserver extends NavigatorObserver with LogMixin {
  static const _enableLog = LogConfig.enableNavigatorObserverLog;

  String? previousRouteName;
  @override
  void didPop(Route route, Route? previousRoute) {
    super.didPop(route, previousRoute);
    previousRouteName = previousRoute?.settings.name;

    if (_enableLog) {
      logDebug(
        'didPop ${route.settings.name}, back to ${previousRoute?.settings.name}',
      );
    }
  }

  @override
  void didPush(Route route, Route? previousRoute) {
    super.didPush(route, previousRoute);
    previousRouteName = previousRoute?.settings.name;
    if (_enableLog) {
      logDebug(
        'didPush from ${previousRoute?.settings.name} to ${route.settings.name}',
      );
    }
  }

  @override
  void didRemove(Route route, Route? previousRoute) {
    super.didRemove(route, previousRoute);
    previousRouteName = previousRoute?.settings.name;

    if (_enableLog) {
      logDebug(
        'didRemove ${route.settings.name}, back to ${previousRoute?.settings.name}',
      );
    }
  }

  @override
  void didReplace({Route? newRoute, Route? oldRoute}) {
    super.didReplace(newRoute: newRoute, oldRoute: oldRoute);
    previousRouteName = oldRoute?.settings.name;

    if (_enableLog) {
      logDebug(
        'didReplace ${oldRoute?.settings.name} by ${newRoute?.settings.name}',
      );
    }
  }

  String? previousRoutePath() {
    return AppPages.values
        .firstWhereOrNull((element) => element.path == previousRouteName)
        ?.name;
  }
}
