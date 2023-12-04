part of 'app_bloc.dart';

@freezed
class AppState extends BaseState with _$AppState {
  const factory AppState({
    @Default(LocaleConfig.defaultLocale) String locale,
    @Default(false) bool isDarkTheme,
    User? currentUser,
    @Default(false) isForceUpdate,
    @Default(false) isMaintaining,
    String? lastUserId,
  }) = _AppState;

  factory AppState.fromJson(Map<String, dynamic> json) =>
      _$AppStateFromJson(json);

  const AppState._();

  bool get isLoggedIn => currentUser != null;
}
