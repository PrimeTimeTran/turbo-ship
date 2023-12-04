import 'package:injectable/injectable.dart';
import 'package:package_info_plus/package_info_plus.dart';

import '../utils/log_util.dart';

@LazySingleton()
class AppInfo {
  PackageInfo? _packageInfo;

  String get applicationId => _packageInfo?.packageName ?? '';
  String get appName => _packageInfo?.appName ?? '';
  String get buildNumber => _packageInfo?.buildNumber ?? '';
  String get versionName => _packageInfo?.version ?? '';

  Future<void> init() async {
    _packageInfo = await PackageInfo.fromPlatform();
    LogUtil.i(applicationId, name: 'APPLICATION_ID');
    LogUtil.i(appName, name: 'APP_NAME');
    LogUtil.i(versionName, name: 'VERSION_NAME');
    LogUtil.i(buildNumber, name: 'BUILD_NUMBER');
  }
}
