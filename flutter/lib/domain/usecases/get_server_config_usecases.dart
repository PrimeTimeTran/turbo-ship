import 'package:injectable/injectable.dart';

import '../all.dart';
import 'base/base.dart';

@injectable
class GetServerConfigUseCase extends BaseFutureUseCase<NoParams, ServerConfig> {
  final AuthRepository _serverConfigRepository;

  GetServerConfigUseCase(this._serverConfigRepository);

  @override
  Future<ServerConfig> buildUseCase(NoParams params) {
    return _serverConfigRepository.getServerConfig();
  }
}
