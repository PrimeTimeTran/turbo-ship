// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:get_it/get_it.dart' as _i1;
import 'package:injectable/injectable.dart' as _i2;
import 'package:turboship/core/configs/di/di.dart' as _i99;
import 'package:turboship/core/configs/di/raw_config.dart' as _i18;
import 'package:turboship/core/helpers/app_info.dart' as _i4;
import 'package:turboship/data/datasources/app_preferences.dart' as _i7;
import 'package:turboship/data/datasources/providers/api/clients/none_authenticated_rest_api_client.dart'
    as _i17;
import 'package:turboship/data/datasources/providers/api/interceptor/access_token_interceptor.dart'
    as _i3;
import 'package:turboship/data/datasources/providers/api/interceptor/connectivity_interceptor.dart'
    as _i10;
import 'package:turboship/data/datasources/providers/api/interceptor/log_interceptor.dart'
    as _i11;
import 'package:turboship/data/mappers/response_mapper/success_response/data_json_array_response_mapper.dart'
    as _i12;
import 'package:turboship/data/mappers/response_mapper/success_response/data_json_object_response_mapper.dart'
    as _i13;
import 'package:turboship/data/mappers/response_mapper/success_response/json_array_success_response_mapper.dart'
    as _i15;
import 'package:turboship/data/mappers/response_mapper/success_response/json_object_success_response_mapper.dart'
    as _i16;
import 'package:turboship/data/mappers/response_mapper/success_response/paged_json_array_success_response_mapper.dart'
    as _i19;
import 'package:turboship/presentation/common_blocs/overlay/overlay_bloc.dart'
    as _i6;

class _$RegisterModule extends _i99.RegisterModule {}

extension GetItInjectableX on _i1.GetIt {
// initializes the registration of main-scope dependencies inside of GetIt
  Future<_i1.GetIt> init({
    String? environment,
    _i2.EnvironmentFilter? environmentFilter,
  }) async {
    final gh = _i2.GetItHelper(
      this,
      environment,
      environmentFilter,
    );
    final registerModule = _$RegisterModule();
    gh.factory<_i3.AccessTokenInterceptor>(() => _i3.AccessTokenInterceptor());
    gh.lazySingleton<_i4.AppInfo>(() => _i4.AppInfo());
    gh.lazySingleton<_i6.AppOverlayBloc>(() => _i6.AppOverlayBloc());
    await gh.singletonAsync<_i7.AppPreferences>(
      () => registerModule.appPreferences,
      preResolve: true,
    );

    gh.factory<_i10.ConnectivityInterceptor>(
        () => _i10.ConnectivityInterceptor());
    gh.factory<_i11.CustomLogInterceptor>(() => _i11.CustomLogInterceptor(
          enableLogRequestInfo: gh<bool>(),
          enableLogSuccessResponse: gh<bool>(),
          enableLogErrorResponse: gh<bool>(),
          enableLogHeader: gh<bool>(),
          enableLogRequestBody: gh<bool>(),
          enableLogResponseData: gh<bool>(),
        ));
    gh.factory<_i12.DataJsonArrayResponseMapper<dynamic>>(
        () => _i12.DataJsonArrayResponseMapper<dynamic>());
    gh.factory<_i13.DataJsonObjectResponseMapper<dynamic>>(
        () => _i13.DataJsonObjectResponseMapper<dynamic>());
    gh.factory<_i15.JsonArraySuccessResponseMapper<dynamic>>(
        () => _i15.JsonArraySuccessResponseMapper<dynamic>());
    gh.factory<_i16.JsonObjectSuccessResponseMapper<dynamic>>(
        () => _i16.JsonObjectSuccessResponseMapper<dynamic>());
    gh.lazySingleton<_i17.NoneAuthenticatedRestApiClient>(
        () => _i17.NoneAuthenticatedRestApiClient());
    await gh.singletonAsync<_i18.RawConfig>(
      () => registerModule.configEnv(),
      preResolve: true,
    );
    gh.factory<_i19.RecordsJsonArraySuccessResponseMapper<dynamic>>(
        () => _i19.RecordsJsonArraySuccessResponseMapper<dynamic>());
    return this;
  }
}
