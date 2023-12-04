// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:get_it/get_it.dart' as _i1;
import 'package:injectable/injectable.dart' as _i2;
import 'package:turboship/all.dart' as _i32;
import 'package:turboship/core/configs/di/di.dart' as _i42;
import 'package:turboship/core/configs/di/raw_config.dart' as _i17;
import 'package:turboship/core/configs/env_config.dart' as _i27;
import 'package:turboship/core/helpers/app_info.dart' as _i5;
import 'package:turboship/data/datasources/all.dart' as _i22;
import 'package:turboship/data/datasources/app_preferences.dart' as _i8;
import 'package:turboship/data/datasources/auth_datasource.dart' as _i34;
import 'package:turboship/data/datasources/providers/api/api.dart' as _i20;
import 'package:turboship/data/datasources/providers/api/clients/authenticated_rest_api_client.dart'
    as _i29;
import 'package:turboship/data/datasources/providers/api/clients/none_authenticated_rest_api_client.dart'
    as _i16;
import 'package:turboship/data/datasources/providers/api/clients/refresh_token_rest_api_client.dart'
    as _i23;
import 'package:turboship/data/datasources/providers/api/interceptor/access_token_interceptor.dart'
    as _i3;
import 'package:turboship/data/datasources/providers/api/interceptor/connectivity_interceptor.dart'
    as _i10;
import 'package:turboship/data/datasources/providers/api/interceptor/interceptor.dart'
    as _i30;
import 'package:turboship/data/datasources/providers/api/interceptor/log_interceptor.dart'
    as _i11;
import 'package:turboship/data/datasources/providers/api/interceptor/refresh_token_interceptor.dart'
    as _i28;
import 'package:turboship/data/datasources/providers/api/interceptor/trim_interceptor.dart'
    as _i25;
import 'package:turboship/data/datasources/refresh_token_datasource.dart'
    as _i19;
import 'package:turboship/data/datasources/user_datasource.dart' as _i31;
import 'package:turboship/data/mappers/all.dart' as _i37;
import 'package:turboship/data/mappers/response_mapper/success_response/data_json_array_response_mapper.dart'
    as _i12;
import 'package:turboship/data/mappers/response_mapper/success_response/data_json_object_response_mapper.dart'
    as _i13;
import 'package:turboship/data/mappers/response_mapper/success_response/json_array_success_response_mapper.dart'
    as _i14;
import 'package:turboship/data/mappers/response_mapper/success_response/json_object_success_response_mapper.dart'
    as _i15;
import 'package:turboship/data/mappers/response_mapper/success_response/paged_json_array_success_response_mapper.dart'
    as _i18;
import 'package:turboship/data/mappers/server_config_mapper.dart' as _i24;
import 'package:turboship/data/mappers/user_mapper.dart' as _i26;
import 'package:turboship/data/repositories/auth_repo_impl.dart' as _i36;
import 'package:turboship/data/repositories/refresh_token_repo.dart' as _i21;
import 'package:turboship/data/repositories/user_repo_impl.dart' as _i33;
import 'package:turboship/domain/all.dart' as _i35;
import 'package:turboship/domain/repositories/user_repo.dart' as _i39;
import 'package:turboship/domain/usecases/get_server_config_usecases.dart'
    as _i40;
import 'package:turboship/domain/usecases/user/get_current_user_usecase.dart'
    as _i38;
import 'package:turboship/domain/usecases/user/update_user_usecase.dart'
    as _i41;
import 'package:turboship/presentation/base/bloc/common/common_bloc.dart'
    as _i9;
import 'package:turboship/presentation/common_blocs/app/app_bloc.dart' as _i4;
import 'package:turboship/presentation/common_blocs/overlay/overlay_bloc.dart'
    as _i7;
import 'package:turboship/presentation/routing/observer/navigator_observer.dart'
    as _i6;

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
    gh.lazySingleton<_i4.AppBloc>(() => _i4.AppBloc());
    gh.lazySingleton<_i5.AppInfo>(() => _i5.AppInfo());
    gh.lazySingleton<_i6.AppNavigatorObserver>(
        () => _i6.AppNavigatorObserver());
    gh.lazySingleton<_i7.AppOverlayBloc>(() => _i7.AppOverlayBloc());
    await gh.singletonAsync<_i8.AppPreferences>(
      () => registerModule.appPreferences,
      preResolve: true,
    );
    gh.factory<_i9.CommonBloc>(() => _i9.CommonBloc());
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
    gh.factory<_i14.JsonArraySuccessResponseMapper<dynamic>>(
        () => _i14.JsonArraySuccessResponseMapper<dynamic>());
    gh.factory<_i15.JsonObjectSuccessResponseMapper<dynamic>>(
        () => _i15.JsonObjectSuccessResponseMapper<dynamic>());
    gh.lazySingleton<_i16.NoneAuthenticatedRestApiClient>(
        () => _i16.NoneAuthenticatedRestApiClient());
    await gh.singletonAsync<_i17.RawConfig>(
      () => registerModule.configEnv(),
      preResolve: true,
    );
    gh.factory<_i18.RecordsJsonArraySuccessResponseMapper<dynamic>>(
        () => _i18.RecordsJsonArraySuccessResponseMapper<dynamic>());
    gh.lazySingleton<_i19.RefreshTokenDatasource>(() =>
        _i19.RefreshTokenDatasource(gh<_i20.NoneAuthenticatedRestApiClient>()));
    gh.lazySingleton<_i21.RefreshTokenRepository>(
        () => _i21.RefreshTokenRepository(
              gh<_i22.RefreshTokenDatasource>(),
              gh<_i22.AppPreferences>(),
            ));
    gh.lazySingleton<_i23.RefreshTokenRestApiClient>(
        () => _i23.RefreshTokenRestApiClient());
    gh.factory<_i24.ServerConfigMapper>(() => _i24.ServerConfigMapper());
    gh.factory<_i25.TrimInterceptor>(() => _i25.TrimInterceptor());
    gh.factory<_i26.UserMapper>(() => _i26.UserMapper());
    gh.singleton<_i27.EnvConfig>(_i27.EnvConfig(gh<_i17.RawConfig>()));
    gh.factory<_i28.RefreshTokenInterceptor>(() => _i28.RefreshTokenInterceptor(
          gh<_i21.RefreshTokenRepository>(),
          gh<_i20.NoneAuthenticatedRestApiClient>(),
        ));
    gh.lazySingleton<_i29.AuthenticatedRestApiClient>(
        () => _i29.AuthenticatedRestApiClient(
              refreshTokenInterceptor: gh<_i30.RefreshTokenInterceptor>(),
              accessTokenInterceptor: gh<_i30.AccessTokenInterceptor>(),
            ));
    gh.lazySingleton<_i31.UserDataSource>(
        () => _i31.UserDataSourceImpl(gh<_i29.AuthenticatedRestApiClient>()));
    gh.lazySingleton<_i32.UserRepository>(() => _i33.UserRepositoryImpl(
          gh<_i32.UserDataSource>(),
          gh<_i32.UserMapper>(),
          gh<_i32.AppPreferences>(),
          gh<_i21.RefreshTokenRepository>(),
        ));
    gh.factory<_i34.AuthDatasource>(() => _i34.AuthDataSourceImpl(
          gh<_i20.NoneAuthenticatedRestApiClient>(),
          gh<_i20.AuthenticatedRestApiClient>(),
        ));
    gh.factory<_i35.AuthRepository>(() => _i36.AuthRepositoryImpl(
          gh<_i22.AppPreferences>(),
          gh<_i22.AuthDatasource>(),
          gh<_i37.ServerConfigMapper>(),
        ));
    gh.factory<_i38.GetCurrentUserUseCase>(
        () => _i38.GetCurrentUserUseCase(gh<_i39.UserRepository>()));
    gh.factory<_i40.GetServerConfigUseCase>(
        () => _i40.GetServerConfigUseCase(gh<_i35.AuthRepository>()));
    gh.factory<_i41.UpdateUserUseCase>(
        () => _i41.UpdateUserUseCase(gh<_i39.UserRepository>()));
    return this;
  }
}

class _$RegisterModule extends _i42.RegisterModule {}
