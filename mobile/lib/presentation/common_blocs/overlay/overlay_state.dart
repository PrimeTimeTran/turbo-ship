part of 'overlay_bloc.dart';

@freezed
class AppOverlayState with _$AppOverlayState {
  const factory AppOverlayState({
    AlertMessage? alertMessage,
  }) = _AppOverlayState;
}

@freezed
class AlertMessage with _$AlertMessage {
  const factory AlertMessage({
    required String message,
    required AlertType type,
  }) = _AlertMessage;
}
