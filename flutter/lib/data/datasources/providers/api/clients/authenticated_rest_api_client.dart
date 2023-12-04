import 'package:injectable/injectable.dart';

import '../../../../../core/configs/configs.dart';
import '../interceptor/interceptor.dart';
import 'base/rest_api_client.dart';

@lazySingleton
class AuthenticatedRestApiClient extends RestApiClient {
  AuthenticatedRestApiClient({
    required RefreshTokenInterceptor refreshTokenInterceptor,
    required AccessTokenInterceptor accessTokenInterceptor,
  }) : super(
          baseUrl: getIt<EnvConfig>().baseUrl,
          interceptors: [
            refreshTokenInterceptor,
            accessTokenInterceptor,
          ],
        );
}
