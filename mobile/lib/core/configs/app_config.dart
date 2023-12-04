import 'package:flutter/foundation.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:hydrated_bloc/hydrated_bloc.dart';
import 'package:path_provider/path_provider.dart';
import 'package:turboship/core/utils/log_util.dart';

import '../../presentation/base/bloc/app_bloc_observer.dart';
import '../helpers/app_info.dart';
import 'di/di.dart';
import 'firebase/firebase_config.dart';

Future<void> configureApp() async {
  LogUtil.i('Hi', name: 'Start app');
  await Hive.initFlutter();
  await FirebaseConfig.config();
  await configureInjection();
  await _configureBloc();

  await getIt.get<AppInfo>().init();
}

Future<void> _configureBloc() async {
  Bloc.observer = AppBlocObserver();
  HydratedBloc.storage = await HydratedStorage.build(
    storageDirectory: kIsWeb
        ? HydratedStorage.webStorageDirectory
        : await getTemporaryDirectory(),
  );
}
