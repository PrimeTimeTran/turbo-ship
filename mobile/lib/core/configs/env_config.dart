import 'package:injectable/injectable.dart';

import 'di/raw_config.dart';

const _apiVersion = 'v1';

@singleton
class EnvConfig {
  EnvConfig(this._config);

  final RawConfig _config;

  String get baseUrl => _addApiVersion(_config['BASE_URL']!);

  String _addApiVersion(String url) => '$url/$_apiVersion';
}
