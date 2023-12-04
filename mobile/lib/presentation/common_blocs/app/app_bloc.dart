import 'dart:async';

import 'package:flutter/material.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:hydrated_bloc/hydrated_bloc.dart';
import 'package:injectable/injectable.dart';
import 'package:turboship/all.dart';

import '../../../core/configs/configs.dart';
import '../../base/bloc/base_bloc.dart';
import '../../base/bloc/common/common_bloc.dart';

part 'app_bloc.freezed.dart';
part 'app_bloc.g.dart';
part 'app_event.dart';
part 'app_state.dart';

@lazySingleton
class AppBloc extends BaseBloc<AppEvent, AppState>
    with HydratedMixin, ChangeNotifier {
  // final GetCurrentUserUseCase _getCurrentUserUseCase;
  // final GetServerConfigUseCase _getServerConfigUseCase;
  // final CheckSignedContractUseCase _checkSignedContractUseCase;

  AppBloc(
      // this._getCurrentUserUseCase,
      // this._getServerConfigUseCase,
      // this._checkSignedContractUseCase,
      )
      : super(const AppState()) {
    on<AppInitiated>(_onAppInitiated);
    on<AppResumed>(_onAppResumed);
    on<GetAppServerConfig>(_onGetAppServerConfig);
    on<AppThemeChanged>(_onAppThemeChanged);
    on<AppLanguageChanged>(_onAppLanguageChanged);
    on<GetCurrentUser>(_onGetCurrentUser);
    on<GetUserSignContractStatus>(_onGetSignContractStatus);
    on<LoggedUserChanged>(_onIsLoggedUserChanged);

    _initCommonBloc();
  }

  @override
  AppState? fromJson(Map<String, dynamic> json) {
    return AppState.fromJson(json);
  }

  @override
  Map<String, dynamic>? toJson(AppState state) {
    return state.toJson();
  }

  void _initCommonBloc() {
    commonBloc = getIt.get<CommonBloc>();
  }

  FutureOr<void> _onAppInitiated(AppInitiated event, Emitter<AppState> emit) {
    add(const GetAppServerConfig());
    if (state.isLoggedIn) {
      add(
        GetCurrentUser(
          onError: (_) => commonBloc.add(const ForceLogoutButtonPressed()),
          checkContractStatus: true,
        ),
      );
    }
  }

  void _onAppLanguageChanged(AppLanguageChanged event, Emitter<AppState> emit) {
    emit(state.copyWith(locale: event.locale));
  }

  void _onAppResumed(AppResumed event, Emitter<AppState> emit) {
    add(const GetAppServerConfig());
  }

  void _onAppThemeChanged(AppThemeChanged event, Emitter<AppState> emit) {
    emit(state.copyWith(isDarkTheme: event.isDarkTheme));
  }

  FutureOr<void> _onGetAppServerConfig(
      GetAppServerConfig event, Emitter<AppState> emit) {
    return runBlocCatching(
      handleLoading: false,
      action: () async {
        // final serverConfig = await _getServerConfigUseCase.execute();
        // emit(
        //   state.copyWith(
        //     isForceUpdate: serverConfig.isForceUpdate,
        //     isMaintaining: serverConfig.isMaintaining,
        //   ),
        // );
      },
    );
  }

  FutureOr<void> _onGetCurrentUser(
      GetCurrentUser event, Emitter<AppState> emit) async {
    return runBlocCatching(
      handleLoading: false,
      action: () async {
        // final user = await _getCurrentUserUseCase.execute(
        //   GetCurrentUserParams(forceRefreshToken: event.forceRefreshToken),
        // );
        // add(LoggedUserChanged(user));

        if (event.checkContractStatus) {
          add(const GetUserSignContractStatus());
        }

        // await Future.delayed(const Duration(milliseconds: 300), () {
        //   event.onSuccess?.call(user);
        // });

        event.completer?.complete();
      },
    );
  }

  FutureOr<void> _onGetSignContractStatus(
      GetUserSignContractStatus event, Emitter<AppState> emit) async {
    if (!state.isLoggedIn) {
      return;
    }

    return runBlocCatching(
      handleLoading: false,
      action: () async {
        // final isSigned = await _checkSignedContractUseCase.execute();

        // if (state.currentUser == null || state.currentUser!.hasSignedContract == isSigned) {
        //   return;
        // }
        // add(LoggedUserChanged(state.currentUser, hasSignedContract: isSigned));
      },
    );
  }

  FutureOr<void> _onIsLoggedUserChanged(
    LoggedUserChanged event,
    Emitter<AppState> emit,
  ) {
    emit(
      state.copyWith(
        currentUser: event.user?.copyWith(
          isEmailVerified:
              state.currentUser?.isEmailVerified ?? event.user?.isEmailVerified,
          hasSignedContract:
              event.hasSignedContract ?? state.currentUser?.hasSignedContract,
        ),
      ),
    );
    notifyListeners();

    // Clear storage if user id is changed
    if (state.lastUserId != event.user?.id) {
      HydratedBloc.storage.clear();
      emit(
        state.copyWith(
          lastUserId: event.user != null ? event.user!.id : state.lastUserId,
        ),
      );
    }
  }
}
