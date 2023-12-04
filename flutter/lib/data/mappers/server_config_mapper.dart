import 'package:injectable/injectable.dart';

import '../../domain/entities/server_config.dart';
import '../models/all.dart';
import 'base/base_data_mapper.dart';

@injectable
class ServerConfigMapper extends BaseDataMapper<ServerConfigData, ServerConfig> {
  @override
  ServerConfig mapToEntity(ServerConfigData data) {
    return ServerConfig(
      androidRequiredBuildNumber: int.parse(data.androidMinimumBuildNumber),
      iosRequiredBuildNumber: int.parse(data.iosMinimumBuildNumber),
      isMaintaining: data.isMaintaining,
    );
  }
}
